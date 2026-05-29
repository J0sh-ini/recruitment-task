const express = require('express');
const cors = require('cors');
const {loginController} = require('./login');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/login', loginController);

const PORT = 8000;
app.listen(PORT, async () => {
    console.log(`Server listening on port ${PORT}`);
});