const express = require('express');
const router = express.Router();

const voteCount = {
  basketball: 0,
  cricket: 0,
  football: 0
};

/* POST vote for nominee. */
router.post('/', function (req, res, next) {

  const key = Object.keys(req.body)[0];
  voteCount[key]++;
  res.status(200).send(voteCount);
});

module.exports = router;
