import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("mario");
  const [age, setAge] = useState("25")
  const handleClick = () => {
    // console.log("hi, you click me", e);
    setName("Amir");
    setAge(28)
  };
  //   const handleClickAgain = (name, e) => {
  //     console.log("Hello " + name, e.target);
  //   };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name} is {age} years old </p>
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
