import express from "express";
import { getUsers,createUser,getUser } from "./User/UserController.js"; 
import connectDB from "./database/dbConnection.js";

connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req.ip);
  res.send("Hello World!o i am the endpoint /");
});

app.get("/users", async (req, res) => {
  const users = await getUsers();
  res.send(users);
});

app.get("/user", async (req, res) => {
  const user = await getUser(req.query.name);
  res.send(user);
});

app.post("/users", async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});