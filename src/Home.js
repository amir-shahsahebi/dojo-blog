import { useState , useEffect} from "react";
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
  const handleDelete = (id) => {
      const newBlogs= blogs.filter(blog=> blog.id !== id)
      setBlogs(newBlogs)
  }
  //use effect run when every render done 
  //use effect dependencies [] run just in first load and other like below
  useEffect(()=>{
    console.log("use effect ran");
    // console.log(blogs);
    console.log(name);
  },[name])
  return (
    <div className="home">
      <BlogList blogs={blogs} title= "All blogs" handleDelete={handleDelete} />
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
