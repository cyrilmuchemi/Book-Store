import { Routes, Route } from 'react-router-dom';
import Container from './components/Container';
import Form from './components/Form';
import { Category } from './components/Category';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route
            path="/"
            element={(
              <div>
                <Container />
                <Form />
              </div>
)}
          />
          <Route path="/Category" element={<Category />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
