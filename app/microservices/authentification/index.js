const { ServiceBroker } = require("moleculer");

const Inscription = require('./services/inscription');
const Connexion = require('./services/connexion');

// Create a service
const broker = new ServiceBroker({
    transporter: 'TCP'
});

// Load Service
broker.createService(Inscription);
broker.createService(Connexion);

// Start server
broker.start();