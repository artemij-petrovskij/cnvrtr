<template>
  <el-container>
    <el-header>
      <h1>CNVRTR</h1>
    </el-header>
    <el-main>
      <el-tabs type="card">
        <el-tab-pane label="ВТС"><BTC></BTC> </el-tab-pane>
        <el-tab-pane label="НБРБ"><NBRB></NBRB> </el-tab-pane>
        <el-tab-pane label="ЦБР"><CBR></CBR></el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
import BTC from "./components/BTC-component.vue";
import NBRB from "./components/NBRB-component.vue";
import CBR from "./components/CBR-component.vue";

export default {
  name: "App",
  components: {
    BTC,
    NBRB,
    CBR,
  },
};
</script>

<style lang="css">
#app {
  font-family: "Assistant", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body,
html {
  font-family: "Assistant", sans-serif;
  margin: 0;
  padding: 0;
}
.el-header {
  text-align: center;
}
h1 {
  text-shadow: 0 0 1px rgba(0, 0, 0, 5);
}
h2{
  text-align: center;
}

img.flag {
  margin-top: 10px;
  margin-right: 10px;
  max-height: 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
}
img.btc-logo{

  max-height: 20px;
  box-shadow: none;
}
img.btc {
  width: 100%;
  height: auto;
}
div.el-input-group__append {
  width: 30px !important;
  font-size: 15px;
}
.el-button {
  width: 100%;
}
input {
  outline: none;
}
input:focus {
  outline: 0;
}
</style>
