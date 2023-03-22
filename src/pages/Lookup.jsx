import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useMap } from "react-leaflet";
import { useTranslation } from "react-i18next";
import { auth } from "../firebase/firebaseConfig";
import db from "../service/dataService";
import AddCommunityForm from "../components/AddCommunityForm";
import ItemCommunity from "../components/ItemCommunity";
import Map from "../components/Map";
import Modal from "../components/Modal";

export default function Lookup() {
  const [community, setCommunity] = useState(null);
  const [isLogging, setisLogging] = useState(false);
  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);

  const { t, i18n } = useTranslation();

  function MyComponent() {
    const map = useMap();

    map.addEventListener("click", (e) => {
      setLat(e.latlng.lat);
      setLng(e.latlng.lng);
    });

    return null;
  }

    useEffect(() => {
        async function getCommunity() {
            const query = collection(db, "community");
            const data = await getDocs(query);
            setCommunity(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getCommunity();
    }, []);

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            // const uid = user.uid;
            setisLogging(true);
            // ...
            // console.log("uid", uid)
          } else {
            // User is signed out
            // ...
            console.log("user is logged out");
          }
      });
  }, []);
  return (
    <div className="container-fluid">
        <div className="row mt-3 p-5 rounded bg-light">
            <div className="col-md-8">
            <h4>{t("lookup.title")}</h4>
              <hr />
                <Map
                  community={community}
                  MyComponent={MyComponent}
                />
            </div>
            <div className="col-md-4 mt-5">
              <ItemCommunity community={community} />
              <hr />
              <h3 className="titre">Ajouter community</h3>
              {isLogging ? (
                <AddCommunityForm
                  lat={lat}
                  lng={lng}
                />
               ) :
              <Modal /> }
            </div>
        </div>
    </div>
  );
}
