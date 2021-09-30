const {FlatFileExportCtrl} = require('./controllers')
  const express = require('express');
  let LOADER_URI = 'mongodb://localhost:27017/'
  const app = express();
  const MongoClient = require('mongodb').MongoClient;
  
  MongoClient.connect(LOADER_URI, { useUnifiedTopology: true }, (err, client) => {
    if (err) throw err
    console.log("connected")
  
    const pulseDevDb = client.db('pulse-dev')
  
    const flatFileExportCtrl = new FlatFileExportCtrl(pulseDevDb)
    
  /*
app.post('/api',(req, res)=>{
    const users = [
    {id: 1,  name: 'Kartik'},
    {id: 2,  name: 'Ram'},
    {id: 3,  name: 'Shyam'}
];
jwt.sign({users}, 'secretKey', (err, token)=>{
    res.json({token});
});
});
*/

    app.post('/save', async (req, res) => {
      flatFileExportCtrl.saveExportConfiguration(req, res)
    })
  
    app.put('/edit/:Id', async (req, res) => {
          flatFileExportCtrl.editExportConfiguration(req, res)
        }
      )
  })
  
  module.exports = app;



module.exports =  app;