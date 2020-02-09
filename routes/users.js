var express = require('express');
var router = express.Router();

const voteCount = {
  football: 0,
  basketball: 0,
  cricket: 0
};

/* POST vote for nominee. */
router.post('/', function (req, res, next) {

  const key = Object.keys(req.body)[0];
  voteCount[key]++;
  res.status(200).send(voteCount);
});

module.exports = router;
