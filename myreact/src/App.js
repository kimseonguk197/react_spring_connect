import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestMain from "./components/TestMain";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<TestMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
