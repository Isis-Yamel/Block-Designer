import createContext from "./createContext";

const randomId = () => Math.floor(Math.random() * 9999);

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOGS':
      return [...state, { 
        title: action.payload.title, 
        content: action.payload.content, 
        id: randomId() },
      ];
      
    case 'DELETE_BLOG':
      return state.filter((blog) => blog.id !== action.payload);
    default:
      return state;
  }
};

const addNewBlog = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: 'ADD_BLOGS', payload: { title, content }});
    callback();
  };
};

const deleteBlog = (dispatch) => {
  return (id) => {
    dispatch({ type: 'DELETE_BLOG', payload: id });
  };
}

export const { Context, Provider } = createContext(reducer, { addNewBlog, deleteBlog }, []);
