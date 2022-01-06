const path = require("path");
const router = require("express").Router();

const rootDirectory = require("../utils/path");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDirectory, "views", "write-message.html"));
});

router.post("/product", (req, res, next) => {
  console.log("BODY - ", req.body);
  res.redirect("/");
});

module.exports = router;
