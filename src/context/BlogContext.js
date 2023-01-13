import React from "react";
import createContext from "./createContext";

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOGS':
      return [...state, { title:  `Blog ${state.length + 1}` } ]
      
    default:
      return state;
  }
};

const addNewBlog = (dispatch) => {
  return () => {
    dispatch({type: 'ADD_BLOGS'});
  };
};

export const { Context, Provider } = createContext(reducer, { addNewBlog }, []);
