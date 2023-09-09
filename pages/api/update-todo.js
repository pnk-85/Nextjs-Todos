import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  try {
    if (req.method === "PUT") {
      const data = req.body;

      console.log("data", data);

      const client = await MongoClient.connect(
        "mongodb+srv://pankajG:fsOwSgT93h8llDov@cluster0.lo4ua9c.mongodb.net/todoLists?retryWrites=true&w=majority"
      );

      const db = client.db();

      const todoCollections = db.collection("todoLists");

      const todoId = new ObjectId(data.key);

      const newId = { _id: todoId };

      const updateData = {
        $set: {
          id: data.id,
          todoContent: data.todoContent,
          date: data.date,
          doneTask: data.doneTask,
        },
      };

      const result = await todoCollections.updateOne(newId, updateData);

      client.close();

      res.status(201).json({ message: " Todo Updated " });
    }
  } catch (error) {
    console.log(error);
  }
}

export default handler;