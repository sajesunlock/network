/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";

import { setData } from "../service/dataService";

export default function AddCommunityForm({ lat, lng }) {
    const [community, setCommunity] = useState({
        name: "",
        desc: "",
    });

    const handleChange = (e) => {
        setCommunity({
            ...community,
            [e.target.name]: e.target.value,
            lat,
            long: lng,
        });
    };

    const handleSubmit = () => {
        setData("community", community);
        alert("community has add !");
        setCommunity({
          name: "",
          desc: "",
      });
    };
  return (
    <div className="p-4 mt-0">
        <div className="form-group">
          <label htmlFor="exampleDropdownFormEmail2">Community Name</label>
          <input type="text" className="form-control" name="name" onChange={handleChange} id="exampleDropdownFormEmail2" placeholder="Nom" />
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
        <div className="custom-file mt-3">
          <input type="file" className="custom-file-input" multiple id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
          <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
        </div>
        <div className="form-group mt-3">
          <label>Desc</label>
          <textarea cols={12} className="form-control" onChange={handleChange} name="desc" />
        </div>
        <button onClick={handleSubmit} className="btn btn-primary btn-block">Ajouter</button>
    </div>
  );
}
