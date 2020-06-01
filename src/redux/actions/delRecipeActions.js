import axios from 'axios';
import axiosWithAuth from '../../utils/axiosWithAuth';



export const delRecipeAction = id => {
  return dispatch => {
    dispatch({ type: 'DELETE_RECIPE' });

    axiosWithAuth()
      .delete(`/api/recipes/${id}`) 
      .then(res => {
        dispatch({ type: 'DELETE_RECIPE_SUCCESSFUL', payload: res.data });
        console.log('Delete:', res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
};