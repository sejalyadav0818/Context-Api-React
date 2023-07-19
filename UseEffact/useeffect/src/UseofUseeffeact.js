import React, { useEffect, useState } from "react";
export const UseofUseeffeact = () => {
  //Use effact is use to fetch data from api becouse
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const fetchedposts = await response.json();
      setPosts(fetchedposts);
    }

    fetchPost();
  }, []);

  return (
    <div className="App">
      <h2>Posts</h2>
      <h3>...are here</h3>

      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};
