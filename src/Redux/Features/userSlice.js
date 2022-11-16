import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isSignedIn:false,
    userData:null,
    searchInput:"tech",
    blogData:null
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SETISSIGNEDIN:(state , action)=>{
        state.isSignedIn = action.payload
    },
    SETUSERDATA:(state,action)=>{
        state.userData = action.payload
    },
    SETSEARCHINPUT:(state , action)=>{
        state.searchInput = action.payload
    },
    SETBLOGDATA:(state,action)=>{
        state.blogData = action.payload
    }
  }
});

export const {SETBLOGDATA , SETSEARCHINPUT ,SETSIGNEDIN ,SETUSERDATA} = userSlice.actions

export const selectIsSignedIn = (state)=> state.user.isSignedIn
export const selectUserData = (state)=>state.user.userData
export const selectSearchInput = (state)=>state.user.searchInput
export const selectBlogData = (state)=>state.user.blogData
export default userSlice.reducer