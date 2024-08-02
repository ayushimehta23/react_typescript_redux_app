// src/redux/reducers.ts

import { combineReducers } from 'redux';
import { PostState, PostActionTypes } from './types';

// Define the initial state and its type
const initialState: PostState = {
  posts: [],
};

// Define the reducer function with types
const postReducer = (state = initialState, action: PostActionTypes): PostState => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

// Combine reducers (assuming you may have other reducers)
const rootReducer = combineReducers({
  posts: postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
