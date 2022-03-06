import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import IssueDetailPage from "./pages/IssueDetailPage";
import IssuesPage from "./pages/IssuesPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/issues" element={<IssuesPage />} />
          <Route path="/issue/:id" element={<IssueDetailPage />} />
          <Route path="/*" element={<Navigate to="/issues" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
