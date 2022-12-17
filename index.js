const accountSid = "ACce874b4aa2cc67d4ee3f20d720a6abf8";
const authToken = "1453610990b069752f5cd0ecb7e91568";
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const client = require("twilio")(accountSid, authToken);

require("path");
dotenv.config({ path: "config.env" });
client.messages
  .create({
    body: "This is the first message for qmsi using twilio ",
    from: "+17207906626",
    to: "+254717019058",
  })
  .then((message) => console.log(message.sid))
  .catch((err) => {
    console.log(err);
  });
app.listen(3000, () => {
  console.log("server running at port 3000");
});
