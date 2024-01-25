import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

// Define a type for the slice state
interface dataContextUser {
  data: any
  loading: boolean
  error: string
}

// Define the initial state using that type
const initialState: dataContextUser = {
  data: [],
  loading: false,
  error: "",
}

export const fetchUserData = createAsyncThunk(
  "fetchUserData",
  async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}`)
    return response.data
  }
)

export const dataContext = createSlice({
  name: "dataUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state) => {
      state.loading = true
      state.error = ""
    })
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.data = action.payload
      state.error = ""
    })
    builder.addCase(fetchUserData.rejected, (state) => {
      state.loading = false
      state.error = "errordata"
    })
  },
})

// Other code such as selectors can use the imported `RootState` type

export default dataContext.reducer
