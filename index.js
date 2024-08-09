const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.post("/webhook", (req, res) => {
  const callDetails = {
    callID: req.body.CallID || "No CallID",
    callerIDNum: req.body.CallerIDNum || "No CallerIDNum",
    callerIDName: req.body.CallerIDName || "No CallerIDName",
    calledDID: req.body.CalledDID || "No CalledDID",
    calledExtension: req.body.CalledExtension || "No CalledExtension",
    callStatus: req.body.CallStatus || "No CallStatus",
    callFlow: req.body.CallFlow || "No CallFlow",
    callerExtension: req.body.CallerExtension || "No CallerExtension",
    calledNumber: req.body.CalledNumber || "No CalledNumber",
    callAPIID: req.body.CallAPIID || "No CallAPIID",
  };

  console.log("Received Call Details:", callDetails);
  res.send(`Call details received: ${JSON.stringify(callDetails)}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
