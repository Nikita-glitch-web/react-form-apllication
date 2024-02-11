import React from "react";
import style from "./LoginForm.module.css";
import { LoginBtn } from "../LoginButtons/LoginBtn";
import { SubmitBtn } from "../LoginButtons/SubmitBtn";

export const LoginFormComponent = () => {
  return (
    <form className={style.login_form}>
      <div className={style.inputs_wrapper}>
        <input type="email" placeholder="Email" className={style.form_input} />
        <input
          type="password"
          placeholder="Password"
          className={style.form_input}
        />
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
};
