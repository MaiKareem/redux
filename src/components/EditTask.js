import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editPost } from "../JS/slices/taskSlice";

export default function EditTask() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tasks = useSelector((state) => state.task.posts); //to access all tasks in state
  let params = useParams(); //to get id from url
  const id = params.id;

  const task = tasks.find((item) => item.id == id); //to pick one task by its id

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [done, setDone] = useState(task.isDone);

  const handleSubmit = (e) => {
    e.preventDefault(); //after submitting edited task
    dispatch(editPost({ id, title, description, isDone: done })); //old id ,title ,....etc
    navigate("/");
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="id">Title</label>
        <input
          name="title"
          type="text"
          placeholder="enter ID"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">description:</label>
        <textarea
          name="description"
          type="text"
          placeholder="enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <input
        className="form-check-input"
        type="checkbox"
        checked={done}
        onChange={() => setDone(!done)} //reverse false
      />
      <div>
        <input type="submit" value="edit" />
      </div>
    </form>
  );
}
