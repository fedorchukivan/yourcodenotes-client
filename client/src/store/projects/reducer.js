import { createReducer } from "@reduxjs/toolkit";
import { addProject, addSection, addUser, getProjectInfo, getSharedProjects, getUserProjects, removeUser } from "./actions";

const initialState = {
  projects: []
}

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(getUserProjects.fulfilled, (state, { payload }) => {
    state.projects = payload;
  });
  builder.addCase(getSharedProjects.fulfilled, (state, { payload }) => {
    state.projects = payload;
  });
  builder.addCase(getProjectInfo.fulfilled, (state, { payload }) => {
    state.project = payload;
  });
  builder.addCase(addProject.fulfilled, (state, { payload }) => {
    state.projects.unshift(payload);
  });
  builder.addCase(addSection.fulfilled, (state, { payload }) => {
    const i = state.projects.map(p => p.id).indexOf(payload.id);
    if (i > -1) state.projects.splice(i, 1, payload);
  });
  builder.addCase(addUser.fulfilled, (state, { payload }) => {
    if (payload)
    {
      const i = state.projects.map(p => p.id).indexOf(payload.id);
      if (i > -1) state.projects.splice(i, 1, payload);
    }
  });
  builder.addCase(removeUser.fulfilled, (state, { payload }) => {
    const i = state.projects.map(p => p.id).indexOf(payload.id);
    if (i > -1) state.projects.splice(i, 1, payload);
  });
});

export { reducer };