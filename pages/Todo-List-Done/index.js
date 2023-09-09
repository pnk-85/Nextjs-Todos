import React from "react";
import CompletedTodoTask from "@/componets/Todo/CompletedTodoTask";
import { MongoClient } from "mongodb";

const DoneTodoList = (props) => {
    return (
        <div>
            <h1>Completed Todo List</h1>
            <CompletedTodoTask todoList={props.todoList} />
        </div>
    )
};

export async function getStaticProps() {
    // fetch data from api
  
    const client = await MongoClient.connect(
        "mongodb+srv://${pnk}:${VSAOSPULb6ksHeeL}@cluster0.32bfdsg.mongodb.net/todoLists?retryWrites=true&w=majority"
    );
  
    const db = client.db();
  
    const todoCollections = db.collection("todoLists");
    const todoLists = await todoCollections.find().toArray();
  
    return {
      props: {
        todoList: todoLists.map((item) => ({
          id: item.id,
          todoContent: item.todoContent,
          date: item.date,
          doneTask: item.doneTask,
          key: item._id.toString(),
          // status: item.status,
        })),
      },
      revalidate: 1,
    };
  }

export default DoneTodoList;