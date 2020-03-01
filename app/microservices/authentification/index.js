const { ServiceBroker } = require("moleculer");

const Inscription = require('./services/inscription');

// Create a service
const broker = new ServiceBroker({
    transporter: 'TCP',
    logLevel: 'debug'
});

// Load Service
broker.createService(Inscription);

// Start server
broker.start();