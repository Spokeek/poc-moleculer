const store = require('../store');

const { UserInputError } = require("moleculer-apollo-server");

module.exports = {
    name: "connexion",
    actions: {
        connexion: {
            graphql: {
                mutation: `
					connexion(
                        email: String!,
                        motDePasse: String!
					): Boolean!
				`,
            },
            handler(ctx) {
                const { email, motDePasse } = ctx.params;
                const user = store.find('users', (user) => user.email === email && user.motDePasse === motDePasse);
                if (!user) {
                    throw new UserInputError(`The user does not exist.`, { invalidArgs: ['email'] });
                }
                console.log(`Connexion de ${email}`);
                return true;
            },
        }
    }
}