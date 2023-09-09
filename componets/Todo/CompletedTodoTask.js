import React, { useContext } from "react";
import TodoContext from "../Store/TodoContext";
import Card from "../UI/Card";
import { AiFillCloseCircle } from 'react-icons/ai'
import classes from './CompletedTodoTask.module.css';


const CompletedTodoTask = () => {

    const todoContext = useContext(TodoContext);

    const todoListDone = todoContext.todoList.filter((item) => item.doneTask === true);


    return (
        <Card>
            <div className={classes.control}>{/* <h1>Todo List</h1> */}</div>
            <div>
                <table className={classes.table}>
                    <tbody>
                        {todoListDone &&
                            todoListDone.map((item) => {
                                return (
                                    <tr className={classes.tr} key={item.key}>
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