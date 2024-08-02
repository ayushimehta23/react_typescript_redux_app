// src/redux/types.ts

// Define the shape of the posts state
export interface PostState {
    posts: any[]; // You can replace `any` with a more specific type if needed
  }
  
  // Define the shape of actions
  export interface FetchPostsAction {
    type: 'FETCH_POSTS';
    payload: any[]; // Again, replace `any` with a more specific type if possible
  }
  
  export type PostActionTypes = FetchPostsAction;
  