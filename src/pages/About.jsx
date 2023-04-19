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
            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MjI3MDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Nzg4OTYyOTI&ixlib=rb-4.0.3&q=80&w=1080"
            alt=""
            width="100%"
            className=""
          />
        </div>
        <div className="col-md-6">
          <p className="text-about">
          {t("about.desc2")}
          </p>
        </div>
      </div>
    </div>
  );
}
