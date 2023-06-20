import { createAsyncThunk } from "@reduxjs/toolkit";
import { ActionType } from "./common";

const getUserProjects = createAsyncThunk(ActionType.GET_USER_PROJECTS, async (_args, { extra }) =>
  await extra.projectsService.getProjectsOfUser()
);

const getSharedProjects = createAsyncThunk(ActionType.GET_SHARED_PROJECTS, async (_args, { extra }) =>
  await extra.projectsService.getSharedProjects()
);

const addProject = createAsyncThunk(ActionType.ADD_PROJECT, async (payload, { extra }) =>
  await extra.projectsService.addProject(payload)
);

const addSection = createAsyncThunk(ActionType.ADD_SECTION, async (payload, { extra }) =>
  await extra.projectsService.addSection(payload)
);

const deleteSection = createAsyncThunk(ActionType.DELETE_SECTION, async (payload, { extra }) =>
  await extra.projectsService.removeSection(payload)
);

const deleteProject = createAsyncThunk(ActionType.DELETE_PROJECT, async (payload, { extra }) =>
  await extra.projectsService.removeProject(payload)
);

const addUser = createAsyncThunk(ActionType.ADD_USER, async (payload, { extra }) =>
  await extra.projectsService.addUser(payload)
);

const removeUser = createAsyncThunk(ActionType.REMOVE_USER, async (payload, { extra }) =>
  await extra.projectsService.removeUser(payload)
);

export {
  getUserProjects,
  getSharedProjects,
  addProject,
  addSection,
  deleteSection,
  deleteProject,
  addUser,
  removeUser,
};