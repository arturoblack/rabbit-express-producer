const express = require('express');
const cors = require('cors');
const {sendMessage} = require('./colas');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', function(req, res) {
  res.send('hola mundo');
});

app.post('/add', function(req, res){
  const queue = 'saludo';
  const { msg } = req.body;
  sendMessage(queue, msg);
  res.status(200).json({ok:'ok'})

});

app.listen(3000, function(){
  console.log('conectado');
});