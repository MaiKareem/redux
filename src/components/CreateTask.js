import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../JS/slices/taskSlice";

const CreateTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = useSelector((state) => state.task.posts.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.elements.title.value;
    const description = form.elements.description.value;
    dispatch(addPost({ title, description, id, isDone: false }));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="id">Title</label>
        <input name="title" type="text" placeholder="enter ID" />
      </div>
      <div>
        <label htmlFor="description">description:</label>
        <textarea
          name="description"
          type="text"
          placeholder="enter description"
        />
      </div>

      <div>
        <input type="submit" value="Add" />
      </div>
    </form>
  );
};

export default CreateTask;
