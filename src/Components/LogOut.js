import React from "react";
import { Redirect } from "react-router-dom";

function Logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("id");
  return <Redirect to="/login" />;
}

export default Logout;
