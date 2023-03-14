import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../service/dataService";
import AddCommunityForm from "../components/AddCommunityForm";
import ItemCommunity from "../components/ItemCommunity";
import Map from "../components/Map";

export default function Lookup() {
  const [community, setCommunity] = useState(null);

    useEffect(() => {
        async function getCommunity() {
            const query = collection(db, "community");
            const data = await getDocs(query);
            setCommunity(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getCommunity();
    }, []);

  return (
    <div className="container-fluid">
        <div className="row mt-3 p-0">
            <div className="col-8">
                <Map community={community} />
            </div>
            <div className="col-4">
              <ItemCommunity community={community} />
              <hr />
              <AddCommunityForm />
            </div>
        </div>
    </div>
  );
}
