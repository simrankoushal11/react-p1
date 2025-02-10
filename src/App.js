import './App.css';
import Nav from './component/Nav';
import Home from './component/Home';
import ConvertCase from './component/ConvertCase'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import ToDoWrap from './component/ToDoWrap';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/convert-case" element={<ConvertCase title="Convert Case"/>} />
        <Route path="/to-do" element={<ToDoWrap />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
