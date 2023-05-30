import { createAsyncThunk } from "@reduxjs/toolkit";
import { ActionType } from "./common";

const getUserRecords = createAsyncThunk(ActionType.GET_USER_RECORDS, (payload, { extra }) =>
  extra.recordsService.getUserRecords(payload)
);

const getPublicRecords = createAsyncThunk(ActionType.GET_PUBLIC, (_args, { extra }) =>
  extra.recordsService.getPublicRecords()
);

const addRecord = createAsyncThunk(ActionType.ADD_RECORD, (payload, { extra }) =>
  extra.recordsService.addRecord(payload)
)

export { getUserRecords, getPublicRecords, addRecord };