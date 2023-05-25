/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useMap } from "react-leaflet";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import Carousel from "../components/carousel";
import Map from "../components/Map";
import db from "../service/dataService";

import Network from "../static/img/network.png";
import Img1 from "../static/img/PHOTO-2023-05-25-12-46-46.jpg";
import Img2 from "../static/img/PHOTO-2023-05-25-12-47-12 (1).jpg";
import Img3 from "../static/img/logo_transversal.png";

export default function Home() {
  const { t } = useTranslation();
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
      <div className="row p-0 ">
      <div className="col-12 p-0">

        <div className="col-md-12 pr-0 pl-0">
          <Carousel />
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

        <h1 className="titre mb-3 mt-5 mb-3 text-center">{t("section.title")}</h1>
        <p className="text-center text-about">{t("section.subtitle")}</p>
        <Link to="/lookup/community"><h5 className="text-center">{t("section.button")}</h5></Link>
          <div className="row">
            <div className="col-md-12 col-12 mx-auto">
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
              {t("home.main.section3.desc2")}<span><Link to="https://www.internetsociety.org/fr/issues/community-networks/success-stories/mamaila/">Lire plus ici</Link></span>

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
      <div className="container mt-5">
      <div className="row">
        <div className="col-3 mx-auto">
          <h3 style={{ borderBottom: "2px solid black", textAlign: "center" }}>{ t("patner.name") }</h3>
        </div>
      </div>
      <div className="row mt-5 p-5" style={{ backgroundColor: "rgb(255 255 255)" }}>
        <div className="col-m-4 col-12">
            <img src={Img2} className="mt-5" width="100%" alt="" />
        </div>
        <div className="col-m-4 col-12">
            <img src={Img1} width="100%" alt="" />
        </div>
        <div className="col-m-4 col-12">
            <img src={Img3} className="mt-5" width="100%" alt="" />
        </div>
      </div>
      </div>
      <Helmet>
        <title>Observatoire des Réseaux Communautaires | accueil </title>
        <meta name="description" content="Voici la liste des réseaux communautaires d'Haïti et leurs adresses." />
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/4350/4350908.png" />
        <link rel="apple-touch-icon" href="https://cdn-icons-png.flaticon.com/512/4350/4350908.png" />
      </Helmet>
    </div>
  );
}
