import React from "react";
import style from "./LoginForm.module.css";
import { Formik } from "formik";
import { LoginBtn } from "../LoginButtons/LoginBtn";
import { SubmitBtn } from "../LoginButtons/SubmitBtn";

export const LoginFormComponent = ({ doWhatYouWantOnSubmit }) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, actions) => {
            setTimeout(() => {
              alert("Form is submitted");
              actions.setSubmitting(false);
            }, 1000);
      }}
    >
      {(props) => {
        console.log(props);
        return (
          <form onSubmit={props.handleSubmit} className={style.login_form}>
            <div className={style.inputs_wrapper}>
              <input
                id="email"
                type="email"
                className={style.form_input}
                placeholder="email"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
              />
              {props.errors.email ? (
                <div>
                  <h1 className={style.validation_text}>
                    {props.errors.email}
                  </h1>
                </div>
              ) : null}
              <input
                id="password"
                type="password"
                className={style.form_input}
                placeholder="password"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
              />
              {props.errors.password ? (
                <div>
                  <h1 className={style.validation_text}>
                    {props.errors.password}
                  </h1>
                </div>
              ) : null}
            </div>
            <div className={style.checkbox_content}>
              <div className={style.checkbox_wrapper}>
                <input className={style.checkbox} type="checkbox" />
                <p className={style.checkbox_text}>Remember me</p>
              </div>
              <div className={style.checkbox_btn_wrapper}>
                <button className={style.checkbox_btn}>Forgot Password?</button>
              </div>
            </div>
            <div className={style.btns_wrapper}>
              <LoginBtn />
              <SubmitBtn />
            </div>
          </form>
        );
      }}
    </Formik>
  );
};
