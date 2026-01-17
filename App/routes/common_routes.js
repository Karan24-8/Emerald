const express = require("express");
const app = express();

app.use(express.json()); // IMPORTANT: parse JSON body

app.post("/api/prompt", (req, res) => {
    const data = req.body;  // JSON from frontend

    console.log("Received Prompt:", data.prompt);

    res.json({
        status: "success",
        message: "Prompt received",
        received: data
    });
});

app.listen(3000, () => console.log("Server running on port 3000"));
