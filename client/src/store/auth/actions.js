import { createAsyncThunk } from "@reduxjs/toolkit";
import { ActionType } from "./common";

const getUser = createAsyncThunk(ActionType.GET_USER, async (_args, { extra }) => ({
  user: await extra.authService.getUser()
}));

const signIn = createAsyncThunk(ActionType.SIGN_IN, async (payload, { extra }) =>
  await extra.authService.signIn(payload)
);

const signUp = createAsyncThunk(ActionType.SIGN_UP, async (payload, { extra }) =>
  await extra.authService.signUp(payload)
);

const signOut = () => ({
  type: ActionType.SIGN_OUT,
  payload: {
    user: null
  }
});

export { getUser, signIn, signUp, signOut };