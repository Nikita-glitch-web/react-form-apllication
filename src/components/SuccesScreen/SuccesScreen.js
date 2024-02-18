import React from "react";
import style from "./SuccesScreen.module.css";

export const SucessScreenComponent = () => {
  return (
    <div className={style.success_wrapper}>
      <h1 className={style.success_text}> 
      Thank you for your registration!
      </h1>
    </div>
  );
};