import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams() // in App.js we define path => /blogs/:id ===so===> the id need to be a variable so we use useParams and mention id that we assign that in app.js to set links dynamic and also use it in <h2></h2>
    const { data: blog, error, isPending } = useFetch("http://localhost:8000/blogs/" + id);
    return(
        <div className="blog-details">
        {isPending && <div>Loading ...</div>}
        {error && <div>{error}</div>}
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>
                <div>{blog.body}</div>
            </article>
        )}
        
        </div>
    );
}
export default BlogDetails