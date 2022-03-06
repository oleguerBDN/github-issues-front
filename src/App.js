import { BrowserRouter } from "react-router-dom";
import "./App.css";
import IssuesPage from "./pages/IssuesPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <IssuesPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
