import { Routes, Route } from 'react-router-dom';
import { Book } from './components/Book';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path="books" element={<Book />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
