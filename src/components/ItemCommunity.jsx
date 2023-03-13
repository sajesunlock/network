import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db, { getData } from "../service/dataService";

export default function ItemCommunity() {
    const [community, setCommunity] = useState([0]);

    useEffect(() => {
        async function getCommunity() {
            const query = collection(db, "community");
            const data = await getDocs(query);
            setCommunity(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getCommunity();
    }, []);

    console.log(community);
  return (
    <div className="accordion" id="accordionExample">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h2 className="mb-0">
            <button className="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Collapsible Group Item #1
              <span className="badge badge-primary badge-pill float-right">14</span>
            </button>
          </h2>
        </div>
        <div id="collapseOne" className="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
          <div className="card-body">
            Some placeholder content for the first accordion panel.
            This panel is shown by default, thanks to the <code>.show</code> class.
          </div>
        </div>
      </div>
    </div>
  );
}
