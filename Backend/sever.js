const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');


app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

const MONGO_URL = 'mongodb://127.0.0.1:27017/ProductHub';

main()
    .then((res) =>{
        console.log("Connected to DB");
    }).catch((err) =>{
        console.log(err);
    });

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.use('/products', productRoutes);

const port = 5000;

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});
