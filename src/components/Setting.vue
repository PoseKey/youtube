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
      <!-- <md-table-toolbar>
        <p class="md-title">Pose Description</p>
        <p class="md-caption">If you pose, the corresponding function will work.</p>        
      </md-table-toolbar> -->

      <md-table-row>
        <md-table-head>Pose</md-table-head>
        <md-table-head>Description</md-table-head>
        <md-table-head>Function</md-table-head>
      </md-table-row>

      <md-table-row>
        <md-table-cell>
          <md-avatar>
            <img src="../assets/pose1.png" alt="Pose1">
          </md-avatar>
        </md-table-cell>
        <md-table-cell>An upward posture of the right arm</md-table-cell>
        <md-table-cell>Play/Pause</md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell>
          <md-avatar>
            <img src="../assets/pose2.png" alt="Pose2">
          </md-avatar>
        </md-table-cell>
        <md-table-cell>An upward posture of the left arm</md-table-cell>
        <md-table-cell>Next Video</md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell>
          <md-avatar>
            <img src="../assets/pose3.png" alt="Pose3">
          </md-avatar>
        </md-table-cell>
        <md-table-cell>A posture with both arms raised</md-table-cell>
        <md-table-cell>Volume Up</md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell>
          <md-avatar>
            <img src="../assets/pose4.png" alt="Pose4">
          </md-avatar>
        </md-table-cell>
        <md-table-cell>A posture with both arms in a horizontal position</md-table-cell>
        <md-table-cell>Volume Down</md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell>
          <md-avatar>
            <img src="../assets/pose5.png" alt="Pose5">
          </md-avatar>
        </md-table-cell>
        <md-table-cell>A horizontal posture of right arm</md-table-cell>
        <md-table-cell>Skip 5 second forward</md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell>
          <md-avatar>
            <img src="../assets/pose6.png" alt="Pose6">
          </md-avatar>
        </md-table-cell>
        <md-table-cell>A horizontal posture of left arm</md-table-cell>
        <md-table-cell>Skip 5 second backward</md-table-cell>
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
