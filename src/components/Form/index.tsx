import Styles from "./style.module.css";
import { useState } from "react";
import { TodoItem } from "../../State";

export interface AddToDoFormProps {
  addToDo:(item: TodoItem)=> void;
}

export const AddToDoForm = ({ addToDo }: AddToDoFormProps) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title) return;

    const newItem = {
      id: new Date().toString(),
      title: title,
      status: false,
      time: time,
      date: date,
    };

    //console.log(newItem);

    addToDo(newItem);

    setTitle("");
    setTime("");
  };

  return (
    <form action="" className={Styles["form-style"]} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="text">New ToDo: </label>
        <input
          type="text"
          placeholder=" New To Do"
          name=""
          id=""
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className={Styles["input-style"]}
        />
      </div>
      <div>
        <label htmlFor="end">Deadline date:</label>
        <input
          className={Styles["input-style"]}
          type="date"
          id="end"
          name=""
          value={date}
          min="2023-01-01"
          max="2100-12-31"
          onChange={(event) => setDate(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="time">Time </label>
        <input
          className={Styles["input-style"]}
          type="time"
          id="time"
          name="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />
      </div>
      <div>
        <button className={Styles["button-style"]}>Add ToDo</button>
      </div>
    </form>
  );
};
