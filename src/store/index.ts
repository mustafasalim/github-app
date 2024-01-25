import { configureStore } from "@reduxjs/toolkit"
import dataContext from "./data"
import searchStateAll from "./searchState"
import repoData from "./repoData"
// ...

export const store = configureStore({
  reducer: {
    dataContext,
    searchStateAll,
    repoData,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type SearchState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
