import { TodoItem } from "../../State";
import { ListItem } from "../ListItem";
import styles from "./style.module.css"

interface ListProps {
  todos: TodoItem[];
  changeTitle: (id: string, title: string) => void;
  deleteTodo: (id: string) => void;
  changeMarked: (id: string) => void;
}
export const List = ({
  todos,
  changeTitle,
  deleteTodo,
  changeMarked,
}: ListProps) => (

  <ul className={styles.ul}>
    {todos.map((el) => (
      <ListItem
        todo={el}
        id={el.id}
        deleteTodo={deleteTodo}
        changeMarked={changeMarked}
        changeTitle={changeTitle}
      />
    ))}
  </ul>
);

export default List;
