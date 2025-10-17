const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(` My Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  return res.json({'message': 'Hello Aditya! This is my second server.'});
}); 
