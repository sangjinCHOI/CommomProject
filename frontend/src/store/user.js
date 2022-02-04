import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  userBirth: "",
  userCreatableCount: 0,
  userEmail: "",
  userId: "",
  userSeq: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    save: (state, action) => {
      state.userBirth = action.payload.userBirth;
      state.userCreatableCount = action.payload.userCreatableCount;
      state.userEmail = action.payload.userEmail;
      state.userId = action.payload.userId;
      state.userSeq = action.payload.userSeq;
    },
  },
});

export const { save } = userSlice.actions;
export default userSlice.reducer;
