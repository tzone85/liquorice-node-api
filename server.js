const User = require("./models/user");

const express = require('express');
const bodyParser = require('body-parser');
const graphQl = require('graphql');
const dotEnv = require('dotenv');
const cors = require('cors')
dotEnv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/api/users', (req, res) => {
    User.findAll().then(data => {
        return res.status(200).send(data);
    }).catch(error => console.log('Failed to retrieve data', error));
});

app.listen(process.env.PORT, () => {
    console.log(`listening to port ${process.env.PORT}`);
})

