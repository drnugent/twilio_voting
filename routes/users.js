const express = require("express");
const router = express.Router();

const Twilio = require("twilio");
const syncService = require("../syncService");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const syncServiceSid = process.env.TWILIO_SYNC_SERVICE_SID || "default";

const client = new Twilio(accountSid, authToken);

const voteCount = {
  basketball: 0,
  cricket: 0,
  football: 0
};

/* POST vote for nominee. */
router.post("/", function (req, res, next) {
  const key = Object.keys(req.body)[0];
  voteCount[key]++;

  // update data in Sync document
  syncService
    .documents("SportsPoll")
    .update({ data: voteCount })
    .then(document => console.log(document));

  res.status(200).send(voteCount);
});

module.exports = router;
