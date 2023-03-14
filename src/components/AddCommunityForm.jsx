/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";

import CommunityDataService, { setData } from "../service/dataService";

export default function AddCommunityForm() {
    const [community, setCommunity] = useState({
        name: "",
        lat: "",
        long: "",
        desc: "",
    });

    const handleChange = (e) => {
        setCommunity({
            ...community,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        setData("community", community);
        alert("community has add !");
        window.location.reload();
    };

  return (
    <form className="p-4 mt-5">
        <div className="form-group">
          <label htmlFor="exampleDropdownFormEmail2">Community Name</label>
          <input type="text" className="form-control" name="name" onChange={handleChange} id="exampleDropdownFormEmail2" placeholder="Nom" />
        </div>
        <label htmlFor="exampleDropdownFormPassword2">Geolocalisation</label>
        <div className="form-inline">
          <input type="number" className="form-control col" name="lat" onChange={handleChange} id="exampleDropdownFormPassword2" placeholder="lat" />
          <input type="number" className="form-control col" name="long" onChange={handleChange} id="exampleDropdownFormPassword2" placeholder="long" />
        </div>
        <div className="form-group">
          <label>Desc</label>
          <textarea cols={12} className="form-control" onChange={handleChange} name="desc" />
        </div>
        <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-block">Ajouter</button>
    </form>
  );
}
