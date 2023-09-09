import React, { useState } from "react";
import TodoContext from "./TodoContext";


const TodoProvider = (props) => {

    const [todoList, setTodoList] = useState([]);

    const todoAddList = (item) => {
        setTodoList((prevState) => {
            const newData = [...prevState, item];

            return newData
        });
    }

    const todoRemoveList = (item) => {
        const delTodo = todoList.filter((todoItem) => todoItem.id !== item.id);
        setTodoList(delTodo);
    }

    const todoTaskDone = (id) => {
        setTodoList((prevData) => {
            prevData.map((row) => {
                row.id === id ? {...row, doneTask: !row.doneTask} : row
            })
        })
    }

    const cartContext ={
        todoList : todoList,
        todoAddList: todoAddList,
        todoRemoveList: todoRemoveList,
        todoTaskDone: todoTaskDone
    }

    return (
        <TodoContext.Provider value={cartContext}>
            {props.childern}
        </TodoContext.Provider>
    )
}

export default TodoProvider;