const { Router } = require('express');
const router = new Router();

const movies = require('../sample.json');


router.get('/', (req, res) => {

    res.json(movies);
});
router.post('/', (req, res) => {

    const { title, director, year, rating } = req.body;
    if (title && director && year && rating) {
        const id = movies.length + 1;
        const newMovie = {...req.body, id };
        movies.push(newMovie);
        res.json(movies);
    } else {
        res.status(500).json({ error: 'Hubo un error' });
    }

});
router.delete('/:id', (req, res) => {
    console.log(req.params);
    res.send('deleted');
});

module.exports = router;