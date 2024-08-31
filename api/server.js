const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/message', (req, res) => {
  const { message } = req.body;
  res.json({ message });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
