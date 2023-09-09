import React,{Fragment, useState} from "react"
import NewTodo from "@/componets/Todo/NewTodo";
import TodoList from "@/componets/Todo/TodoList";

const index = (props) => {

    const [todoList, setTodoList] = useState([]);

    const addtodoListHandler = (addedTodoList) => {

        setTodoList((prevState) => {
            const newTodoList = [...prevState, addedTodoList];
            return newTodoList;
        })
    };

    return(
        <Fragment>
            <div>
            <h1>Add new Todo</h1>
            <NewTodo onTodoList={addtodoListHandler} />
            </div>
            <div>
                <TodoList todoList={todoList} />
            </div>
        </Fragment>
    )
}

export default index;