import { useState, useEffect } from "react";
const useFetch = (url) => { // custom hooks in react need to start with this word use and also we grab url when we call it because we want to use it in several projects and links
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            // you can watch res.ok in console if you log it
            throw Error("couldn't fetch data from resource"); // this type of error runs when url address in wrong
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        }); //this type of catch runs when it cant fetch the date, like stopping json server
    }, 1000);
  }, [url]); //whenever url changes, this function run again

  return{data, isPending, error} // every hooks must return usefull things
}

export default useFetch