const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env variables
dotenv.config({ path: './config/config.env' });

const app = express();

// Body Parser
app.use(express.json());
// Load public folder
app.use(express.static(path.join(__dirname, "public")));
// Enable CORS
app.use(cors());
// Routes
app.use('/api', require('./routes/places'));

// Connect to DB
connectDB();

// Port setup
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send('index'));

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));