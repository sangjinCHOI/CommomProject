import { createSlice } from "@reduxjs/toolkit";

// 나중에는 서버에서 캐릭터 개수에 따라 각자 적절히 받아와야 할 듯?
const initialCharacterState = {
  nickname: "initialNickname",
  categorySeq: 0,
  introduction: "initialIntroduction",
};

const characterSlice = createSlice({
  name: "character",
  initialState: initialCharacterState,
  reducers: {
    login: (state) => {
      state.nickname = "현재 닉네임";
      state.introduction = "현재 한 줄 소개";
    },
    update: (state, action) => {
      state.nickname = action.payload.data.nickname;
      state.introduction = action.payload.data.introduction;
    },
  },
});

export const { login, update } = characterSlice.actions;
export default characterSlice.reducer;
