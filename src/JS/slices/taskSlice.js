import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    posts: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload); // orr posts:[...state.posts,action.payload]
    },
    editPost: (state, action) => {
      //to get the old id from the editTask
      const Index = state.posts.findIndex(
        (item) => item.id === action.payload.id //item.id for every item in posts array
      );
      state.posts[Index] = action.payload; //to update post
    },

    DoneFilter: (state, action) => {
      state.posts.isDone.filter();
    },
    NotDoneFilter: (state, action) => {
      state.posts.isDone.filter();
    },
  },
});

export const { addPost, editPost, filterPost } = taskSlice.actions;
export default taskSlice.reducer;
