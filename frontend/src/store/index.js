import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";
import charactersReducer from "./charactersStore";

const store = configureStore({
  //root reducer
  reducer: { counter: counterReducer, auth: authReducer, character: charactersReducer },
});

export default store;

// Slice가 여러개여도 , store은 한개이다. redux 라이브러리가 내부적으로 병합해주기때문에
