import './App.css';
import {BrowserRouter,Routes, Route, Link } from "react-router-dom";
import DisplayAll from './components/DisplayAll';

function App() {
  return (
    <BrowserRouter>
    <h2>Product</h2>
      <Routes>
        <Route path="/" element={<DisplayAll />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
