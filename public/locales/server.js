const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/get-map-data', async (req, res) => {
  try {
    const mapboxUrl = `https://api.mapbox.com/some-endpoint?access_token=${process.env.MAPBOX_API_KEY}`;
    const response = await axios.get(mapboxUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
