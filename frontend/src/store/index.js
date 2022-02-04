import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";
import characterReducer from "./characterStore";

import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const reducers = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  character: characterReducer,
});

const persistConfig = {
  key: "root",
  storage,
  // characterReducer만 localStorage에 저장
  whitelist: ["character"],
  // 해당 reducer만 제외
  // blacklist: []
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  //root reducer
  // reducer: { counter: counterReducer, auth: authReducer, character: characterReducer },
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;

// Slice가 여러개여도 , store은 한개이다. redux 라이브러리가 내부적으로 병합해주기때문에
