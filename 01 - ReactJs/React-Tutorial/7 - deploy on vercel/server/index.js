const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const connectToDb = require("./connection/db");
require("dotenv").config({ path: "./.env" });
const app = express();
//*parser
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());
//*cors
app.use(
  cors({
    origin: "https://clinetlogintutorial.vercel.app",
    credentials: true,
  })
);
//*mongod db connection
connectToDb();
//* routes
app.use("/home", async (req, res) => {
  res.status(200).send("server is ok");
});

app.use("/", require("./routes/user"));
// app.use("/", (req, res) => {
//   return res.status(200).json("Server Is Run");
// });
//*listen
const port = process.env.PORT || 3010;
app.listen(port, () => {
  console.log(`server is connectin http://localhost:${port}`);
});
