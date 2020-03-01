<script>
export default {
  data: () => ({
    formEstValide: false,
    form: {
      email: '',
      motDePasse: ''
    }
  }),
  methods: {
    inscrire() {
      if (this.$refs.form.validate()) {
        console.log('valide');
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
            v-model="form.email"
            label="Email"
            required
          ></v-text-field>
        </v-row>
        <v-row>
          <v-text-field
            v-model="form.motDePasse"
            label="Mot de passe"
            type="password"
            required
          ></v-text-field>
        </v-row>
        <v-row>
          <v-btn :disabled="!formEstValide" @click="inscrire">
            M'inscrire
          </v-btn>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>
