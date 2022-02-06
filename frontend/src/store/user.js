import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  userSeq: 0,
  userId: "",
  userEmail: "",
  userCreatableCount: 0,
  userBirth: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    save: (state, action) => {
      state.userSeq = action.payload.userSeq;
      state.userId = action.payload.userId;
      state.userEmail = action.payload.userEmail;
      state.userCreatableCount = action.payload.userCreatableCount;
      state.userBirth = action.payload.userBirth;
    },
    saveId: (state, action) => {
      console.log(action.payload);
      state.userId = action.payload.userId;
      state.userEmail = action.payload.userEmail;
    },
  },
});

export const { save, saveId } = userSlice.actions;
export default userSlice.reducer;
