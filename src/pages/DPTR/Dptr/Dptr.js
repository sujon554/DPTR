import React, { useEffect, useState } from 'react';

const Dptr = () => {
 
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts?s=${searchTitle}`
    fetch(url)
    .then(res => res.json())
    .then(data =>searchTitle(data))
  }, []);

  const searchFood = e => {
    setSearchTitle(e.target.value)
  }

  return (
    <div>
      <h1>Find</h1>
      <input onChange={searchFood} type="text" name="search" id="" />
      
    </div>
  );
};

export default Dptr;