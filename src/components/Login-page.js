import React from "react";
import style from "../styles/Login_page.module.css";

function LoginPage() {
  return (
    <section className={style.left_part_of_page}>
      <div className={style.content_box}>
        <h1 className={style.content_title} style={{ fontFamily: "Roboto" }}>
          Digital
        </h1>
        <div className={style.content_form_part}>
          <h1
            className={style.content_subtitle}
            style={{ fontFamily: "Open Sans" }}
          >
            Artificial Intelligence Driving<br></br> Results For The Travel
            Industry
          </h1>
          <p className={style.content_subtext} style={{ fontFamily: "Roboto" }}>
            Welcome back! Please login to your account.
          </p>
          <div className={style.content_login_row}>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
