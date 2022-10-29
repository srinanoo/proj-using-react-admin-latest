const express = require('express');
const router = express.Router();

router.get('/show', (req, res)=> {
    res.send("This is the main class route");
});

router.get('/create', (req, res)=> {
    res.send("This is the main Class route to create Classes");
});

module.exports = router;