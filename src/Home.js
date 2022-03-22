import { useState, useEffect } from "react";
import BlogList from "./BlogList";
// resources for json server: http://localhost:8000/blogs
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true)


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

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };
  
  //use effect run when every render done
  //use effect dependencies [] run just in first load and other like below
  // useEffect(()=>{
  //   console.log("use effect ran");
  //   // console.log(blogs);
  //   console.log(name);
  // },[name])

  useEffect(() => {
    setTimeout(() => {
          fetch("http://localhost:8000/blogs")
            .then((res) => res.json())
            .then((data) => {
              setBlogs(data);
              setIsPending(false);
            });
    }, 1000);
  },[]);

  return (
    <div className="home">
      {isPending && <div>Loading ...</div>}
      {blogs && (<BlogList blogs={blogs} title="All blogs" />)}
      {/* {blogs && (<BlogList
          blogs={blogs.filter((blog) => blog.author === "mario")}
          title="mario's blogs"
        />
      )} */}
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
