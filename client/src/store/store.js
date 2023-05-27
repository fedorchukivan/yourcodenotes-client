import { configureStore } from '@reduxjs/toolkit';
import { auth } from './reducers';
import { authService } from '../services/services';

const store = configureStore({
  reducer: {
    auth
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: {
        extraArgument: {
          authService
        },
      },
    });
  },
});

export {store};