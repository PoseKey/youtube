<template>
  <div class="Setting">
    <!-- <md-card >
      <md-avatar>
      <img src="../assets/pose1.png" alt="Pose1">
    </md-avatar>
    <div class="md-title">Pose1 play/pause</div>
      <md-card-header>
        
      </md-card-header>

      <md-card-content>
      </md-card-content>
    </md-card>
    <md-card >
      <md-avatar>
      <img src="../assets/pose2.png" alt="Pose2">
    </md-avatar>
    <div class="md-title">Pose2 volume up</div>
      <md-card-header>
        
      </md-card-header>

      <md-card-content>
      </md-card-content>
    </md-card> -->
    
    <md-table md-card>
      <md-table-toolbar>
        <h1 class="md-title">Pose Description</h1>
      </md-table-toolbar>

      <md-table-row>
        <md-table-head>Pose</md-table-head>
        <md-table-head>Description</md-table-head>
        <md-table-head>Skill</md-table-head>
      </md-table-row>

      <md-table-row>
        <md-table-cell>
          <md-avatar>
            <img src="../assets/pose1.png" alt="Pose1">
          </md-avatar>
        </md-table-cell>
        <md-table-cell>오른손을 든 자세</md-table-cell>
        <md-table-cell>Play/Pause</md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell>
          <md-avatar>
            <img src="../assets/pose2.png" alt="Pose1">
          </md-avatar>
        </md-table-cell>
        <md-table-cell>왼손을 든 자세</md-table-cell>
        <md-table-cell>Scroll Up</md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell>
          <md-avatar>
            <img src="../assets/pose3.png" alt="Pose1">
          </md-avatar>
        </md-table-cell>
        <md-table-cell>양손을 든 자세</md-table-cell>
        <md-table-cell>Scroll Down</md-table-cell>
      </md-table-row>
    </md-table>

  </div>
</template>

<script>
export default {
  name: 'Setting',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
