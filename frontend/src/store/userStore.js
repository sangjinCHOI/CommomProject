import { createStore } from "redux";

export default createStore(function (state, action) {
  if (state === undefined) {
    return { iddata: "test" };
  }
  if (action.type === "idtrans") {
    return { iddata: action.iddata };
  }
  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
