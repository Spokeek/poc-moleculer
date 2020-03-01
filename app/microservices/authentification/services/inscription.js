const store = require('../store');

const { UserInputError } = require("moleculer-apollo-server");

module.exports = {
    name: "inscription",
    actions: {
        inscrire: {
            graphql: {
                mutation: `
					inscrire(
                        email: String!,
                        motDePasse: String!
					): Boolean!
				`,
            },
            handler(ctx) {
                const { email, motDePasse } = ctx.params;
                const existingUser = store.find('users', (user) => user.email === email);
                if (existingUser) {
                    throw new UserInputError(`A user with this email allready exist.`, { invalidArgs: ['email'] });
                }
                store.push('users', { email, motDePasse });
                console.log(`Inscription de ${email}`);
                return true;
            },
        }
    }
}