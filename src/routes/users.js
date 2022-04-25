const { Router } = require("express");
const router = new Router();

const fetch = require('node-fetch');

router.get('/', async(req, res) => {
    const response = await new fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    res.json(users);
});
module.exports = router;