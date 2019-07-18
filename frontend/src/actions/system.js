import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_SYSTEMS, DELETE_SYSTEMS, ADD_SYSTEMS } from "./types";

// GET SYSTEM
export const getSystem = () => dispatch => {
  axios
    .get("/api/system/")
    .then(res => {
      dispatch({
        type: GET_SYSTEMS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE SYSTEM
export const deleteSystem = id => dispatch => {
  axios
    .delete(`/api/system/${id}/`)
    .then(res => {
      dispatch(createMessage({ deleteLead: "System Deleted" }));
      dispatch({
        type: DELETE_SYSTEMS,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD SYSTEM
export const addSystem = system => dispatch => {
  axios
    .post("/api/system/", system, {
      headers: {
        "content-type": "multipart/form-data"
      }
    })
    .then(res => {
      dispatch(createMessage({ addSystem: "System Added" }));
      dispatch({
        type: ADD_SYSTEMS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
