const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');

const app = express();

const corsConfig = {
    origin: ['http://localhost:3000', 'http://localhost:7000', 'https://ecommerce-mern-backend-inky.vercel.app'],
    credentials: true,
};

app.use(cors(corsConfig));
app.options('*', cors(corsConfig));

app.use(express.json());
app.use(cookieParser());

app.use("/api", router);

const PORT = process.env.PORT || 7000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to DB");
        console.log("Server is running on port " + PORT);
    });
});
