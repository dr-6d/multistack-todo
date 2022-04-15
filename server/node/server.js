const express = require("express");

const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());

const taskArray = [
  { personName: "tom1", task: "task1", intensity: "high", deadline: "today" },
  { personName: "tom2", task: "task2", intensity: "low", deadline: "week" },
  { personName: "tom3", task: "task3", intensity: "high", deadline: "today" },
  { personName: "tom4", task: "task4", intensity: "medium", deadline: "week" },
];

app.get("/", async function (req, res) {
  try {
    if (
      req.headers.email == "admin@admin.com" &&
      req.headers.passwd == "admin@admin"
    ) {
      res.send({ msg: "hello", name: "my name" });
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/home/new", async (req, res) => {
  try {
    if (req.headers.personName && req.headers.task && intensity && deadline) {
      const { personName, task, intensity, deadline } = req.headers;
      const newTask = {
        personName,
        task,
        intensity,
        deadline,
      };
      taskArray.push(newTask);
    }
    res.send({ msg: "added bruh", status: "okay" });
  } catch (error) {
    console.log(error);
  }
});

app.get("/getall", async (req, res) => {
  try {
    res.json(taskArray);
  } catch (error) {
    console.log(error);
  }
});

app.listen(5468, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`listening on http://localhost:5468`);
  }
});
