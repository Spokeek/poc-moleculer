<script>
import { required, email } from 'vuelidate/lib/validators';
import gql from 'graphql-tag';

export default {
  data: () => ({
    formEstValide: false,
    email: '',
    motDePasse: ''
  }),
  validations: {
    email: { required, emailFormat: email },
    motDePasse: { required }
  },
  computed: {
    emailErrorMessage() {
      let errors = [];
      if (!this.$v.email.$dirty || !this.$v.email.$anyError) return errors;
      if (!this.$v.email.required) errors.push('Un email est obligatoire !');
      if (!this.$v.email.emailFormat)
        errors.push('Votre email dois avoir un format valide !');
      return errors;
    },
    motDePasseErrorMessage() {
      let errors = [];
      if (!this.$v.email.$dirty || !this.$v.email.$anyError) return errors;
      if (!this.$v.email.required)
        errors.push('Un mot de passe est obligatoire !');
      return errors;
    }
  },
  methods: {
    connecter() {
      this.$v.$touch();
      if (!this.$v.$anyError) {
        this.$apollo.mutate({
          // Query
          mutation: gql`
            mutation connexion($email: String!, $motDePasse: String!) {
              connexion(email: $email, motDePasse: $motDePasse)
            }
          `,
          // Parameters
          variables: {
            email: this.email,
            motDePasse: this.motDePasse
          },
          update: (store, { data: { connexion } }) => {
            if (connexion) {
              console.log('ok');
              this.$router.push({ name: 'App' });
            }
          }
        });
      }
    }
  }
};
</script>

<template>
  <div>
    <v-container>
      <v-form ref="form" v-model="formEstValide">
        <v-row>
          <v-text-field
            v-model="email"
            :error-messages="emailErrorMessage"
            label="Email"
            required
          ></v-text-field>
        </v-row>
        <v-row>
          <v-text-field
            v-model="motDePasse"
            :error-messages="motDePasseErrorMessage"
            label="Mot de passe"
            type="password"
            required
          ></v-text-field>
        </v-row>
        <v-row>
          <v-btn :disabled="!formEstValide" @click="connecter">
            Me connecter
          </v-btn>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>
