import React from "react";
import AddCommunityForm from "../components/AddCommunityForm";
import ItemCommunity from "../components/ItemCommunity";
import Map from "../components/Map";

export default function Lookup() {
  return (
    <div className="container-fluid">
        <div className="row mt-3 p-0">
            <div className="col-8">
                <Map />
            </div>
            <div className="col-4">
              <ItemCommunity />
              <hr />
              <AddCommunityForm />
            </div>
        </div>
    </div>
  );
}
