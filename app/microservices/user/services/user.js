const store = require('../store');

const { UserInputError } = require("moleculer-apollo-server");

module.exports = {
    name: "user",

    settings: {
        graphql: {
            type: `
                type User {
                    id: Int
                    email: String
                    prenom: String
                    nom: String
                }
            `
        }
    },
    actions: {
        user: {
            graphql: {
                query: "user(id: String): User!",
            },
            handler(ctx) {
                const { id } = ctx.params
                const user = store.find('users', (user) => user.id === id);
                if (!user) {
                    throw new UserInputError(`User with id ${id} does not exist.`, { invalidArgs: ['id'] });
                }

                return user;
            },
        }
    }
}