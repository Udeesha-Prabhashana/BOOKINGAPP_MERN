import { createContext, useEffect, useReducer } from "react";  //useful when you have data that needs to be accessed by multiple components at different levels in your React component tree.

const INITIAL_STATE = {
  
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {    //"SearchContextProvider" component of the application to enable state management with the "SearchContext" and "SearchReducer".
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE); //"useReducer" hook is used to manage the state within the "SearchContextProvider"

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user))
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};