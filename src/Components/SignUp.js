import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import NavBar from "./NavBar";
import "../index.css";
import axios from "axios";

const SignupForm = ({ errors, touched, values, status }) => {
  const [supUsers, setSupUsers] = useState([]);

  useEffect(() => {
    status && setSupUsers(() => [...supUsers, status]);
  }, [supUsers]);

  return (
    <>
      <NavBar />
      <div className="signup-form-box">
        <h1 className="signup-form-title">Create New Account</h1>
        <Form className="signup-form">
          <div className="signup-inputs">
            <Field
              className="signup-input"
              type="text"
              name="username"
              placeholder="username"
              value={values.username}
            />
            <Field
              className="signup-input"
              type="password"
              name="password"
              placeholder="password"
              value={values.password}
            />
            <Field
              className="signup-input"
              type="text"
              name="email"
              placeholder="email address"
              value={values.email}
            />
          </div>
          <div>
            <button className="signup-create-button">Sign up</button>
          </div>
          <Link to="/login">
            <div>
              <button className="signup-login-button">
                Already Have An Account
              </button>
            </div>
          </Link>
          <div className="alert-message-boxes">
            {touched.username && errors.username && (
              <strong className="alert-message">{errors.username}</strong>
            )}
            {touched.password && errors.password && (
              <strong className="alert-message">{errors.password}</strong>
            )}
            {touched.email && errors.email && (
              <strong className="alert-message">{errors.email}</strong>
            )}
          </div>
        </Form>
      </div>
    </>
  );
};

const FormikSignupForm = withFormik({
  mapPropsToValues({ supUsers }) {
    return {
      username: supUsers || "",
      email: "",
      password: "",
      // terms: false,
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("*Please enter your username!!"),
    email: Yup.string().required("*Please enter your password!!"),
    password: Yup.string().required("*Please enter your email address!!"),
    // terms: Yup.bool(),
  }),

  handleSubmit(values, { setStatus, resetForm, props }) {
    if (values.username && values.password && values.email) {
      axios
        .post(
          "https://back-end-build-weeks.herokuapp.com/api/auth/register",
          values
        )
        .then((res) => {
          console.log("Success:", res);
          setStatus(res.data);
          resetForm();
          localStorage.setItem("token", res.data.token);
          props.history.push("/login");
        })
        .catch((err) => {
          console.log("Error:", err.response);
        });
    }
    console.log("Submitting form", values);
  },
})(SignupForm);

export default FormikSignupForm;
