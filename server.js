const express = require('express');
const app = express();
const PORT = 3000; // Choose any available port number

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});