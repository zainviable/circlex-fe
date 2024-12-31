import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CommonTextField from "./component/Common/CommonTextField";
import CommonInputField from "./component/Common/CommonInputField";

function App() {
  return (
    <div className="App">
      <CommonTextField text="dasdas" />
      <CommonInputField placeholder="dasda" name={"dasda"} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
