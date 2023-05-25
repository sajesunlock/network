import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container rounded bg-light p-5">
      <div className="row">
        <div className="col-md-8 col-12">
          <h2>{ t("about.title1")}</h2>
          <p className="pt-2 pl-3 mt-5 text-about">
          {t("about.desc")}
          </p>
          <p className="pt-2 pl-3 text-about">
          {t("about.desc1")}
          </p>
        </div>
        <div className="col-md-4 col-12 mt-5">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4350/4350908.png"
            alt=""
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <img
            src="https://img.freepik.com/photos-gratuite/batiment-brique-brune-ciel-bleu_23-2148252800.jpg?w=740&t=st=1685027907~exp=1685028507~hmac=64dd18569d4776108b4326996c44e9a25d992c8c6e90295bec9a6aecf9a6ec52"
            alt=""
            width="100%"
            height="500px"
            className="rounded"
          />
        </div>
        <div className="col-md-6">
          <p className="text-about">
          {t("about.desc2")}
          </p>
        </div>
      </div>
      <Helmet>
        <title>Observatoire des Réseaux Communautaires | A propos </title>
        <meta name="description" content="Actualités haitiennes sur les réseaux communautaires et l'accès à Internet universel" />
      </Helmet>
    </div>
  );
}
