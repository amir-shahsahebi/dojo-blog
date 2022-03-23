// import logo from './logo.svg';
// import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Create from "./Create";
import BlogDetails from "./BlogDetails";

function App() {
  const title = "welcome to new blog";
  const like = 50;
  const link = "http://www.google.com";
  return (
    // all entire app need to soround bu Router and components nested in this app have access to Router 
    <Router>
    <div className="App">
      <Navbar />
      {/* <Navbar></Navbar> */}
      <div className="content">
        {/* all of Routs go inside Switch component */}
        <Switch>
          {/* the path is any thing that come after home page url address and we use exact because we want to just open path named*/}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
        </Switch>
        <p>liked {like} times</p>
        <p>{20}</p>
        <p>{"hello"}</p>
        <p>{[7, 8, 9, 10, 11]}</p>
        <p>{Math.random() * 10}</p>
        <a href={link}>google</a>
      </div>
    </div>
    </Router>
  );
}

export default App;
