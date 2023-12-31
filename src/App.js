import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage, Home, Issue, Repo } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/error" element={<ErrorPage />} />
        <Route path="/repo/:repo" element={<Repo />} />
        <Route path="/repo/:repo/issue/:issue" element={<Issue />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
