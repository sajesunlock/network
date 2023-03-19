/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebaseConfig";
import { setData } from "../service/dataService";

export default function AddCommunityForm({ lat, lng }) {
  const [progrss, setProgrss] = useState(0);
  const [isLoading, setIsLoading] = useState();
  const [file, setFile] = useState();
  const [url, setUrl] = useState();
    const [community, setCommunity] = useState({
        name: "",
        desc: "",
        email: "",
        number: "",
        address: "",
    });

    const handleChange = (e) => {
        setCommunity({
            ...community,
            [e.target.name]: e.target.value,
            lat,
            long: lng,
        });
    };

    const onFileUpload = () => {
      if (!file) return;
        setIsLoading(true);
        const storageRef = ref(storage, `/files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        // eslint-disable-next-line function-paren-newline
        uploadTask.on("state_changed", (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgrss(progress);
            console.log(progress);
        }, (err) => {
            console.log(err);
            setIsLoading(false);
        }, () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((url1) => {
              setUrl(url);
              setCommunity({
                ...community,
                url,
              });
              setIsLoading(false);
              console.log(url1);
          });
        });
  };

  const onFileChange = (e) => {
    alert("change");
      setFile(e.target.files[0]);
      onFileUpload();
  };

  const handleSubmit = async () => {
        console.log(url);
        setData("community", community);
        alert("community has add !");
        setCommunity({
          name: "",
          desc: "",
          email: "",
          number: "",
          address: "",
      });
    };

  return (
    <div className="p-4 mt-0">
        <div className="form-group">
          <label htmlFor="exampleDropdownFormEmail2">Community Name</label>
          <input type="text" className="form-control" value={community.name} name="name" onChange={handleChange} id="exampleDropdownFormEmail2" placeholder="Nom" />
        </div>
        <label htmlFor="exampleDropdownFormPassword2">Geolocalisation</label>
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" value={lat} placeholder="Latitude" />
          </div>
          <div className="col">
            <input type="text" className="form-control" value={lng} placeholder="Longitude" />
          </div>
        </div>
        <div className="custom-file mt-3 mb-3">
          <input type="file" className="custom-file-input" onChange={onFileChange} onSelect={onFileChange} id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
          <label className="custom-file-label" htmlFor="inputGroupFile01">{file ? file.name : "Choose file"}</label>
        </div>
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" name="email" value={community.email} onChange={handleChange} placeholder="email" />
          </div>
          <div className="col">
            <input type="text" className="form-control" name="number" value={community.number} onChange={handleChange} placeholder="phone number" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleDropdownFormEmail2">Address</label>
          <input type="text" className="form-control" name="address" value={community.address} onChange={handleChange} id="exampleDropdownFormEmail2" placeholder="address" />
        </div>
        <div className="form-group mt-3">
          <label>Desc</label>
          <textarea cols={12} className="form-control" value={community.desc} onChange={handleChange} name="desc" />
        </div>
        <button onClick={handleSubmit} className="btn btn-primary btn-block">Ajouter</button>
    </div>
  );
}
