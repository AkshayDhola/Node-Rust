const express = require('express');
const { greet } = require('rust_module');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("go to /greet/your_name");
});

app.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    const message = greet(name);
    res.send(message);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
