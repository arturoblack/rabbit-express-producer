const amqp = require('amqplib/callback_api');

exports.sendMessage = function(queue, msg) {

  amqp.connect('amqp://localhost', function(error, connection) {

    if(error) {
      console.log('error al conectat', error);
      throw error;
    }
  
    connection.createChannel(function(error1, channel) {
      if (error1) {
        throw error1;
      }

  
      channel.assertQueue(queue, {
        durable: false
      });
  
      channel.sendToQueue(queue, Buffer.from(msg));
      console.log(" [x] Sent %s", msg);
    });
  
  });
}