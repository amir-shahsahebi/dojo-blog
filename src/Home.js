import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const [name, setName] = useState("mario");
  const [age, setAge] = useState("25");
  const handleClick = () => {
    // console.log("hi, you click me", e);
    setName("Amir");
    setAge(28);
  };
  //   const handleClickAgain = (name, e) => {
  //     console.log("Hello " + name, e.target);
  //   };
  return (
    <div className="home">
      <BlogList blogs={blogs} title= "All blogs" />
      <BlogList blogs={blogs.filter(blog=>blog.author==="mario")} title= "mario's blogs" />
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old{" "}
      </p>
      <button onClick={handleClick}>Click me</button>
      <button
      //    onClick={(e) => handleClickAgain("Mario", e)}
      >
        Click me again
      </button>
    </div>
  );
};

export default Home;
