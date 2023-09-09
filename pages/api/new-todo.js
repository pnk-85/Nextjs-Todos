import { MongoClient } from "mongodb";

async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const data = req.body;

      console.log("data", data);

      const client = await MongoClient.connect(
        "mongodb+srv://${pnk}:${VSAOSPULb6ksHeeL}@cluster0.32bfdsg.mongodb.net/todoLists?retryWrites=true&w=majority"
      );

      const db = client.db();

      const todoCollections = db.collection("todoLists");
      const result = await todoCollections.insertOne(data);

      client.close();

      res.status(201).json({ message: "New Todo Inserted " });
    }
  } catch (error) {
    console.log(error);
  }
}

export default handler;