const express = require('express');
const app = express();
app.use(express.json());

app.post('/submitassignment', (req, res) => res.send('Assignment submitted'));
app.get('/viewassignment', (req, res) => res.send('Viewing assignment'));
app.put('/editprofile', (req, res) => res.send('Student profile updated'));

app.listen(3002, () => console.log('Student service on port 3002'));
