import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
export function Filter() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.posts);
  const [donebutton, setDonebutton] = useState();

  useEffect(() => {
    const Done = tasks.isDone.filter((tasks) => tasks.isDone === true);

    const NotDone = tasks.isDone.filter((tasks) => tasks.isDone === false);
    setDonebutton(NotDone);
  }, [donebutton]);

  dispatch(DoneFilter(Done));
  dispatch(NotDoneFilter(NotDone));
}
