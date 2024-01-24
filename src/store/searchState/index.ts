import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

// Define a type for the slice state
interface SearchState {
  searchValue: any
}

// Define the initial state using that type
const initialState: SearchState = {
  searchValue: "",
}

export const searchStateAll = createSlice({
  name: "search",
  initialState,
  reducers: {
    _searcContext: (state, action: PayloadAction) => {
      state.searchValue = action.payload
    },
  },
})

export const { _searcContext } = searchStateAll.actions

export default searchStateAll.reducer
