import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import { UserContextProvider } from "./context/userContext";

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <div className="App">
          <Navbar />
        </div>
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <div>hello</div>
          </Route>
        </Switch>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
