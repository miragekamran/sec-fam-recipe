import axios from 'axios';

export function signingUp(username, email, password) {
  return dispatch => {
    dispatch({ type: 'SIGNINGUP_START' });

    return axios
      .post('https://back-end-build-weeks.herokuapp.com/api/auth/register', {
        username,
        password,
        email,
        // terms,
      })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        dispatch({ type: 'SIGNINGUP_SUCCESS', payload: res.data });
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  };
}
