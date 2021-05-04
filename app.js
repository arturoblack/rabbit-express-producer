const amqp = require('amqplib/callback_api');
amqp.connect('amqp://localhost', function(error, connection) {

  if(error) {
    console.log('error al conectat', error);
    throw error;
  }

  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var queue = 'hello';
    var msg = 'Hola mundo 3';

    channel.assertQueue(queue, {
      durable: false
    });

    channel.sendToQueue(queue, Buffer.from(msg));
    console.log(" [x] Sent %s", msg);
  });

});

