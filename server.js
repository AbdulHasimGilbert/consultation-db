const express = require('express');
const app = express();
require('dotenv').config()
const dbConfig = require('./config/dbConfig');
app.use(express.json());
const userRoute = require("./routes/userRoute");
const path = require("path");

app.use('/api/user' , userRoute);
const port = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'productio')
{
    app.use('/' . express.static('client/build'));
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(_dirname, 'client/build/index.html'));
    }
    );
}

app.listen(port, () => console.log(`Listening on port ${port}`));