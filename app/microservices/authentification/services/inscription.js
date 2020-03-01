const store = require('../store');

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
                const { email, motDePasse } = ctx.params
                const existingUser = store.find('users', (user) => user.email === email);
                if (existingUser) {
                    console.log('user allready exist');
                    return false
                }
                store.push('users', { email, motDePasse });
                console.log(`Inscription de ${email}`);
                //TODO Ajouter la mutation pour ajouter la donnée en BDD
                return true;
            },
        }
    }
}