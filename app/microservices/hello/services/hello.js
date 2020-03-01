var os = require("os");

module.exports = {
    name: "hello",

    actions: {
        hello: {
            graphql: {
                query: "hello: String!",
            },
            handler(ctx) {
                return "Hello Moleculer! from node " + os.hostname();
            },
        },
        welcome: {
            graphql: {
                mutation: `
					welcome(
						name: String!
					): String!
				`,
            },
            handler(ctx) {
                return `Hello ${ctx.params.name}`;
            },
        }
    }
}