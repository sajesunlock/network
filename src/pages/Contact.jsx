import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation, Trans } from "react-i18next";
import FormContact from "../components/FormContact";

export default function Contact() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container-fluid contact mt-navbar m-0 p-0">
        <div className="col-md-12 col-12 mt-0">
          <div className="col-md-12 col-12 mt-0">
              <h2 className=" mb-2 titleSlug" style={{ paddingTop: "20px" }}>{t("contact.title")}</h2>
              <p className="mt-3 mb-3 infotext">
              <Trans i18nKey="contact.sub">
                Vous souhaitez nous contacter? Vous pouvez soit nous envoyer un courriel à <span className="email">contact@orc.org.ht</span> ou utiliser le numéro +50937027275.
              </Trans>
              </p>
          </div>
        </div>
        {/** for message after send message to the server */}
        <div className="container mt-1">
            <div className="row">
              <FormContact />
            </div>
        </div>
        <Helmet>
          <title>Observatoire des Réseaux Communautaires | Contact </title>
          <meta name="description" content="Actualités haitiennes sur les réseaux communautaires et l'accès à Internet universel" />
        </Helmet>
    </div>
  );
}
