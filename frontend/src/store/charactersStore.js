import { createSlice } from "@reduxjs/toolkit";

// 나중에는 서버에서 캐릭터 개수에 따라 각자 적절히 받아와야 할 듯?
// 캐릭터 전체 리스트로 변환 필요
const initialCharactersState = {
  nickname: "initialNickname",
  categorySeq: 0,
  introduction: "initialIntroduction",
  // alarmAllow: false,
  // characterActive: true,
  // characterCreatedDate: null,
  // characterModifiedDate: null,
  // characterSeq: 0,
  // followAlarm: false,
  // modifyAlarm: false,
  // replyAlarm: false,
  // reportedTime: 0,
  // representativeAchievement: 0
};

// const initialCharactersState = []

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
