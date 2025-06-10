/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebaseConfig";
import { setData } from "../service/dataService";

export default function AddCommunityForm({ lat, lng }) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const [community, setCommunity] = useState({
    name: "",
    desc: "",
    email: "",
    number: "",
    address: "",
    lat: lat || "",
    long: lng || "",
    url: "",
  });

  const handleChange = (e) => {
    setCommunity((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      lat,
      long: lng,
    }));
  };

  const onFileUpload = () => {
    if (!file) return;
    setIsLoading(true);
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        );
        setProgress(percent);
        console.log("Upload progress:", percent);
      },
      (err) => {
        console.error(err);
        setIsLoading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url1) => {
          setUrl(url1);
          setCommunity((prev) => ({
            ...prev,
            url: url1,
          }));
          setIsLoading(false);
        });
      },
    );
  };

  const onFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      onFileUpload();
    }
  };

  const handleSubmit = async () => {
    if (!community.name || !community.lat || !community.long) {
      alert("Please fill all required fields including coordinates.");
      return;
    }

    try {
      await setData("community", community);
      alert("Community has been added!");
      setCommunity({
        name: "",
        desc: "",
        email: "",
        number: "",
        address: "",
        lat: lat || "",
        long: lng || "",
        url: "",
      });
      setFile(null);
      setUrl("");
      setProgress(0);
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="p-4 mt-0">
      <div className="form-group">
        <label>Community Name *</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={community.name}
          onChange={handleChange}
          placeholder="Name"
        />
      </div>

      <label>Geolocation   <span className="text-danger"> *Click on the map for the position</span> </label>
      <div className="row">
        <div className="col">
          <input
            type="number"
            className="form-control"
            value={lat}
            placeholder="Latitude"
          />
        </div>
        <div className="col">
          <input
            type="number"
            className="form-control"
            value={lng}
            placeholder="Longitude"
          />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <input
            type="email"
            className="form-control"
            name="email"
            value={community.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            name="number"
            value={community.number}
            onChange={handleChange}
            placeholder="Phone number"
          />
        </div>
      </div>

      <div className="form-group mt-3">
        <label>Address</label>
        <input
          type="text"
          className="form-control"
          name="address"
          value={community.address}
          onChange={handleChange}
          placeholder="Address"
        />
      </div>

      <div className="form-group mt-3">
        <label>Description</label>
        <textarea
          className="form-control"
          name="desc"
          value={community.desc}
          onChange={handleChange}
          rows="3"
        />
      </div>

      <div className="form-group mt-3">
        <label>Upload Image</label>
        <input type="file" className="form-control" onChange={onFileChange} />
        {progress > 0 && <small>Upload Progress: {progress}%</small>}
      </div>

      <button
        onClick={handleSubmit}
        className="btn btn-primary btn-block mt-3"
        disabled={isLoading}
      >
        {isLoading ? "Uploading..." : "Add Community"}
      </button>
    </div>
  );
}
