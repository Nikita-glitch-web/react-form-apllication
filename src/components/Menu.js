import React from "react";
import style from "../styles/Login_page.module.css";

function Menu() {
    return (
      <section className={style.content_wrapper}>
        <div
          style={{ fontFamily: "Roboto" }}
          className={style.content_menu_box}
        >
          <button className={style.content_menu_btn}>Home</button>
          <button className={style.content_menu_btn}>About Us</button>
          <button className={style.content_menu_btn}>Blog</button>
          <button className={style.content_menu_btn}>Pricing</button>
        </div>
      </section>
    );
}


export default Menu;