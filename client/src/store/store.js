import { configureStore } from '@reduxjs/toolkit';
import { auth, records, projects } from './reducers';
import { authService, recordsService, projectsService } from '../services/services';

const store = configureStore({
  reducer: {
    auth,
    records,
    projects
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: {
        extraArgument: {
          authService,
          recordsService,
          projectsService
        },
      },
    });
  },
});

export {store};