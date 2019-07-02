const express = require("express");
const app = express();
const port = 3000;
const router = express.Router();

const Todo = require("./todo");

router.get("/", (req, res) => res.send("Hello World!"));

router.route("/todos").get((req, res) => {
  Todo.all(function(data) {
    req.json(data);
  });
  // res.json([
  //   {
  //     _id: "a",
  //     text: "Itme 1",
  //     done: false
  //   },
  //   {
  //     _id: "b",
  //     text: "Itme 2",
  //     done: true
  //   },
  //   {
  //     _id: "c",
  //     text: "Itme 3",
  //     done: false
  //   },
  //   {
  //     _id: "d",
  //     text: "Itme 4",
  //     done: false
  //   }
  // ]);
});

app.use("/", router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
