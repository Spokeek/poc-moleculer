const { ServiceBroker } = require("moleculer");
var os = require("os");

const ApolloService = require('./services/apollo');

// Create a service
const broker = new ServiceBroker({
    transporter: 'TCP'
});

// Load API Gateway
broker.createService(ApolloService);

// Start server
broker.start();