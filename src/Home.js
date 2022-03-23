// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
// resources for json server: http://localhost:8000/blogs
const Home = () => {
  const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs"); //when we use a hook, it automatically import that

  // const [name, setName] = useState("mario");
  // const [age, setAge] = useState("25");
  // const handleClick = () => {
  //   // console.log("hi, you click me", e);
  //   setName("Amir");
  //   setAge(28);
  // };
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



  return (
    <div className="home">
      {{error} && <div>{error}</div>}
      {isPending && <div>Loading ...</div>}
      {blogs && (<BlogList blogs={blogs} title="All blogs" />)}
      {/* {blogs && (<BlogList
          blogs={blogs.filter((blog) => blog.author === "mario")}
          title="mario's blogs"
        />
      )} */}
      {/* <h2>Homepage</h2>
      <p>
        {name} is {age} years old{" "}
      </p>
      <button onClick={handleClick}>Click me</button>
      <button
      //    onClick={(e) => handleClickAgain("Mario", e)}
      >
        Click me again
      </button> */}
    </div>
  );
};

export default Home;
