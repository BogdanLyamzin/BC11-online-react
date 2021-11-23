import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Routes from "./Routes";
import Nav from "./client/Nav";

import { getCurrent } from "./redux/auth/auth-operations";
import { getToken } from "./redux/auth/auth-selectors";

import './App.css';

function App() {
  const dispatch = useDispatch();
  const token = useSelector(getToken);

  useEffect(() => {
    if(token){
      dispatch(getCurrent());
    }
  }, [token, dispatch]);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes />
      </div>
    </Router>

  );
}

export default App;
