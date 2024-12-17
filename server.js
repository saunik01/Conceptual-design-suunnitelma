import express from 'express'; 
import connection from './db.js';

const app = express();
const port = 3000;

app.use(express.json()); // For parsing JSON bodies

// Route to get all movies
app.get('/movies', (req, res) => {
    connection.query('SELECT * FROM movie', (err, results) => { // Correct table name is 'movie'
        if (err) {
            console.error(err);
            return res.status(500).send('Server Error');
        }
        res.json(results);
    });
});

// Route to get a movie by ID
app.get('/movies/:id', (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM movie WHERE movie_id = ?', [id], (err, results) => { // Correct table name and column
        if (err) {
            console.error(err);
            return res.status(500).send('Server Error');
        }
        if (results.length === 0) {
            return res.status(404).send('Movie not found');
        }
        res.json(results[0]);
    });
});

// Route to add a new movie
app.post('/movies', (req, res) => {
    const { name, year, genre } = req.body;
    connection.query('INSERT INTO movie (name, year, genre) VALUES (?, ?, ?)', [name, year, genre], (err, results) => { // Correct table name
        if (err) {
            console.error(err);
            return res.status(500).send('Server Error');
        }
        res.status(201).send(`Movie added with ID: ${results.insertId}`);
    });
});

// Route to delete a movie by ID
app.delete('/movies/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM movie WHERE movie_id = ?', [id], (err, results) => { // Correct table name
        if (err) {
            console.error(err);
            return res.status(500).send('Server Error');
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Movie not found');
        }
        res.send('Movie deleted');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
