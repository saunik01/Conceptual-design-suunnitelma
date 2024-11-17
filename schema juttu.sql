-- Creating the movie_genre table
CREATE TABLE movie_genre (
    genre_name VARCHAR(50) PRIMARY KEY
);

-- Creating the movie table
CREATE TABLE movie (
    movie_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    year INT CHECK (year > 1800 AND year <= YEAR(CURDATE())),
    genre VARCHAR(50),
    FOREIGN KEY (genre) REFERENCES movie_genre(genre_name)
);

-- Creating the movie_user table
CREATE TABLE movie_user (
    username VARCHAR(50) PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    birth_year INT CHECK (birth_year > 1900 AND birth_year <= YEAR(CURDATE()))
);

-- Creating the review table
CREATE TABLE review (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50),
    movie_id INT,
    review_text TEXT,
    rating INT CHECK (rating >= 1 AND rating <= 10),
    review_date DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (username) REFERENCES movie_user(username),
    FOREIGN KEY (movie_id) REFERENCES movie(movie_id)
);

-- Insert data into movie_genre
INSERT INTO movie_genre VALUES 
('drama'),
('comedy'),
('scifi'),
('fantasy'),
('action'),
('triller');

-- Insert data into movie
INSERT INTO movie (name, year, genre) VALUES 
('Inception', 2010, 'action'),
('The Terminator', 1984, 'action'),
('Tropic Thunder', 2008, 'comedy'),
('Borat', 2006, 'comedy'),
('Interstellar', 2014, 'drama'),
('Joker', 2019, 'drama');

-- Insert data into movie_user
INSERT INTO movie_user VALUES
('reimarii', 'Niklas Saukko', 'qwerty123', 2001),
('lizzy', 'Lisa Simpson', 'abcdef', 1991),
('boss', 'Ben Bossy', 'salasana', 1981);

-- Insert data into review
INSERT INTO review (username, movie_id, review_text, rating) VALUES
('reimarii', 1, 'Amazing movie with a great concept.', 9),
('lizzy', 2, 'Classic action movie, loved it!', 8),
('boss', 3, 'Hilarious and entertaining.', 7);
