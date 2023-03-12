/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";

import CommunityDataService from "../service/dataService";

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
            [e.target.name]: [e.target.value],
        });
    };

    const handleSubmit = () => {
        console.log("sent");
    };

  return (
    <form className="p-4">
        <div className="form-group">
          <label htmlFor="exampleDropdownFormEmail2">Community Name</label>
          <input type="text" className="form-control" name="name" id="exampleDropdownFormEmail2" placeholder="Nom" />
        </div>
        <label htmlFor="exampleDropdownFormPassword2">Geolocalisation</label>
        <div className="form-inline">
          <input type="number" className="form-control col" name="lat" id="exampleDropdownFormPassword2" placeholder="lat" />
          <input type="number" className="form-control col" name="long" id="exampleDropdownFormPassword2" placeholder="long" />
        </div>
        <div className="form-group">
          <label>Desc</label>
          <textarea cols={12} className="form-control" name="desc" />
        </div>
        <div className="form-group">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
            <label className="form-check-label" htmlFor="dropdownCheck2">
              Remember me
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Ajouter</button>
    </form>
  );
}
