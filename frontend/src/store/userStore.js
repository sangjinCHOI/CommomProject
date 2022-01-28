import { createStore } from "redux";

export default createStore(function (state, action) {
  if (state === undefined) {
    return { iddata: "test" };
  }
  if (action.type === "idInquiry") {
    return { data: action.data };
  }
  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
