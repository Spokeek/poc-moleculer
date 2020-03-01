<template>
  <div>
    <v-toolbar dense>
      <v-toolbar-title>Poc Moleculer</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/auth/connexion">Connexion</v-btn>
      <v-btn to="/auth/inscription">Inscription</v-btn>
    </v-toolbar>
    <router-view></router-view>
  </div>
</template>
