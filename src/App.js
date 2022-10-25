import { Routes, Route } from 'react-router-dom';
import { Container } from './components/Container';
import Form from './components/Form';
import { Category } from './components/Category';
import Heading from './components/Heading';
import './App.css';

function App() {
  return (
    <div className="App">
      <Heading />

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
