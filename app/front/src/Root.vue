<template>
  <div id="root">
    <div>
      <router-link to="Connexion">Connexion</router-link>
    </div>
    <div>
      <router-link to="Inscription">Inscription</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#root {
  height: 100%;
  width: 100%;
}
</style>
