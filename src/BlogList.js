// const BlogList = (props) => {
// or using distructure method
const BlogList = ({blogs , title , handleDelete}) => {
//   console.log(props, blogs);

  return (
    <div className="blog-list">
        <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blogs.title}</h2>
          <p>written by {blog.author}</p>
          <button onClick={()=>handleDelete(blog.id)}>delete blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
