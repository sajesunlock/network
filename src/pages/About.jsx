import React, { useEffect } from "react";
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
          <p className="pt-2 pl-3 mt-5 text-about">L’Observatoire des Réseaux Communautaires (ORC)
          rassemble dans un site unique les projets,
          les subventions et les actualités sur les réseaux communautaires
          dans le monde en vue de favoriser l’accès universel à l’Internet à haut débit
          avec un coût abordable pour les  populations exclues du fait de leur zones géographique,
          du pouvoir économique ou d’absence d’infrastructures de télécommunication
          car l’Organisation des Nations Unis reconnait qu’accéder à Internet est
          un droit fondamental.
          </p>
          <p className="pt-2 pl-3 text-about">Selon le rapport 2023 de We are social et Meltwater,
          dans les 8 milliards de la population mondiale totale,
          le monde compte aujourd’hui 5,16 milliards d’utilisateurs d’Internet,
          ce qui signifie que 64,4 % de la population mondiale est désormais en ligne
          mais 35,6% ne sont pas encore en ligne pour jouir
          les mêmes bénéfices que les populations connectées.
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
            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MjI3MDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Nzg4OTYyOTI&ixlib=rb-4.0.3&q=80&w=1080"
            alt=""
            width="100%"
            className=""
          />
        </div>
        <div className="col-md-6">
          <p className="text-about">Les réseaux communautaires
            se réfèrent aux infrastructures de télécommunications
            déployées et exploitées par un groupe local pour répondre à
            ses propres besoins de communication.
            Ils sont le résultat de personnes travaillant ensemble, combinant leurs ressources,
            unissant leurs efforts et se rapprochant pour combler
            l’absence ou les lacunes de connectivité.
            Concrètement, cet accès à  Internet permettra l’accès au commerce électronique,
            aux services de télé-santé à l’apprentissage à distance,
            à l’engagement social et politique,
            aux services gouvernementaux et  à l’information sur la sécurité publique.
          </p>
        </div>
      </div>
    </div>
  );
}
