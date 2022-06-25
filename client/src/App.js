import './App.css';
import {BrowserRouter,Routes, Route, Link } from "react-router-dom";
import DisplayAll from './components/DisplayAll';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Product Manager</h1>
      <Routes>
        <Route path="/" element={<DisplayAll />}>
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
