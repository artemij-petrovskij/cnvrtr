<template>
  <el-container>
    <el-header>
      <h1>CNVRTR</h1>
    </el-header>
    <el-main>
      <el-tabs type="card">
        <el-tab-pane label="NBRB"><NBRB></NBRB> </el-tab-pane>
        <el-tab-pane label="CBR"><CBR></CBR></el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>

 
</template>

<script>
import NBRB from "./components/NBRB-component.vue";
import CBR from "./components/CBR-component.vue";

export default {
  name: "App",
  components: {
    NBRB,
    CBR
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
