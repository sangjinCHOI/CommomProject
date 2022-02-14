import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./characterStore";
import userReducer from "./user";

import { combineReducers } from "redux";
// import storageSession from "redux-persist/lib/storage/session";
import storage from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const reducers = combineReducers({
  character: characterReducer,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  // localStorage: 일부러 안지우면 영구 보관, session: 인터넷 창 닫으면 사라짐
  // storage: storageSession,
  storage: storage,
  whitelist: ["character", "user"],
  // blacklist: [] // 해당 reducer만 제외
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  // root reducer
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;

// Slice가 여러개여도, redux 라이브러리가 내부적으로 병합해주기 때문에 store은 한개이다.
