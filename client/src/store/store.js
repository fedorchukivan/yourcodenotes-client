import { configureStore } from '@reduxjs/toolkit';
import { auth, cards } from './reducers';
import { authService } from '../services/services';

const store = configureStore({
  reducer: {
    auth,
    cards
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