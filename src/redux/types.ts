// src/redux/types.ts

// Define a specific Post interface
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Define the shape of the posts state
export interface PostState {
  posts: Post[];
}

// Define the shape of actions
export interface FetchPostsAction {
  type: 'FETCH_POSTS';
  payload: Post[];
}

export type PostActionTypes = FetchPostsAction;
