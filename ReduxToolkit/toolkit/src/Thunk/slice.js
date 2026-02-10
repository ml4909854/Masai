
import {createSlice , createAsyncThunk} from "@reduxjs/toolkit"
// first step is to create a slice
export const fetchUsers = createAsyncThunk("fetchUser" , async()=>{
   let response = await fetch( "https://jsonplaceholder.typicode.com/users")
   return response.json()
})
const userSlice = createSlice({
  name : "users" , 
  initialState:{
    users:[],
    isLoading:false,
    isError:false
  },
 extraReducers:(builder)
}) 

export default userSlice.reducer