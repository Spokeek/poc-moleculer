<template>
  <div id="root">
    <v-toolbar dense>
      <v-toolbar-title>Poc Moleculer</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="Connexion">Connexion</v-btn>
      <v-btn to="Inscription">Inscription</v-btn>
    </v-toolbar>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#root {
  height: 100%;
  width: 100%;
}
</style>
