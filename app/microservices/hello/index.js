const { ServiceBroker } = require("moleculer");
var os = require("os");

const HelloService = require('./services/hello');

// Create a service
const broker = new ServiceBroker({
    transporter: 'TCP'
});

// Load Service
broker.createService(HelloService);

// Start server
broker.start();