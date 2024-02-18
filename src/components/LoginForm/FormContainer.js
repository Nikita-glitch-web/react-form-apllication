import React, { useState } from "react";
import { LoginFormComponent } from "./LoginForm";


 const Content = (props) => {
   if (props.veiewMode === "succes") {
     return (
       <LoginFormComponent doWhatYouWantOnSubmit={props.successfullLoginRequest} />
     );
   }

   if (props.veiewMode === "success") {
     return (
       <LoginFormComponent doWhatYouWantOnSubmit={props.successfullLoginRequest} />
     );
   }
 };


function LoginContainer(props) {
  const [veiewMode, setViewMode] = useState("success");


  const successfullLoginRequest = (text) => {
    // ЦЕ КОЛЛ БЕК
    console.log("Callback function called!");
    setViewMode("success", text);
  };

 

  return (
    <Content
      veiewMode={veiewMode}
      successfullLoginRequest={successfullLoginRequest}
    />
  );
}

// вся логіка тут тому що це файл з формою , остальне це верстка ,

export default LoginContainer;