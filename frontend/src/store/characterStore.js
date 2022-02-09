import { createSlice } from "@reduxjs/toolkit";

// 나중에는 서버에서 캐릭터 개수에 따라 각자 적절히 받아와야 할 듯?
// 캐릭터 전체 리스트로 변환 필요

const initialCharacterState = {
  alarmAllow: false,
  // categorySeq: 0,
  categoryNumber: 0,
  characterActive: true,
  characterCreatedDate: null,
  characterModifiedDate: null,
  characterSeq: 0,
  followAlarm: false,
  introduction: "initialIntroduction",
  modifyAlarm: false,
  nickname: "initialNickname",
  replyAlarm: false,
  reportedTime: 0,
  representativeAchievement: 0,
  userSeq: 0,
  userId: "initialUserId",
  filePath: null,
};

const characterSlice = createSlice({
  name: "character",
  initialState: initialCharacterState,
  reducers: {
    save: (state, action) => {
      state.alarmAllow = action.payload.alarmAllow;
      // state.categorySeq = action.payload.categorySeq;
      state.categoryNumber = action.payload.categoryNumber;
      state.characterActive = action.payload.characterActive;
      state.characterCreatedDate = action.payload.characterCreatedDate;
      state.characterModifiedDate = action.payload.characterModifiedDate;
      state.characterSeq = action.payload.characterSeq;
      state.followAlarm = action.payload.followAlarm;
      state.introduction = action.payload.introduction;
      state.modifyAlarm = action.payload.modifyAlarm;
      state.nickname = action.payload.nickname;
      state.replyAlarm = action.payload.replyAlarm;
      state.reportedTime = action.payload.reportedTime;
      state.representativeAchievement = action.payload.representativeAchievement;
      state.userSeq = action.payload.userSeq;
      state.userId = action.payload.userId;
      state.filePath = action.payload.filePath;
    },
    update: (state, action) => {
      state.introduction = action.payload.introduction;
      state.nickname = action.payload.nickname;
    },
    alarmUpdate: (state, action) => {
      console.log("알람 업데이트 완료", action.payload);
      state.characterSeq = action.payload.characterSeq;
      state.alarmAllow = action.payload.alarmAllow;
      state.likeAlarm = action.payload.likeAlarm;
      state.replyAlarm = action.payload.replyAlarm;
      state.followAlarm = action.payload.followAlarm;
      state.modifyAlarm = action.payload.modifyAlarm;
    },
  },
});

export const { save, update, alarmUpdate } = characterSlice.actions;
export default characterSlice.reducer;
