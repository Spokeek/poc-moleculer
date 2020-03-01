<script>
import { required } from 'vuelidate/lib/validators';

export default {
  data: () => ({
    formEstValide: false,
    email: '',
    motDePasse: ''
  }),
  validations: {
    email: { required },
    motDePasse: { required }
  },
  computed: {
    emailErrorMessage() {
      let errors = [];
      if (!this.$v.email.$dirty || !this.$v.email.$anyError) return errors;
      if (!this.$v.email.required) errors.push('Un email est obligatoire !');
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
        console.log('ok');
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
