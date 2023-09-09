import React, { Fragment, useRef } from "react";
import { useRouter } from "next/router";
import Card from "../UI/Card";
import classes from './NewTodo.module.css';


const NewTodo = () => {


    const todoInputRef = useRef();
    const router = useRouter();


    const submitHandler = (event) => {
        event.preventdefault();

        const enteredTodo = todoInputRef.current.value;

        if (enteredTodo) {
            const todoData = {
                id: Math.random().toString(),
                totoContent: enteredTodo,
                date: new Date(),
                doneTask: false,
                // status : 'Incomplete'
            };
            props.onTodoList(todoData);
        } else {
            return alert('please entered todo');
        }

        router.replace('/');

        todoInputRef.current.value;

    }

    return (
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