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
                console.log(`Inscription de ${ctx.params.email}`);
                //TODO Ajouter la mutation pour ajouter la donnée en BDD
                return false;
            },
        }
    }
}