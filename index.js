const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Default API landing route
app.get('/', (req, res) => {
    res.json({
        message: "Hello World! Your Node.js application is running successfully.",
        status: "success",
        timestamp: new Date()
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is operating locally at http://localhost:${PORT}`);
});
