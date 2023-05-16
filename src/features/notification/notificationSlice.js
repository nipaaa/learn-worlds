import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notification: [
    {
      topic: "Your password has been sucessfully changed",
      date: "July 2, 2022 at 09.50 AM",
    },
    {
      topic: "Your password has been sucessfylly changed",
      date: "July 2, 2022 at 09.50 AM",
    },
    {
      topic: "Your password has been sucessfylly changed",
      date: "July 2, 2022 at 09.50 AM",
    },
  ],
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    loadNotification: (state, action) => {
      state.notification = action.payload;
    },
  },
});

export const { loadNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
