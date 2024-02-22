import React from "react";
import image from "./images/bicycle-img.svg"
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import style from "./styles/App.module.css";
import './styles/fonts.css'
import { LoginFormComponent } from "./components/LoginForm/LoginForm";
import { LoginBottomBar } from "./components/LoginBottomBar";

function App() {
  return (
    <>
      <header className={style.header}>
        <Logo />
        <Menu />
      </header>
      <main className={style.main}>
        <div className={style.col}>
          <div className={style.formWrapper}>
            <h2 className={style.form_title}>
              Artificial Intelligence Driving<br></br> Results For The Travel
              Industry
            </h2>
            <p className={style.content_subtext}>
              Welcome back! Please login to your account.
            </p>
            <LoginFormComponent />
            <LoginBottomBar />
          </div>
        </div>
        <div className={style.imageWrapper}>
          <div className={style.image_wrapper}>
            <img className={style.image} src={image} alt="Img" />
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  ); // тут будет компонент
}

export default App;
