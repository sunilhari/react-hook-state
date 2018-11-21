import React from "react";
import { Provider } from "../../store";
import { reducers } from "../../store/reducer";
import Counter from "../Counter";
import "./App.css";

function App() {
  return (
    <Provider reducers={reducers}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}
export default App;
