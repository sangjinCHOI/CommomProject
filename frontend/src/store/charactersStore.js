import { createSlice } from "@reduxjs/toolkit";

// 나중에는 서버에서 캐릭터 개수에 따라 각자 적절히 받아와야 할 듯?
const initialCharactersState = {
  nickname: "initialNickname",
  categorySeq: 0,
  introduction: "initialIntroduction",
};

const charactersSlice = createSlice({
  name: "character",
  initialState: initialCharactersState,
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

export const { login, update } = charactersSlice.actions;
export default charactersSlice.reducer;
