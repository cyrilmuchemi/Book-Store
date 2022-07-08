import { Routes, Route } from "react-router-dom";
import { Books } from './components/Book'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
        <Route path="books" element={<Books />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
