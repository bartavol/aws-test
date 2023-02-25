const express = require("express");

const app = express();

app.get("/", (req, res, end) => {
    res.send("<h1 style='color:lime'>Hello AWS!!!!</h1>");
});

app.listen(4000, () => {
    console.log("Server is listinig...");
})