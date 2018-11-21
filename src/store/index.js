import React, { useContext, useReducer } from "react";

const GlobalContext = React.createContext();

export const Provider = props => {
  const { reducers } = props;
  const [state, dispatch] = useReducer(
    reducers,
    {},
    {
      type: "INIT_STATE_AND_SHOULD_NOT_BE_DEFINED"
    }
  );
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export const connect = Component => {
  function ConnectedComponent(props) {
    const { state, dispatch } = useContext(GlobalContext);
    return <Component {...props} {...state} dispatch={dispatch} />;
  }
  return ConnectedComponent;
};
