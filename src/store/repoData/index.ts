import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

// Define a type for the slice state
interface dataContextRepo {
  repoData: any
  loading: boolean
  error: string
}

// Define the initial state using that type
const initialState: dataContextRepo = {
  repoData: [],
  loading: false,
  error: "",
}
interface usernameType {
  username: string
}

export const fetchRepoData = createAsyncThunk(
  "fetchRepoData",
  async (username: usernameType) => {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    )
    return response.data
  }
)

export const repoData = createSlice({
  name: "repo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRepoData.pending, (state) => {
      state.loading = true
      state.error = ""
    })
    builder.addCase(fetchRepoData.fulfilled, (state, action) => {
      state.repoData = action.payload
      state.error = ""
    })
    builder.addCase(fetchRepoData.rejected, (state) => {
      state.loading = false
      state.error = "errordata"
    })
  },
})

// Other code such as selectors can use the imported `RootState` type

export default repoData.reducer
