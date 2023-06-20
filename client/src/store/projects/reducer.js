import { createReducer } from "@reduxjs/toolkit";
import { addProject, addSection, addUser, deleteProject, deleteSection, getSharedProjects, getUserProjects, removeUser } from "./actions";

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
  builder.addCase(addProject.fulfilled, (state, { payload }) => {
    state.projects.unshift(payload);
  });
  builder.addCase(addSection.fulfilled, (state, { payload }) => {
    const i = state.projects.map(p => p.project_id).indexOf(payload.project_id);
    if (i > -1) state.projects[i].sections.unshift(payload);
  });
  builder.addCase(deleteSection.fulfilled, (state, { payload }) => {
    for (let i = 0; i < state.projects.length; i++) {
      state.projects[i].sections = state.projects[i].sections.filter(s => s.section_id !== payload.section_id);
    }
  });
  builder.addCase(deleteProject.fulfilled, (state, { payload }) => {
    state.projects = state.projects.filter(p => p.project_id !== payload.project_id);
  });
  builder.addCase(addUser.fulfilled, (state, { payload }) => {
    if (payload)
    {
      const i = state.projects.map(p => p.project_id).indexOf(payload.project_id);
      if (i > -1) state.projects[i].users.unshift(payload.user);
    }
  });
  builder.addCase(removeUser.fulfilled, (state, { payload }) => {
    if (payload)
    {
      const i = state.projects.map(p => p.project_id).indexOf(payload.project_id);
      if (i > -1) {
        const j = state.projects[i].users.map(u => u.user_id).indexOf(payload.user_id.toString());
        if (j > -1) state.projects[i].users.splice(j, 1);
      }
    }
  });
});

export { reducer };