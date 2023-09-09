import React from "react";
import CompletedTodoTask from "@/componets/Todo/CompletedTodoTask";

const DoneTodoList = () => {
    return (
        <div>
            <h1>Completed Todo List</h1>
            <CompletedTodoTask />
        </div>
    )
}

export default DoneTodoList;