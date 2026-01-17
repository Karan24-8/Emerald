let express = require("express");
let router = express.Router();
router.use(express.json()); // IMPORTANT: parse JSON body

router.get("/", (req, res) => {
    res.send("API router is working");
});


router.post('/prompt', (req, res) => {
    const data = req.body;  // JSON from frontend

    console.log("Received Prompt:", data.prompt);

    res.json({
        status: "success",
        message: "Prompt received",
        received: data
    });
});

module.exports = router;