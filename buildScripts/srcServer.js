let express = require('express');
let path = require('path');
//let open = require('open');
let webpack = require('webpack');
let config = require('../webpack.config.dev');
/*
import express from 'express';
import path from 'path';
import open from 'open';
*/
/* eslint-disable no-console */
let port = 3000;
let app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'))
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Server is running');
  }
});
