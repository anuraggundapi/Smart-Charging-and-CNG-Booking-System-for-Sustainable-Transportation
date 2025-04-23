const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const path = require('path');

const app = express();
const PORT = 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/userDB', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// User Schema
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    vehicleType: String,
    password: String
});

const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Set the view engine to ejs and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve CSS files with the correct MIME type
app.use('/css', express.static(path.join(__dirname, 'views/css')));
app.use('/images', express.static(path.join(__dirname, 'views/images')));
app.use('/js', express.static(path.join(__dirname, 'views/js')));
app.use('/fonts', express.static(path.join(__dirname, 'views/fonts')));
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res) => {
    const { username, email, vehicleType, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, vehicleType, password: hashedPassword });
        await newUser.save();
        res.redirect('/login');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error in registration');
    }
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            res.status(400).send('Invalid credentials');
            return;
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            res.status(400).send('Invalid credentials');
            return;
        }

        req.session.user = user;
        res.redirect('/service');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error in login');
    }
});

app.get('/service', (req, res) => {
    if (!req.session.user) {
        res.redirect('/login');
        return;
    }
    res.render('service');
});

// Map route for EV
app.get('/map/ev', (req, res) => {
    if (!req.session.user) {
        res.redirect('/login');
        return;
    }
    res.render('map');
});

// Map route for CNG
app.get('/map/cng', (req, res) => {
    if (!req.session.user) {
        res.redirect('/login');
        return;
    }
    res.render('cmap');
});

// Route for success page after CNG station payment
app.get('/csuccess', (req, res) => {
    if (!req.session.user) {
        res.redirect('/login'); // Redirect if user is not logged in
        return;
    }
    // Assuming the payment was successful, render cdirection.ejs
    res.render('cdirection');
});

// Route for success page after EV station payment
app.get('/success', (req, res) => {
    if (!req.session.user) {
        res.redirect('/login'); // Redirect if user is not logged in
        return;
    }
    // Assuming the payment was successful, render edirection.ejs
    res.render('edirection');
});

// Logout route
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
