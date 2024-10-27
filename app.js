const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from assets directory
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Set views directory
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/privacy', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'privacy-policy.html'));
});

app.get('/terms', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'terms-of-service.html'));
});

app.get('/contact', (req, res) => {
    res.redirect('https://discord.com/users/1133030912397938820');
});

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Local: http://localhost:${port}`);
});