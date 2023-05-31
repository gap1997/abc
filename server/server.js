
const express = require("express");
const cors = require("cors");
const app = express();
const { MongoClient, ObjectId } = require("mongodb");

const URL = "mongodb://127.0.0.1:27017";

const client = new MongoClient(URL);
app.use(express.json());
app.use(cors());
/* app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
}); */

app.get("/", async (req, res) => {
  console.log();
  const result = await client.connect();
  const db = result.db("table");
  const collection = db.collection("userdata");
  const data = await collection.find({}).toArray();
  res.send(data);
});

// Insert data using console

app.post("/api/users", async (req, res) => {
  const userData = req.body; // Assuming the request body contains the user data

  try {
    const result = await client.connect();
    const db = result.db("table");
    const collection = db.collection("userdata");
    await collection.insertOne(userData);
    res.send("User data stored successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error storing user data");
  }
});

//delete api
app.delete("/api/users/:id", async (req, res) => {
  const userId = req.params.id; // Assuming the user ID is provided as a parameter

  try {
    const result = await client.connect();
    const db = result.db("table");
    const collection = db.collection("userdata");

    const deletionResult = await collection.deleteOne({
      _id: new ObjectId(userId),
    });

    if (deletionResult.deletedCount === 1) {
      res.send("User data deleted successfully");
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting user data");
  }
});


//update api


app.put("PUT/api/users/:id", async (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;

  try {
    const result = await client.connect();
    const db = result.db("table");
    const collection = db.collection("userdata");
    const updateResult = await collection.updateOne(
      { _id: new objectId(userid) },
      { $set: updatedData }
    );
    if (updateResult.matchedCount === 1) {
      res.send("User data updated Succesfully");
    }
    else {
      res.status(404).send("User Not Found");
    }
  } catch (error) {
    console.error(error)
    res.status(500).send("Error updateing User data");
  }
  
});


app.listen(5100, function (req, res) {
  console.log("Server is started");
});
