// Import required modules
const express = require('express');
const path = require('path');

// Create an instance of the Express application
const app = express();

// Serve static files from the "build" directory of the React app
app.use(express.static(path.join(__dirname, 'build')));

// Handle requests to the root URL ("/") and send the React app's HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server and listen on the appropriate port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
