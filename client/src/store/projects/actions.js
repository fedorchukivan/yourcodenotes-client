import { createAsyncThunk } from "@reduxjs/toolkit";
import { ActionType } from "./common";

const getUserProjects = createAsyncThunk(ActionType.GET_USER_PROJECTS, (payload, { extra }) =>
  extra.projectsService.getProjectsOfUser(payload)
);

const getSharedProjects = createAsyncThunk(ActionType.GET_SHARED_PROJECTS, (payload, { extra }) =>
  extra.projectsService.getSharedProjects(payload)
);

const getProjectInfo = createAsyncThunk(ActionType.GET_PROJECT, (payload, { extra }) =>
  extra.projectsService.getProjectInfo(payload)
);

const addProject = createAsyncThunk(ActionType.ADD_PROJECT, (payload, { extra }) =>
  extra.projectsService.addProject(payload)
);

const addSection = createAsyncThunk(ActionType.ADD_SECTION, (payload, { extra }) =>
  extra.projectsService.addSection(payload)
);

const addUser = createAsyncThunk(ActionType.ADD_USER, (payload, { extra }) =>
  extra.projectsService.addUser(payload)
);

const removeUser = createAsyncThunk(ActionType.REMOVE_USER, (payload, { extra }) =>
  extra.projectsService.removeUser(payload)
);

export {
  getUserProjects,
  getSharedProjects,
  getProjectInfo,
  addProject,
  addSection,
  addUser,
  removeUser,
};