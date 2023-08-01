import { createContext, useReducer } from "react";  //useful when you have data that needs to be accessed by multiple components at different levels in your React component tree.

const INITIAL_STATE = {
  
    user: null,
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
    default:
        return state;
  }
};

export const AuthContextProvider = ({ children }) => {    //"SearchContextProvider" component of the application to enable state management with the "SearchContext" and "SearchReducer".
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE); //"useReducer" hook is used to manage the state within the "SearchContextProvider"

  return (
    <AuthContext.Provider
      value={{
        city: state.city,
        dates: state.dates,
        options: state.options,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};