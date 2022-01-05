import { Route } from "react-router-dom";
import "./css/styles.css";

import Tasks from "./components/Tasks";

function App() {
  return (
    <div>
      <Route path="/tasks">
        <Tasks />
      </Route>
    </div>
  );
}

export default App;
