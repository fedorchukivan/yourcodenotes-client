import { createAsyncThunk } from "@reduxjs/toolkit";
import { ActionType } from "./common";

const getUser = createAsyncThunk(ActionType.GET_USER, (_args, { extra }) => ({
  user: extra.authService.getUser()
}));

const signIn = createAsyncThunk(ActionType.SIGN_IN, (payload, { extra }) =>
  extra.authService.signIn(payload)
);

const signUp = createAsyncThunk(ActionType.SIGN_UP, (payload, { extra }) =>
  extra.authService.signUp(payload)
);

const signOut = () => ({
  type: ActionType.SIGN_OUT,
  payload: {
    user: null
  }
});

export { getUser, signIn, signUp, signOut };