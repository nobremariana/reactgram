const express = require("express");
const router = express();

// test rout
router.get("/", (req, res) => {
  res.send( "API is working!" );
});

module.exports = router;