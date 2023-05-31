import { createAsyncThunk } from "@reduxjs/toolkit";
import { ActionType } from "./common";

const getUserRecords = createAsyncThunk(ActionType.GET_USER_RECORDS, (payload, { extra }) =>
  extra.recordsService.getUserRecords(payload)
);

const getPublicRecords = createAsyncThunk(ActionType.GET_PUBLIC, (payload, { extra }) =>
  extra.recordsService.getPublicRecords(payload)
);

const getSectionRecords = createAsyncThunk(ActionType.GET_SECTION_RECORDS, (payload, { extra }) =>
  extra.recordsService.getSectionRecords(payload)
);

const addRecord = createAsyncThunk(ActionType.ADD_RECORD, (payload, { extra }) =>
  extra.recordsService.addRecord(payload)
);

const updateRecord = createAsyncThunk(ActionType.UPDATE_RECORD, (payload, { extra }) =>
  extra.recordsService.updateRecord(payload)
);

const removeRecord = createAsyncThunk(ActionType.REMOVE, (payload, { extra }) => 
  extra.recordsService.removeRecord(payload)
);

const unpublishRecord = createAsyncThunk(ActionType.UNPUBLISH, (payload, { extra }) => 
  extra.recordsService.unpublishRecord(payload)
);

export {
  getUserRecords,
  getPublicRecords,
  addRecord,
  updateRecord,
  removeRecord,
  unpublishRecord,
  getSectionRecords,
};