const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./src/db.config");
const productRouter = require("./src/routes");

dotenv.config();

const completeURL = `${process.env.MONGO_DB_URL}/${process.env.MONGO_DB_NAME}`;
const PORT = 8000;

const app = express();

app.use(express.urlencoded());

connectDB(completeURL).then(() => {
  console.log(`Database Connected!`);
});

app.use("/shopping-app", productRouter);

app.listen(PORT, () => {
  console.log(`Port listening on ${PORT}`);
});

module.exports = app;
