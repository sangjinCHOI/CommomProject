import { createStore } from "redux";
// import persistedReducer from "./_reducers";
// import { persistStore } from "redux-persist"; // 추가
// import { PersistGate } from "redux-persist/integration/react"; // 추가

export default createStore(function (state, action) {
  if (state === undefined) {
    return { iddata: "first", emaildata: "first" };
  }

  if (action.type === "idtrans") {
    return {
      iddata: action.iddata,
      emaildata: action.emaildata,
    };
  }

  if (action.type === "passtrans") {
    return {
      passdata: action.passdata,
    };
  }

  // if (action.type === "emailtrans") {
  //   return {
  //     emaildata: action.emaildata,
  //   };
  // }

  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
