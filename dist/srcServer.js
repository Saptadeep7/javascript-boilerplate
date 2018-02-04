let express = require('express');
let path = require('path');
let open = require('open');
/*
import express from 'express';
import path from 'path';
import open from 'open';
*/

let port = 3000;
let app = express();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Server is running');
  }
});
//# sourceMappingURL=srcServer.js.map