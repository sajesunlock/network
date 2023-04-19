/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";
import { useMap } from "react-leaflet";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import Map from "../components/Map";
import db from "../service/dataService";

import Network from "../static/img/network.png";

export default function Home() {
  const { t, i18n } = useTranslation();
  const [community, setCommunity] = useState(null);
  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);

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
  return (
    <div className="container-fluid">
      <div className="row">
      <div className="col-12 p-0">

        <div className="col-12 imgBg">
          <h1 className="titre1">Observatoire des Réseaux Communautaires</h1>
          <button className="btn btn-lg btn-block btn-primary col-md-3 col-6 mt-5 mx-auto">RC News</button>
        </div>

        <div className="row m-0 bg-light">
        <div className="container p-5" style={{ backgroundColor: "#fff" }}>
        <div className="col-md-12 col-12">
          <h1 className="titre mb-3 mt-3 mb-5 text-center">{t("home.main.section1.title")}</h1>
          <div className="row">
          <div className="col-12 col-md-6 mt-3" style={{ borderRight: "1px solid #eee" }}>
             <p className="text-about">{t("home.main.section1.desc")}</p>
          </div>

          <div className="col-12 col-md-6">
            <img className="" src={Network} alt="" width="100%" height="100%" />
          </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6 mt-5">
            <hr />
            <img
              src="https://afcomnet.afroleadership.org/wp-content/uploads/2022/11/Picture-883x500.png"
              alt=""
              width="103%"
              height="100%"
              style={{ borderRight: "1px solid #eee" }}
            />
          </div>
          <div className="col-md-6 col-12 mt-5">
            <hr />
          <h1 className="titre mb-3 mt-3">{t("home.main.section2.title")} </h1>
          <p className="text-about">
            {t("home.main.section2.desc")}
          </p>
          <p className="text-about">
            {t("home.main.section2.desc")}
          </p>
          </div>
        </div>

        <h1 className="titre mb-3 mt-5 mb-3 text-center">RC en Haïti</h1>
        <p className="text-center text-about">voici la liste des réseaux communautaires d&#39;Haïti et leurs adresses.</p>
        <Link to="/lookup/community"><h5 className="text-center">Voir tous les Rc en Haïti {">"} </h5></Link>
          <div className="row">
            <div className="col-md-10 col-12 mx-auto">
              <Map
                MyComponent={MyComponent}
                community={community}
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6 col-12 mt-5">
            <h1 className="titre mb-3 mt-3">{t("home.main.section3.title")}</h1>
            <p className="text-about">
              {t("home.main.section3.desc")}
            </p>

            <p className="text-about">
              {t("home.main.section3.desc2")}
            </p>
            </div>
            <div className="col-md-6 col-12 mt-5">
              <img
                src="https://images.unsplash.com/photo-1606814540563-5c02d62fd409?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MjI3MDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzkwMTY2NjY&ixlib=rb-4.0.3&q=80&w=1080"
                alt=""
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}
