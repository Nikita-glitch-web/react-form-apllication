import React from "react";
import style from "../styles/Menu.module.css";

export const Menu = () => {
  return (
    <nav className={style.content_menu_box}>
      <button className={style.content_menu_btn}>Home</button>
      <button className={style.content_menu_btn}>About Us</button>
      <button className={style.content_menu_btn}>Blog</button>
      <button className={style.content_menu_btn}>Pricing</button>
    </nav>
  );
};
