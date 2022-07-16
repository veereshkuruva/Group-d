require("dotenv").config();
const app = require("./app");
const dbConnect = require("./db");
const port = process.env.PORT;

dbConnect(process.env.MONGO_URL)
  .then(() => {
    app.listen(port, () => {
      console.log("db is connected and server is on port ", port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
