import axios from "axios";

export function login(username, password) {
  return (dispatch) => {
    dispatch({ type: "LOGIN_START" });

    return axios
      .post("https://back-end-build-weeks.herokuapp.com/api/auth/login", {
        username,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log("LOGIN", res);
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((err) => {
        const payload = err.response ? err.response.data : err;
        console.log("NOT WORKING", err);
        dispatch({ type: "LOGIN_FAILED" });
      });
  };
}
