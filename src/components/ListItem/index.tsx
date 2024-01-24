import { useState, useContext } from "react";
import { TodoItem } from "../../State";
import Styles from "./style.module.css";
import { ThemeContext } from "../ThemeContainer";

interface ListItemProps {
  todo: TodoItem;
  deleteTodo: (id: string) => void;
  id: string;
  changeMarked: (id: string) => void;
  changeTitle: (id: string, title: string) => void;
}

export const ListItem = ({todo, deleteTodo, id,changeMarked, changeTitle,}: ListItemProps) => {

  const [isEdited, setIsEdited] = useState(false);
  const [title, setNewTitle] = useState(todo.title);
  const newTheme = useContext(ThemeContext)
  
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    changeTitle(id, title);
    setIsEdited(false);
  };

  return (
    <li className={[Styles.li, Styles[newTheme]].join(' ')}>
      <input
        type="checkbox"
        name=""
        id="checkbox-id"
        checked={todo.status}
        onChange={() => changeMarked(id)}
      />

      {!isEdited ? (
        <p
          onClick={() => setIsEdited(true)}
          className={todo.status ? Styles.done : ""}
        >
          {todo.title} {todo.date} {todo.time}
        </p>
      ) : (
        <form onSubmit={onSubmit}>
          <input
            value={title}
            onChange={(event) => setNewTitle(event.currentTarget.value)}
          />
        </form>
      )}
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
};
