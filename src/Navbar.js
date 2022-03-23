import {Link} from 'react-router-dom' // instead of <a>href="" </a> react uses <Link>to=""</Link>
//sfc tab
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The dojo blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          // style={{
          //   color: "white",
          //   backgroundColor: "#f1356d",
          //   borderRadius: "8px",
          // }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
