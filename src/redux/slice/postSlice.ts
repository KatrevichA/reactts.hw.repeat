import {IPost} from "../../models/IPost";
import {createSlice, isFulfilled} from "@reduxjs/toolkit";
import {loadPosts} from "../exstraReducers/loadPosts";

type PostSliceType = {
    posts: IPost [],
    isLoaded:boolean
};

const postInitState:PostSliceType = {
    posts:[],
    isLoaded:false
};

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: postInitState,
    reducers:{},
    extraReducers: (builder) =>
        builder
            .addCase(loadPosts.fulfilled,
                (state, action)=>{
                state.posts = action.payload;
                })
            .addMatcher(isFulfilled(loadPosts), (state,action)=>{
                state.isLoaded = true;
            })

});

export const postActions = {
    ...postSlice.actions,
    loadPosts
}