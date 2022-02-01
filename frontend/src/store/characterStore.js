import { createSlice } from "@reduxjs/toolkit";

const initialCharacterState = {
  nickname: "닉네임",
  categorySeq: 0,
  introduction: "한 줄 소개를 입력하세요.",
};

const characterSlice = createSlice({
  name: "character",
  initialState: initialCharacterState,
  reducers: {
    login: (state) => {
      state.nickname = "현재 닉네임";
      state.introduction = "현재 한 줄 소개";
    },
    // update: (state, action) => {
    //   console.log(action);
    //   state.nickname = action.payload.nickname;
    //   state.introduction = action.payload.introduction;
    // },
    update: (state, action) => {
      state.nickname = action.payload.data.nickname;
      state.introduction = action.payload.data.introduction;
    },
  },
});

export const { login, update } = characterSlice.actions;
export default characterSlice.reducer;
