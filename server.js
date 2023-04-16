const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });
app.get('/coffee/hot/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const response = await fetch(`https://api.sampleapis.com/coffee/hot/${id}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
});
app.get('/coffee/hot', async (req, res) => {
    try {
        const response = await fetch('https://api.sampleapis.com/coffee/hot');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
});




app.listen(4000, () => {
    console.log('server running')
})

