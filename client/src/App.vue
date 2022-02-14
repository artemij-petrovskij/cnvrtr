<template>
  <v-app v-bind:class="{ night: nightMode }">
    <v-app-bar app v-bind:class="{ night: nightMode }">
      <h1>CNVRTR</h1>
      <v-switch v-model="nightMode"></v-switch
    ></v-app-bar>
    <v-main v-bind:class="{ night: nightMode }">
      <v-tabs
        center-active
        grow
        background-color="indigo"
        dark
        color="#fff"
        v-model="tab"
      >
        <v-tab>TICKER</v-tab>
        <v-tab>BYBIT</v-tab>
        <v-tab>CRYPTO-CONVERT</v-tab>
        <v-tab>NBRB</v-tab>
        <v-tab>CBR</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab" v-bind:class="{ night: nightMode }">
        <v-tab-item><TICKER /></v-tab-item>
        <v-tab-item><BYBIT /></v-tab-item>
        <v-tab-item><CRYPTO /></v-tab-item>
        <v-tab-item><NBRB /></v-tab-item>
        <v-tab-item><CBR /></v-tab-item>
      </v-tabs-items>
    </v-main>
  </v-app>
</template>


<script>
import "particles.js";
import TICKER from "./components/TICKER-component.vue";
import CRYPTO from "./components/CRYPTO-component.vue";
import NBRB from "./components/NBRB-component.vue";
import CBR from "./components/CBR-component.vue";
import BYBIT from "./components/Bybit-component.vue";

export default {
  data() {
    return {
      nightMode: false,
      tab: null,
    };
  },
  name: "App",
  components: {
    TICKER,
    CRYPTO,
    BYBIT,
    NBRB,
    CBR,
  },
  mounted() {
    //this.initParticles();
    this.localControllerNightMode();
  },
  watch: {
    nightMode: function () {
      localStorage.nightMode = this.nightMode;
    },
  },
  methods: {
    localControllerNightMode() {
      if (localStorage.nightMode === "true") {
        this.nightMode = true;
      }
      if (localStorage.nightMode === "false") {
        this.nightMode = false;
      }
    },
  },
};
</script>

<style lang="css">
#app {
  text-align: center;
  color: #2c3e50;
}
.v-application .v-application--is-ltr .theme--light {
  margin-top: 0px !important;
}
body,
html {
  height: 100%;
  font-family: "Inter", sans-serif;
  font-weight: 200;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

h1 {
  margin-left: auto;
  margin-right: auto;
}
.v-text-field {
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/**/

.night > * {
  background-color: #282828 !important;
  color: white !important;
}


.v-data-table.v-data-table--fixed-height.theme--dark{
   background-color: #282828 !important;
  color: white !important;
}
</style>