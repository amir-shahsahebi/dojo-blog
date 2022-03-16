// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const title = "welcome to new blog";
  const like = 50;
  const link = "http://www.google.com";
  return (
    <div className="App">
      <Navbar />
      {/* <Navbar></Navbar> */}
      <div className="content">
        <Home />
        <p>liked {like} times</p>
        <p>{20}</p>
        <p>{"hello"}</p>
        <p>{[7, 8, 9, 10, 11]}</p>
        <p>{Math.random() * 10}</p>
        <a href={link}>google</a>
      </div>
    </div>
  );
}

export default App;
