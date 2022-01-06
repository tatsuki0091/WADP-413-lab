const path = require("path");
const router = require("express").Router();

const rootDirectory = require("../utils/path");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDirectory, "views", "read-message.html"));
});

module.exports = router;
