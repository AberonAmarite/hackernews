import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { hackernewsApi } from "../shared/api/news";
import storiesReducer from "../entities/story/model/storySlice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [hackernewsApi.reducerPath]: hackernewsApi.reducer,
    stories: storiesReducer, // Include the stories reducer in the root reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hackernewsApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
