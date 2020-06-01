import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import NavBar from "./NavBar";
import "../index.css";
import api from "../utils/axiosWithAuth";

const LoginForm = ({ errors, touched, values, status }) => {
  const [signInUser, setSignInUser] = useState([]);

  useEffect(() => {
    status && setSignInUser(() => [...signInUser, status]);
  }, [signInUser]);

  console.log(signInUser);

  return (
    <>
      <NavBar />
      <div className="login-form-box">
        <h1 className="login-form-title">Log In</h1>
        <Form className="login-form">
          <div className="login-inputs">
            <Field
              className="my-input"
              type="text"
              name="username"
              placeholder="username"
              value={values.username}
            />
            <Field
              className="my-input"
              type="password"
              name="password"
              placeholder="password"
              value={values.password}
            />
          </div>
          <div className="login-button-box">
            <button className="login-button">Log in</button>
          </div>
          <Link to="/signup">
            <div className="signup-button-box">
              <button className="signup-button">Sign up</button>
            </div>
          </Link>
          <div className="alert-message-boxes">
            {touched.username && errors.username && (
              <strong className="alert-message">{errors.username}</strong>
            )}
            {touched.password && errors.password && (
              <strong className="alert-message">{errors.password}</strong>
            )}
          </div>
        </Form>
      </div>
    </>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ signInUser }) {
    return {
      username: signInUser || "",
      password: "",
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("*Please enter your username!!"),
    password: Yup.string().required("*Please enter your password!!"),
  }),

  handleSubmit(values, { setStatus, resetForm, props }) {
    console.log("Submitting form", values);
    api()
      .post("/api/auth/login", values)
      .then((res) => {
        console.log("Success:", res);
        setStatus(res.data);
        resetForm();
        localStorage.setItem("token", res.data.token);
        props.history.push("/dashboard");
      })
      .catch((err) => {
        console.log("Error:", err.response);
      });
  },
})(LoginForm);

export default FormikLoginForm;
