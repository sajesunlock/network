import React, { Suspense, useState } from "react";
import { useFormik } from "formik";
import { withTranslation } from "react-i18next";
import contactFormSchema from "../yup/contactFormSchema";
import { postData } from "../fetch/post";

const url = process.env.REACT_APP_API_CONTACT;

function FormContact({ t, i18n }) {
  const [load, setLoad] = useState(false);
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState(false);

  const onSubmit = (values, actions) => {
    const data = postData(`${url}/`, values);
    if (data.error) setErr(data);
    if (!data) setLoad(true);
    setSuccess(true);
    actions.resetForm();
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      message: "",
    },
    validationSchema: contactFormSchema,
    onSubmit,
  });

  return (
      <form onSubmit={handleSubmit} className="col-md-10 mx-auto formContact">
        <h1 className="mt-5 mb-5 titleSlug">{t("contact.formTitle")}</h1>

        <div className="row">
            <div className="col">
                <input
                  type="text"
                  className={errors.name && touched.name ? "form-control control-lg is-invalid" : "form-control control-lg"}
                  value={values.name}
                  name="name"
                  placeholder={t("contact.name")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div className="invalid-feedback">{t("contact.name")}</div>
            </div>
            <div className="col">
                <input
                  type="text"
                  className={errors.email && touched.email ? "form-control control-lg is-invalid" : "form-control control-lg"}
                  value={values.email}
                  name="email"
                  placeholder={t("contact.email")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div className="invalid-feedback">{t("contact.email")}</div>
            </div>
        </div>

        <div className="form-group mt-3 mb-5">
            <input
              className={errors.number && touched.number ? "form-control control-lg is-invalid" : "form-control control-lg"}
              type="text"
              value={values.number}
              placeholder={t("contact.number")}
              name="number"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="invalid-feedback">{t("contact.number")} {errors.number}</div>
            <textarea
              className={errors.message && touched.message ? "form-control control-lg is-invalid mt-3" : "form-control control-lg mt-3"}
              value={values.message}
              name="message"
              id="exampleFormControlTextarea1"
              rows="10"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="invalid-feedback">{t("contact.text")}</div>
            <button type="submit" className="btn btnform btn-light mt-3 form-control">
                {load ?
                <span className="spinner-border spinner-border-lg" role="status" aria-hidden="true"> </span>
                 :
                 t("contact.button") }
            </button>
        </div>

      </form>
  );
}

export default withTranslation()(FormContact);
