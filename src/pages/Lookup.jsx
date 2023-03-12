import React from "react";
import Map from "../components/Map";

export default function Lookup() {
  return (
    <div className="container-fluid">
        <div className="row m-0 p-0">
            <div className="col-8">
                <Map />
            </div>
            <div className="col-4">
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                A list item
                <span className="badge badge-primary badge-pill">14</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                A second list item
                <span className="badge badge-primary badge-pill">2</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                A third list item
                <span className="badge badge-primary badge-pill">1</span>
              </li>
            </ul>
            </div>
        </div>
    </div>
  );
}
