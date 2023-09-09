import React, { Fragment, useContext, useRef } from "react";
import TodoContext from "../Store/TodoContext";
import Card from "../UI/Card";
import classes from './NewTodo.module.css';


const NewTodo = () => {

    const todoctx = useContext(TodoContext);
    const todoInputRef = useRef();


    const submitHandler = (event) =>{
        event.preventdefault();

        const enteredTodo = todoInputRef.current.value;

        const todoData = {
            id: Math.random().toString(),
            totoContent: enteredTodo,
            date: new Date(),
            doneTask: false,
            status : 'Incomplete'
        };
        props.onTodoList(todoData);
        todoctx.todoAddHandler(todoData);
    }

    return(
        <Fragment>
            <Card>
                <form className={classes.form} onSubmit={submitHandler}>
                    <div className={classes.control}>
                        <label htmlFor="todo">ToDo</label>
                        <textarea id="todo" required rows='5' ref={todoInputRef}></textarea>
                    </div>
                    <div className={classes.actions}>
                        <button>Add</button>
                    </div>
                </form>
            </Card>
        </Fragment>
    )
}

export default NewTodo;