import React from "react";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import { Provider } from "react-redux";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Success } from "./Success";
import { store } from "./redux";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/success" element={<Success/>} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;


