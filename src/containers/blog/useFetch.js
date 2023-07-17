import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlog = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url,{signal:abortCont.signal}, requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw Error("could not fetch the data from resource");
          }
          return response.json();
        })
        .then((result) => {
          setData(result);
          setIsLoading(false);
          setError(null);
        })
        .catch((error) => {
          if (error.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsLoading(false);
            setError(error.message);
          }
        });
    }, 1000);
    return () => abortCont.abort();
  };

  useEffect(() => {
    fetchBlog();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
