import { configureStore } from '@reduxjs/toolkit';
import { auth, records } from './reducers';
import { authService } from '../services/services';
import { recordsService } from '../services/services';

const store = configureStore({
  reducer: {
    auth,
    records
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: {
        extraArgument: {
          authService,
          recordsService
        },
      },
    });
  },
});

export {store};