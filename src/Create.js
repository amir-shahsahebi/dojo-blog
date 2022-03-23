import { useState } from "react";
import { useHistory } from "react-router-dom"; // this use for redirecting page to home page    

const Create = ()=> {
    const [title, setTitle] = useState('') //we use these for better way to sending data via fetch POST to json server
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const [isPending, setIsPending] = useState(false) //because at the begining, we dont press submit :)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, author}
        // console.log(blog)
        setIsPending(true)

        fetch("http://localhost:8000/blogs",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{ // because ist a promise and await ... we use .then()
            console.log('new blog added');
            setIsPending(false)
            // history(go -1) // it says that go to one page before but in this page we do not need it
            history.push('/') // it redirect on home page bacause we assing "/" for home page in App.js
        })
    }
    return(
       <div className="create">
           <h2>Add a new blog</h2>
           <form onSubmit={handleSubmit}>
               <label>Blog Title:</label>
               <input 
               type="text" 
               required
               value={title}
               onChange= {(e)=> setTitle(e.target.value)}
               />
               <label>Blog body:</label>
                <textarea 
                required
                value={body}
                onChange={(e)=> setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange= {(e)=>setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                    <option value="amir">amir</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog ...</button>}
                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
           </form>
       </div> 
    );
}

export default Create