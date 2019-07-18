import { combineReducers } from "redux";
import leads from "./leads";
import errors from "./errors";
import messages from "./messages";
import system from "./system";
import auth from "./auth";

export default combineReducers({
  leads,
  auth,
  messages,
  errors,
  system
});
