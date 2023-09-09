import React from "react";


const TodoContext = React.createContext ({
    todoList : [],
    todoAddList: (todo) => {},
    todoRemoveList: (todo) => {},
});

export default TodoContext;