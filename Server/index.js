require('dotenv').config();
const express = require('express');
const connectDB = require('./DB');
const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.use('/api/users', require('./Routes/User/Auth')); 
app.use('/api/auth', require('./Routes/User/Auth'));  

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
