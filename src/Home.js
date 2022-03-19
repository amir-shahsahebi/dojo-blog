const Home = () => {
  const handleClick = () => {
    console.log("hi, you click me");
  };
  const handleClickAgain = (name) => {
    console.log("Hello " + name);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => handleClickAgain("Mario")}>Click me again</button>
    </div>
  );
};

export default Home;
