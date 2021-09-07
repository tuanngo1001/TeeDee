import "./App.css";
import { Switch, Route } from "react-router-dom";
import AuthenticationPage from "./Components/Authentication";
import TodoPage from "./Components/TodoPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/todos" exact>
          <TodoPage />
        </Route>
        <Route path="/">
          <AuthenticationPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
