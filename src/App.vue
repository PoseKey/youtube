<template>
  <div id="app">
    <md-toolbar>
      <h1 class="md-title">PoseKey</h1>
      <div class="md-toolbar-section-end">
        <md-switch id="switch" v-model="boolean" @change="switched()"></md-switch>
      </div>
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
  name: 'App',
  data (){
    return{
      boolean: false,
    };
  },
  methods:{
    switched: function(){
      if (this.boolean){
        chrome.runtime.sendMessage(
          {data:"ON"},
          (response)=>{
            console.log(response);
          }
        )
      }
      else{
        chrome.runtime.sendMessage(
          {data:"OFF"},
          (response)=>{
            console.log(response);
          }
        )
      }
    }
  },
  mounted(){
    chrome.runtime.sendMessage(
      {data:"?"},
      (response)=>{
        console.log(response);
        if(response.data==true){
          this.boolean =true;
        }
        else this.boolean =false;
      }
    )
  }
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
