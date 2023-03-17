import React from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// import SubcribeFrom from "../components/subcribeFrom";

function Footer({ t, i18n }) {
  return (
    <div>
        <hr />
      <footer className="mt-5 no-print">
          <div className="container-fluid footer">
            <div className="row">
              <div className="col-md-12 col-12 ">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4 col-6 product">
                      <ul className="ul">
                        <a href><li className="titre">{t("footer.title1.title")}</li></a>
                        <li className="mt-5 mb-5">{t("footer.title1.part1")}</li>
                        <hr />
                        <li><span><i className="fa fa-envelope-o " aria-hidden="true" /></span> <a href="mailto:contact@orc.org.ht" className="text-line">{t("footer.title1.part2")}</a></li>
                        <hr />
                        <li> <span><i className="fa fa-phone " aria-hidden="true" /></span> <a className="text-line" href="tel:+50937027275">{t("footer.title1.part3")}</a></li>
                      </ul>
                    </div>
                    <div className="col-md-4 col-6 developer">
                      <ul>
                        <li className="titre">{t("footer.title2.title")}</li>
                        <li className="mt-4 "><Link className="text-line" to="/">{t("footer.title2.part2")}</Link></li>
                        <li className="mt-4 "><Link className="text-line" to="/">{t("footer.title2.part3")}</Link></li>
                        <li className="mt-4 "><Link className="text-line" to="/">{t("footer.title2.part4")}</Link></li>
                        <li className="mt-5 "> <Link className="text-line" to="/">{t("footer.title2.part1")}</Link></li>
                      </ul>
                    </div>
                    <div className="col-md-4  col-6 resource">
                      <ul>
                        <li className="titre">{t("footer.title3.title")}</li>
                        <li className="mt-5 "> <Link className="text-line" to="/contact"> {t("footer.title3.part1")} </Link> </li>
                        <li className="mt-4 "><a className="text-line" href="/condition">{t("footer.title3.part2")}</a></li>
                        <li className="mt-4 "><a className="text-line" href="/privacy">{t("footer.title3.part3")}</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <hr />

                  <div className="row">
                    <div className="col-md-5 mx-auto mt-5">
                    {/**   <SubcribeFrom /> */}
                      <div className="inline mt-5">
                        <a href="https://facebook.com/editionzbooks"> <i className="fa fa-facebook fa-2x m-3" /></a>
                        <a href="https://twitter.com/editionzbooks"> <i className="fa fa-twitter fa-2x m-3" /> </a>
                        <a href="https://www.linkedin.com/company/edition-zbooks"> <i className="fa fa-linkedin-square fa-2x m-3" /> </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
      </footer>
        <hr className="m-0" />
                <div className="col-md-12">
                     <div className="footer">
                          <p>&copy;
                            Copyright  Observatoire des Réseaux
                            Communautaires {new Date().getFullYear()}
                          </p>
                     </div>
                </div>
    </div>
  );
}

export default withTranslation()(Footer);
