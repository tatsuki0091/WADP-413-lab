const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

// const routes = require("./");

const topRoutes = require("./routes/top");
const readRoutes = require("./routes/read-message");
const writeRoutes = require("./routes/write-message");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/read-message", readRoutes);
app.use("/write-message", writeRoutes);
app.use(topRoutes);

// const server = http.createServer(routes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
