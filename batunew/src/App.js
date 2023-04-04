import './App.css';
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <About></About>
      <Contact></Contact>
      <Project></Project>
    </div>
  );
}

export default App;
