import { createReducer } from "@reduxjs/toolkit";
import { getUser, signIn, signUp } from "./actions";
import { ActionType } from "./common";

const initialState = {
  user: null
}

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(getUser.fulfilled, (state, { payload }) => {
    const { user } = payload;

    state.user = user;
  });
  builder.addCase(getUser.rejected, (state) => {
    state.user = null;
    window.sessionStorage.setItem('token', '');
  });
  builder.addCase(signIn.fulfilled, (state, { payload }) => {
    const { token, user } = payload;

    window.sessionStorage.setItem('token', token);
    state.user = user;
  });
  builder.addCase(signUp.fulfilled, (state, { payload }) => {
    const { token, user } = payload;

    window.sessionStorage.setItem('token', token);
    state.user = user;
  });
  builder.addCase(ActionType.SIGN_OUT, (state, action) => {
    const { user } = action.payload;

    window.sessionStorage.setItem('token', '');
    state.user = user;
  });
});

export { reducer };