import { createAsyncThunk } from "@reduxjs/toolkit";
import { ActionType } from "./common";

const getUserRecords = createAsyncThunk(ActionType.GET_USER_RECORDS, async (payload, { extra }) =>
  await extra.recordsService.getUserRecords(payload)
);

const getPublicRecords = createAsyncThunk(ActionType.GET_PUBLIC, async (payload, { extra }) =>
  await extra.recordsService.getPublicRecords(payload)
);

const getSectionRecords = createAsyncThunk(ActionType.GET_SECTION_RECORDS, async (payload, { extra }) =>
  await extra.recordsService.getSectionRecords(payload)
);

const addRecord = createAsyncThunk(ActionType.ADD_RECORD, async (payload, { extra }) =>
  await extra.recordsService.addRecord(payload)
);

const updateRecord = createAsyncThunk(ActionType.UPDATE_RECORD, async (payload, { extra }) =>
  await extra.recordsService.updateRecord(payload)
);

const removeRecord = createAsyncThunk(ActionType.REMOVE, async (payload, { extra }) => 
  await extra.recordsService.removeRecord(payload)
);

const unpublishRecord = createAsyncThunk(ActionType.UNPUBLISH, async (payload, { extra }) => 
  await extra.recordsService.unpublishRecord(payload)
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