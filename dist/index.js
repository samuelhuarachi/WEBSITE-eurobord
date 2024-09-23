require("dotenv").config();
const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const path = require("path");
const flash = require("connect-flash");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(express.static(`${__dirname}/../public`));
app.set("views", `${__dirname}/../views`);
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(flash());
app.get("/", function (req, res) {
    res.render("index", { layout: "base" });
});
const serve = app.listen(5000);
console.log("Server is listening on port 5000");
