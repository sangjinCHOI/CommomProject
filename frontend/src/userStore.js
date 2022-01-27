import { createStore } from "redux";

export default createStore(function (state, action) {
  if (state === undefined) {
    return { iddata: "empty" };
  }
  if (action.type === "idInquiry") {
    return { iddata: action.data };
  }
  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
