const express = require('express');
const cors = require('cors');
const app = express();

//middleware
app.use(cors());

app.listen(5000, () => {
  console.log('Server has been started on port 5000.');
});
