const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to homepage!")
});

app.get("/about", (req, res) => {
    res.send("Welcome to about page!")
});

app.get("/contact", (req, res) => {
    res.send("Welcome to contact page!")
});

app.get("/devops", (req, res) => {
    res.send("Welcome to DevOps page! trying my best to scale-up 🚀")
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
