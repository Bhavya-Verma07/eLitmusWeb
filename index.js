const express = require("express"); //for managing servers and routs
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.json());
const connectDB = require("./Connectors/dbconnection");
app.use(require("./routes/user"));
const passport = require("passport");
const path = require('path');
require("./config/passport")(passport);

require("dotenv").config();

const port = process.env.PORT || 8000;
connectDB();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname + "/client/build/index.html"),
      function (err) {
        if (err) {
          console.log(err);
        }
      }
    );
  });
}

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
