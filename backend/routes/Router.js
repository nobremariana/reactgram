const express = require("express");
const router = express();

router.use("/api/users", require("./UserRoutes"));

// test rout
router.get("/", (req, res) => {
  res.send( "API is working!" );
});

module.exports = router;