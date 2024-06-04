const express = require('express');
const cors = require('cors');
const productsData = require('./products.json');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/categories/all/products', (req, res) => {
    res.json(productsData);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
