import React from "react";
import style from "../styles/Login_page.module.css";

export const LoginBottomBar = () => {
  return (
    <div className={style.content_login_row_btns}>
      <h1
        className={style.content_login_button_row_subtext}
        style={{ fontFamily: "Roboto" }}
      >
        Or login with
      </h1>
      <button
        style={{ fontFamily: "Roboto" }}
        className={style.content_login_row_btn}
      >
        Facebook
      </button>
      <button
        style={{ fontFamily: "Roboto" }}
        className={style.content_login_row_btn}
      >
        LinkedIn
      </button>
      <button
        style={{ fontFamily: "Roboto" }}
        className={style.content_login_row_btn}
      >
        Google
      </button>
    </div>
  );
};
