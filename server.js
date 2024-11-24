const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS for Angular frontend

app.get('/api/numbers', async (req, res) => {
    try {
        const response = await axios.get('https://mocki.io/v1/635ce436-44ea-4137-b1dc-188e782cce2a');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
});

app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});
