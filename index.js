const express  = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.status(200).send({ message: "get simple response" });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})