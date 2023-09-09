import React, {useEffect, useState } from "react";
import Card from "../UI/Card";
import { AiFillCloseCircle } from 'react-icons/ai'
import classes from './CompletedTodoTask.module.css';


const CompletedTodoTask = (props) => {


    const [todoList, setTodoListDone] = useState(props.todoList);

    useEffect(() => {
        if(props.todoList){
            setTodoListDone(props.todoList);
        }
    },[props.todoList]);

    let todoListDone = todoList.filter((item) => item.doneTask === true);


    return (
        <Card>
            <div className={classes.control}>{/* <h1>Todo List</h1> */}</div>
            <div>
                <table className={classes.table}>
                    <tbody>
                        {todoListDone &&
                            todoListDone.map((item) => {
                                return (
                                    <tr className={classes.tr} key={item.id}>
                                        <td>
                                            <input
                                                type="checkbox"
                                                checked={item.doneTask}
                                            // onChange={() => handleCheckboxChange(item.id)}
                                            ></input>
                                        </td>
                                        <td className={classes.td}>{item.todoContent}</td>

                                        <td>
                                            <AiFillCloseCircle
                                            // onClick={(e) => {
                                            //   e.stopPropagation();
                                            //   onDeleteHandler(item);
                                            // }}
                                            />
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </Card>
    )
}

export default CompletedTodoTask;