const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const docRoutes = require("./routes/doc")

const app = express();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
});

mongoose.connection.on("connected", () => {
  console.log("DB is connected...");
});

app.use(express.static("public"));
app.use(express.json());

app.use("/doc", docRoutes)

app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
