import React from "react";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import { Provider } from "react-redux";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Success } from "./Success";
import { store } from "./redux";
import Todo from "./Todo";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/success" element={<Success/>} />
          <Route path="/todo" element={<Todo/>} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;


