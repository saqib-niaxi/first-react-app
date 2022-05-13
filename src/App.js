import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Textform from "./components/Textform";
import About from "./components/About";
import React, { useState } from "react";
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom"
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }
      , 1500);
  }


  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enabled", "Success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled", "Success");
    }
  };
  return (
    <>
      <div justifycontent="center" align="center"> 
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div>
          <Alert alert={alert} />
        </div>
        {/* <About /> */}
        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          </Route>
          </Switch>
        </Router> */}
        <Textform showAlert={showAlert} heading={"Enter text below"} mode={mode} />
        </div>
    </>
  );
}

export default App;
