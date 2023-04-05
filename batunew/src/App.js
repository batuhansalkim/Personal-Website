//1:06:06 da kaldım
import './App.css';
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/project' element={<Project />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
