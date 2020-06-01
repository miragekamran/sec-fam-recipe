import api from "../../utils/axiosWithAuth";

//FETCHING A recipe

export const FETCH_RECIPES_START = "FETCH_RECIPES_START";
export const FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS";
export const FETCH_RECIPES_ERROR = "FETCH_RECIPES_ERROR";

export const getRecipes = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_RECIPES_START });

    api()
      .get(`/api/recipes/${localStorage.getItem("recipe")}`)
      .then((res) => {
        console.log("coming from actions", res.data);
        dispatch({
          type: FETCH_RECIPES_SUCCESS,
          payload: res.data.map((data) => {
            return {
              id: data.id,
              title: data.title,
              source: data.source,
              ingredients: data.ingredients,
              instructions: data.instructions,
              category: data.category,
              photo: data.photo,
            };
          }),
        });
      })
      .catch((err) => {
        dispatch({ type: FETCH_RECIPES_ERROR, payload: err.error });
      });
  };
};
