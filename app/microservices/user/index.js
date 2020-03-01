const { ServiceBroker } = require("moleculer");

const UserService = require('./services/user');

// Create a service
const broker = new ServiceBroker({
    transporter: 'TCP'
});

// Load Service
broker.createService(UserService);

// Start server
broker.start();