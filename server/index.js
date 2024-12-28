const express = require("express");
const cors = require("cors");
const checkToken = require("./middleware-token");

const app = express();
app.use(cors());

app.get("/products", checkToken, (req, res) => {
  res.status(200).json([
    {
      id: 1,
      name: "Product 1",
      price: 100,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
    },
    {
      id: 4,
      name: "Product 4",
      price: 400,
    },
  ]);
  // bad request
  // res.status(400).json({ message: "Bad request" });
  // not found
  // res.status(404).json({ message: "Not found" });
  // internal server error
  // res.status(500).json({ message: "Internal server error" });
  // unauthorized
  //   res.status(401).json({ message: "Unauthorized" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
