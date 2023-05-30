import { createReducer } from "@reduxjs/toolkit";
import { getPublicRecords, getUserRecords } from "./actions";

const initialState = {
  records: []
}

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(getUserRecords.fulfilled, (state, { payload }) => {
    state.records = payload;
  });
  builder.addCase(getPublicRecords.fulfilled, (state, { payload }) => {
    state.records = payload;
  });
});

export { reducer };