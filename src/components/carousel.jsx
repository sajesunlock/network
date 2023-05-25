import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Img1 from "../static/img/IMG_0871.jpg";
import Img2 from "../static/img/IMG_0873.jpg";
import Img3 from "../static/img/IMG_0876.jpg";
import Img4 from "../static/img/IMG_0877.jpg";

export default function Carousel() {
  const { t } = useTranslation();
  return (
    <div id="carouselExampleCaptions" className="carousel slide " data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active">s</li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1">s</li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2">s</li>
  <li data-target="#carouselExampleCaptions" data-slide-to="3">s</li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Img1} className="d-block w-100" alt="..." />
            <div className="carousel-caption  d-md-block">
              <h1 className="titre1" style={{ position: "relative", top: "-500px" }}>Observatoire des Réseaux Communautaires</h1>
              <Link to="/community/news" className="btn btn-lg btn-block btn-primary col-md-4 col-8 mt-5 mx-auto">{ t("headers.button") }</Link>
            </div>
          </div>

          <div className="carousel-item">
            <img src={Img2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block">
            <h1 className="titre1" style={{ position: "relative", top: "-500px" }}>Observatoire des Réseaux Communautaires</h1>
              <Link to="/community/news" className="btn btn-lg btn-block btn-primary col-md-4 col-8 mt-5 mx-auto">{ t("headers.button") }</Link>
            </div>
          </div>

          <div className="carousel-item">
            <img src={Img3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block">
            <h1 className="titre1" style={{ position: "relative", top: "-500px" }}>Observatoire des Réseaux Communautaires</h1>
              <Link to="/community/news" className="btn btn-lg btn-block btn-primary col-md-4 col-8 mt-5 mx-auto">{ t("headers.button") }</Link>
            </div>
          </div>

          <div className="carousel-item ">
            <img src={Img4} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block">
            <h1 className="titre1" style={{ position: "relative", top: "-500px" }}>Observatoire des Réseaux Communautaires</h1>
              <Link to="/community/news" className="btn btn-lg btn-block btn-primary col-md-4 col-8 mt-5 mx-auto">{ t("headers.button") }</Link>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </button>
    </div>
  );
}
