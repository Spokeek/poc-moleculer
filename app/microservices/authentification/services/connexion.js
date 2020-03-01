const store = require('../store');

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
                    console.log('user not found');
                    return false;
                }
                console.log(`Connexion de ${ctx.params.email}`);
                //TODO Ajouter query pour prendre la donnée en BDD
                return true;
            },
        }
    }
}