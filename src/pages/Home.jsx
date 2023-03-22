/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

import Network from "../static/img/network.png";

export default function Home() {
  const { t, i18n } = useTranslation();
  return (
    <div className="container-fluid">
      <div className="row">
      <div className="col-12 p-0">
      <div className="jumbotron">
      <div className="container">
      <h1 className="display-4" style={{ opacity: "1 !important" }}> Observatoire des Réseaux Communautaires</h1>
      <p className="lead">
        <Link className="btn btn-primary btn-lg" to="/about" role="button">{t("nav.button")}</Link>
      </p>
      </div>
      </div>
        <div className="row m-4 p-4 rounded bg-light">
        <div className="col-md-6 col-12">
          <h1 className="titre mb-3 mt-3">{t("home.main.section1.title")}</h1>
          <Trans i18nKey="home.main.section1.desc">
          <p className="">
          Les réseaux communautaires se réfèrent aux infrastructures de télécommunications
           déployées et exploitées par un groupe local pour répondre à ses propres besoins
           de communication[1]. Ils sont le résultat de personnes travaillant ensemble,
            combinant leurs ressources, unissant leurs efforts et se rapprochant
             pour combler l’absence
             ou les lacunes de connectivité.
          </p>
          <p className="lead">
            Le mode de gestion et les conditions d’accès sont entièrement autonome et peuvent être
             définis à leur guise selon les ressources
             et partenariats dont ils disposent.
          </p>
          <p className="lead">
            Concrètement, les réseaux communautaires peuvent, en général,
            couvrir divers besoins comme l’accès au réseau de télécommunication,
            l’accès à Internet ou peuvent être une radio et/ou télévision locale ou autre.
          </p>
          <p className="lead">
            En ce qui concerne les réseaux communautaire sans fil avec Internet,
            en dehors de l’accès aux ressources et services de la toile qui sont
            entre autres l’accès au commerce électronique et aux services de télé-santé,
            l’apprentissage à distance, l’engagement social et politique,
            les services gouvernementaux et l’information sur la sécurité publique,
            les réseaux communautaires favorisent fondamentalement la connectivité aux populations
            exclues du fait de leur zones géographique, du pouvoir économique ou d’absence
            d’infrastructures de télécommunication.
          </p>
          <p className="lead">
          Ces réseaux rendent l’Internet disponible à la communauté cible grâce aux câbles,
           à la fibre optique ou au WIFI (IEEE 802.11). C’est un réseau conçu par la communauté
           et pour la communauté.
          </p>
          </Trans>
        </div>
        <div className="col-12 col-md-6">
          <img src={Network} alt="" width="100%" height="100%" />
        </div>
        <div className="col-12 col-md-6 mt-5">
          <img
            src="https://afcomnet.afroleadership.org/wp-content/uploads/2022/11/Picture-883x500.png"
            alt=""
            width="100%"
            height="100%"
          />
        </div>
        <div className="col-md-6 col-12 mt-5">
        <h1 className="titre mb-3 mt-3">{t("home.main.section2.title")} </h1>
        <Trans i18nKey="home.main.section2.desc">
          <p className="lead">
          Internet fait du monde un endroit plus agréable à vivre 2 où Il crée
            ou facilite le développement économique,
           soutient les petites et moyennes entreprises (PME) et
           crée des opportunités économiques plus larges pour tous.
          </p>
          <p className="lead">
            L’accès à Internet est un droit fondamental de l’homme reconnu par les Nations-Unies
            depuis 2012 et aussi par certains pays comme la France. Pourtant, près de la moitié
           de la population mondiale est encore déconnectée en 2020.
          </p>
        </Trans>
        </div>
        <div className="col-md-6 col-12 mt-5">
          <h1 className="titre mb-3 mt-3">{t("home.main.section3.title")}</h1>
          <Trans i18nKey="home.main.section3.desc">
          <p> The Internet Society (ISOC), in its mission to reduce the digital divide,
            in collaboration with certain local partners,
            has already supported nearly thirty community networks around the world.
            His mantra is for the community, with the community,
            by the community. Below are some examples:
          </p>
          <p> <b> net </b> is a bottom-up, citizen-administered,
          technological and economic project, with the objective of creating a free,
          open and neutral telecommunications network based on a common model.
          </p>
          <p> <b> Nepal Wireless Project </b>: Nepal Wireless Project is a non-profit
          initiative located in remote rural areas of Nepal.
          It was launched in 2002 to bring communication services to villages in Myagdi
          district and to find ways to bridge the digital divide between urban and rural
          areas in Nepal.
          </p>
          <p><b> NYCMesh </b> : Some projects are located in underserved urban areas
          of developed countries.
           In 2019, as part of the Beyond the Net grant program,
           the local New York chapter of the Internet Society set up a community
            network to serve an unconnected community (see details here).
          </p>
          <p> <b>Tusheti </b>, Georgia: The Internet Society has partnered
            with its Georgia Chapter and several Georgian Internet organizations
            to connect the remote and mountainous region of Tusheti to the Internet.
            The project was launched in September 2017, opening new opportunities for
            tourism and cultural preservation, providing an essential communication channel
            for health care and potential emergencies (read more here).
          </p>
          <p> <b>Le réseau sans fil de Mankosi </b>: in South Africa, the people of Mankosi set up a wireless community network to serve 12 villages with more than 6,000 inhabitants who were completely disconnected. A BBC report tells us about it here https://www.youtube.com/watch?v=R9u-hfxAeBo</p>
          </Trans>
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
  );
}
