<template>
  <div id="app">
    <md-toolbar>
      <h1 class="md-title">PoseKey</h1>
    </md-toolbar>
    
    <md-tabs class="md-primary" md-sync-route md-alignment="centered">
      <md-tab id="tab-home" md-label="Settings" to="/">
      </md-tab>
      <md-tab id="tab-pages" md-label="Mirror" to="/Mirror"></md-tab>
    </md-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
/* .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  } */
</style>
