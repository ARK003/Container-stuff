const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/products', require('./routes/products'));


mongoose
  .connect('mongodb+srv://ahmedrazakhan0003:IcJ736YHU0d4VZ2U@cluster0.uikp6oq.mongodb.net/test?retryWrites=true&w=majority', 
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connection established"))
  .catch((err) => console.log("MongoDB connection error: " + err));

app.get('/', (req, res) => {
    res.send("Server is running");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
