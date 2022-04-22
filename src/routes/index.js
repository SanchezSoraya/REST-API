//routes 
const { Router } = require('express');
const router = new Router();


router.get('/test', (req, res) => {
    const data = {
        name: "Soraya",
        Website: "soraya.com"
    };

    res.json({ data });
});

module.exports = router;