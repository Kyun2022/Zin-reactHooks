import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiFetch = () => {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    //   setPosts(res.data);
    // });

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [clicked]);

  const onChangeEvent = (evt) => {
    setId(evt.target.value);
  };

  const onClickHandler = () => setClicked(!clicked);

  return (
    <div>
      <input type="text" value={id} onChange={onChangeEvent} />
      <br />
      <button onClick={onClickHandler}>Get post</button>
      <br />
      {posts.title}
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default ApiFetch;
