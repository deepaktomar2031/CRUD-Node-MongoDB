const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { connectDB } = require("./src/db.config");
const productRouter = require("./src/routes");
const app = express();
dotenv.config();

const completeURL = `${process.env.MONGO_DB_URL}${process.env.MONGO_DB_NAME}`;
const PORT = 8000;

app.use(bodyParser.json());

connectDB(completeURL).then(() => {
  console.log(`Database Connected!`);
});

app.use("/shopping-app", productRouter);

app.listen(PORT, () => {
  console.log(`Port listening on ${PORT}`);
});

module.exports = app;
