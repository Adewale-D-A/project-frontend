import { createSlice } from "@reduxjs/toolkit";

export const userAuthentication = createSlice({
  name: "user authentication",
  initialState: {
    value: {
      status: false,
      access_token: "",
      refresh_token: "",
      user: {
        firstname: "",
        lastname: "",
        matric_number: "",
        username: "",
        email: "",
        hardware_user_id: "",
        role: "",
      },
    },
  },
  reducers: {
    updateAuthentication: (state, action) => {
      state.value.status = true;
      state.value.access_token = action?.payload?.access_token;
      state.value.refresh_token = action?.payload?.refresh_token;
      state.value.user = action?.payload?.user;
    },
    clearAuthentication: (state) => {
      state.value.status = false;
      state.value.access_token = "";
      state.value.refresh_token = "";
      state.value.user = {
        firstname: "",
        lastname: "",
        matric_number: "",
        username: "",
        email: "",
        hardware_user_id: "",
        role: "",
      };
    },
  },
});

export const { updateAuthentication, clearAuthentication } =
  userAuthentication.actions;

export default userAuthentication.reducer;
