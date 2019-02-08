import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/api/homeinfo',(req,res)=>{

  const homeinfo =[
    {id:1,title1:"Hello ", title2:"World"},
    {id:2,title1:"Hello another ", title2:"world"}
  ];

  //setTimeout(()=>{
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(homeinfo));
    //},1);

});

app.get('/app', function(req, res) {
  //console.log("in the srcServer get requets....");
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
