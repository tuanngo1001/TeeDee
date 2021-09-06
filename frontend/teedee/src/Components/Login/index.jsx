import React from "react";
import { Helmet } from "react-helmet";
import FormComponent from "./FormComponent";

const AuthenticationPage = () => {
  return (
    <>
      <Helmet>
        <title>TeeDee | Welcome</title>
      </Helmet>
      <div className="login-page">
        <FormComponent />
      </div>
    </>
  );
};

export default AuthenticationPage;
