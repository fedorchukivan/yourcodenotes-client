import { createReducer } from "@reduxjs/toolkit";
import { addRecord, getPublicRecords, getSectionRecords, getUserRecords, removeRecord, unpublishRecord } from "./actions";

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
  builder.addCase(getSectionRecords.fulfilled, (state, { payload }) => {
    state.records = payload;
  });
  builder.addCase(addRecord.fulfilled, (state, { payload }) => {
    state.records.push(payload);
  });
  builder.addCase(removeRecord.fulfilled, (state, { payload }) => {
    state.records = state.records.filter(r => r.id !== payload.id);
  });
  builder.addCase(unpublishRecord.fulfilled, (state, { payload }) => {
    state.records = payload;
  });
});

export { reducer };