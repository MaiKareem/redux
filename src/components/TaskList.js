import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const TaskList = () => {
  const navigate = useNavigate();
  const posts = useSelector((state) => state.task.posts); //task-->name of task slice,posts: array
  //filter


  return (
    <div>
      <button onClick={() => navigate("/add")}> Add Task </button>
      {posts.map((post, index) => (
        <div id={post.id} key={index}>
          <h1> {post.title} </h1>
          <p>{post.description}</p>

          <button onClick={() => navigate("/edit/" + post.id)}>
            Edit Post
          </button>
          <button onClick={() => {}}> Done tasks </button>
          <button onClick={() => {}}> Not done tasks </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
