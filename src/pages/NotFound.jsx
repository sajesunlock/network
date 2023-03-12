import React from "react";
import { withTranslation } from "react-i18next";
import notFound from "../static/img/notfound.svg";

function NotFound({ t, i18n }) {
  return (
      <div className="container mt-5">
          <div className="row">
              <div className="col-8 mx-auto mt-5 mb-5">
                  <h3>{t("notFound.text")}</h3>
                  <img src={notFound} alt="not found" width="100%" />
              </div>
          </div>
      </div>
  );
}

export default withTranslation()(NotFound);
