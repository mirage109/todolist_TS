import React, { useState, useEffect } from "react";
import { GlobalState, TodoItem, Lists } from "../../State";
import "./style.css";
import { AddToDoForm } from "../Form";
import { List } from "../List";
import { Sort } from "../Sort";
import { AddListForm } from "../AddListForm";

const App = (props: GlobalState) => {
  const [todos, setTodos] = useState(props.todos);
  const [listName, setListname] = useState("");
  const [folder, setFolder] = useState(props.lists);

  useEffect(() => {
    const todos = localStorage.getItem(listName);
    const parsedTodos = todos ? JSON.parse(todos) : [];
    setTodos(parsedTodos);
  }, [listName]);

  useEffect(() => {
    const lists = localStorage.getItem("localLists");
    const parsedLists = lists ? JSON.parse(lists) : [""];
    setFolder(parsedLists);
  }, []);

  const addToDo = (newItem: TodoItem): void => {
    const newTodos = [...todos, newItem];
    setTodos(newTodos);
    localStorage.setItem(listName, JSON.stringify(newTodos));
  };

  const changeMarked = (id: string): void => {
    const findElement = todos.find((el) => el.id === id);
    if (findElement === undefined) throw new Error("oops");
    findElement.status = !findElement?.status;
    setTodos([...todos]);
    localStorage.setItem(listName, JSON.stringify([...todos]));
  };

  const deleteTodo = (id: string): void => {
    todos.forEach(function (el, i) {
      if (el.id === id) todos.splice(i, 1);
    });
    setTodos([...todos]);
    localStorage.setItem(listName, JSON.stringify([...todos]));
  };

  const sortByName = (): void => {
    todos.sort((a, b) => (a.title > b.title ? 1 : -1));
    setTodos([...todos]);
  };

  const sortByDate = (): void => {
    todos.sort((a, b) => {
      if (a.date === undefined && b.date === undefined) {
        return 0;
      }
      if (a.date === undefined) {
        return -1;
      }
      if (b.date === undefined) {
        return 1;
      }
      if (a.date > b.date) {
        return 1;
      }
      if (a.date < b.date) {
        return -1;
      }
      if (a.time === undefined && b.time === undefined) {
        return 0;
      }
      if (a.time === undefined) {
        return -1;
      }
      if (b.time === undefined) {
        return 1;
      }
      if (a.time > b.time) {
        return 1;
      }
      if (a.time < b.time) {
        return -1;
      }
      if (a.status === true && b.status === false) {
        return 1;
      }
      if (a.status === false && b.status === true) {
        return -1;
      }
      return 0;
    });
    setTodos([...todos]);
  };

  const changeTitle = (id: string, title: string): void => {
    const findElement = todos.find((el) => el.id === id);
    if (findElement === undefined) throw new Error("oops");
    findElement.title = title;
    console.log("something");
    setTodos([...todos]);
    localStorage.setItem(listName, JSON.stringify([...todos]));
  };

  const handleListSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newList: Lists = {
      id: new Date().toString(),
      listname: listName,
    };

    const addListToFolder = (newList: Lists): void => {
      const newLists = [...folder, newList];
      setFolder(newLists);
      console.log(newLists);
      localStorage.setItem("localLists", JSON.stringify(newLists));
    };

    const findList = folder.find((el) => el.listname === listName);
    if (findList !== undefined) {
      return;
    }

    addListToFolder(newList);
    setListname("");
    console.log(newList);
  };

  return (
    <div className="App">
      <div>
        <AddToDoForm addToDo={addToDo} />
        <AddListForm
          listName={listName}
          folder={folder}
          setListname={setListname}
          handleListSubmit={handleListSubmit}
        />
        <Sort sortByName={sortByName} sortByDate={sortByDate} />
      </div>
      <div>
        <List
          todos={todos}
          deleteTodo={deleteTodo}
          changeMarked={changeMarked}
          changeTitle={changeTitle}
        />
      </div>
    </div>
  );
};

export default App;
