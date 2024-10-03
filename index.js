const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Home Page")
});

app.get("/about", (req, res) => {
    res.send("About Page")
});

app.get("/contact", (req, res) => {
    res.send("Contact Page")
});

app.get("/devops", (req, res) => {
    res.send("End goal is learning not beautify it")
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
