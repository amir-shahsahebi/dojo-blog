// const BlogList = (props) => {

import { Link } from "react-router-dom";

// or using distructure method
const BlogList = ({blogs , title}) => {
//   console.log(props, blogs);

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          </Link>
          {/* <button onClick={()=>handleDelete(blog.id)}>delete blog</button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
