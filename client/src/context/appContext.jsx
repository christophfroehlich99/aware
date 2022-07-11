import React, { useState, useReducer, useContext } from "react";
import reducer from "./reducer";
import { DISPLAY_ALERT, CLEAR_ALERT } from "./actions";

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    setTimeout(() => {
      clearAlert();
    }, 3000);
  };

  const clearAlert = () => {
    dispatch({ type: CLEAR_ALERT });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };