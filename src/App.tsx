import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Login from "./Pages/Login/Login";
import AppBar from "./Shared/AppBar/AppBar";
import { useSelector } from "react-redux";
import { selectAuth } from "./Redux/Auth/authSlice";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function App() {
  const isAuthenticated = useSelector(selectAuth) as boolean;
  let history = useHistory();

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     history.push("/login");
  //   }
  // }, [isAuthenticated, history]);

  return (
    <div className="flex flex-col mx-auto w-11/12 max-w-screen-lg">
      <AppBar />
      <Router>
        {/* {!isAuthenticated === true ? ( */}
        <Switch>
          <Route path="/login" component={Login} />
          {/* </Switch> */}
          {/* ) : ( */}
          {/* <Switch> */}
          <Route path="/profile" component={Profile} />
          <Route path="/" component={Home} />
        </Switch>
        {/* )} */}
      </Router>
    </div>
  );
}

export default App;
