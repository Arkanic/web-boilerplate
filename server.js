// dev hosting for the compiled code
// todo: recompile & view live (as all code is client)

const express = require("express");

const app = express();

app.use(express.static("dist"));
app.listen(8080, () => {
    console.log("Dev server started");
});