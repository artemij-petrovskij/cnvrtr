<template>
  <v-card>
    <v-tabs background-color="deep-purple accent-4" center-active v-model="tab">
      <v-tab>TICKER</v-tab>
      <v-tab>CRYPTO</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item><TICKER /></v-tab-item>
      <v-tab-item><CRYPTO /></v-tab-item>
    </v-tabs-items>
  </v-card>
</template>


<script>
import "particles.js";
import TICKER from "./components/TICKER-component.vue";
import CRYPTO from "./components/CRYPTO-component.vue";
import NBRB from "./components/NBRB-component.vue";
import CBR from "./components/CBR-component.vue";
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

    // initParticles() {
    //   window.particlesJS("particles-js", {
    //     particles: {
    //       number: {
    //         value: 8,
    //         density: {
    //           enable: false,
    //           value_area: 394.57382081613633,
    //         },
    //       },
    //       color: {
    //         value: "#1b1e34",
    //       },
    //       shape: {
    //         type: "image",
    //         stroke: {
    //           width: 1,
    //           color: "#000",
    //         },
    //         polygon: {
    //           nb_sides: 1,
    //         },
    //         image: {
    //           src: "https://pngimg.com/uploads/bitcoin/small/bitcoin_PNG47.png",
    //           width: 10,
    //           height: 10,
    //         },
    //       },
    //       opacity: {
    //         value: 0.12626362266116362,
    //         random: false,
    //         anim: {
    //           enable: false,
    //           speed: 0.1,
    //           opacity_min: 0.1,
    //           sync: false,
    //         },
    //       },
    //       size: {
    //         value: 10,
    //         random: false,
    //         anim: {
    //           enable: true,
    //           speed: 5,
    //           size_min: 40,
    //           sync: false,
    //         },
    //       },
    //       line_linked: {
    //         enable: false,
    //         distance: 200,
    //         color: "#ffffff",
    //         opacity: 1,
    //         width: 2,
    //       },
    //       move: {
    //         enable: true,
    //         speed: 1,
    //         direction: "top",
    //         random: true,
    //         straight: false,
    //         out_mode: "out",
    //         bounce: false,
    //         attract: {
    //           enable: true,
    //           rotateX: 320.6824121731046,
    //           rotateY: 721.5354273894853,
    //         },
    //       },
    //     },
    //     interactivity: {
    //       detect_on: "canvas",
    //       events: {
    //         onhover: {
    //           enable: false,
    //           mode: "grab",
    //         },
    //         onclick: {
    //           enable: false,
    //           mode: "push",
    //         },
    //         resize: true,
    //       },
    //       modes: {
    //         grab: {
    //           distance: 400,
    //           line_linked: {
    //             opacity: 1,
    //           },
    //         },
    //         bubble: {
    //           distance: 400,
    //           size: 40,
    //           duration: 2,
    //           opacity: 8,
    //           speed: 3,
    //         },
    //         repulse: {
    //           distance: 200,
    //           duration: 0.4,
    //         },
    //         push: {
    //           particles_nb: 4,
    //         },
    //         remove: {
    //           particles_nb: 2,
    //         },
    //       },
    //     },
    //     retina_detect: true,
    //   });
    // },
  },
};
</script>

<style lang="css">
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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

/* .el-container {
  height: 100%;
}
.el-header {
  text-align: center;
}
h1 {
  text-shadow: 0 0 1px rgba(0, 0, 0, 5);
}
h2 {
  text-align: center;
  font-weight: 600;
  font-size: 30px;
  white-space: pre;
}
h6 {
  height: 20px;
  margin: 0px;
  padding: 0px;
  font-size: 0.5em;
}
@media (max-width: 600px) {
  h2 {
    font-size: 28px;
  }
}
.index {
  text-align: left;
  font-weight: 600;
  font-size: 25px;
}
.small-icon {
  color: rgb(177, 184, 199);
  font-size: 22px;
  font-weight: 500;
}

div.el-input-group__append {
  width: 30px !important;
  font-size: 15px;
}
.el-button {
  width: 100%;
}
.el-form {
  max-width: 600px;
  position: relative;
  margin: 0px auto;
  padding: 10px;
  border-radius: 4px;
}
input {
  outline: none;
}
input:focus {
  outline: 0;
}
#particles-js {
  width: 100%;
  height: 80px;
  position: absolute;
  top: 0;
  left: 0;
}
a.el-link {
  text-align: center;
  font-size: 20px;
  margin: 5px;
}
.el-footer {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
}
.el-tabs__item.is-top {
  padding: 0px;
}
.el-tabs--bottom .el-tabs--left > .el-tabs__header .el-tabs__item:nth-child(2),
.el-tabs--bottom .el-tabs--right > .el-tabs__header .el-tabs__item:nth-child(2),
.el-tabs--bottom.el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:nth-child(2),
.el-tabs--bottom.el-tabs--card > .el-tabs__header .el-tabs__item:nth-child(2),
.el-tabs--top .el-tabs--left > .el-tabs__header .el-tabs__item:nth-child(2),
.el-tabs--top .el-tabs--right > .el-tabs__header .el-tabs__item:nth-child(2),
.el-tabs--top.el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:nth-child(2),
.el-tabs--top.el-tabs--card > .el-tabs__header .el-tabs__item:nth-child(2) {
  padding: 0px;
}
.el-tabs--bottom .el-tabs--left > .el-tabs__header .el-tabs__item:last-child,
.el-tabs--bottom .el-tabs--right > .el-tabs__header .el-tabs__item:last-child,
.el-tabs--bottom.el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:last-child,
.el-tabs--bottom.el-tabs--card > .el-tabs__header .el-tabs__item:last-child,
.el-tabs--top .el-tabs--left > .el-tabs__header .el-tabs__item:last-child,
.el-tabs--top .el-tabs--right > .el-tabs__header .el-tabs__item:last-child,
.el-tabs--top.el-tabs--border-card > .el-tabs__header .el-tabs__item:last-child,
.el-tabs--top.el-tabs--card > .el-tabs__header .el-tabs__item:last-child {
  padding: 0px;
}
.night {
  background-color: #282828;
  color: white;
}
.night .el-tabs__item {
  background-color: #282828;
  color: white;
}
.el-tabs__item .night {
  background-color: #282828;
  color: white !important;
}
.el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
  font-weight: bold;
  color: #409eff;
}
.el-divider {
  margin-top: 5px;
  margin-bottom: 5px;
}

.full-name-crypto {
  color: black !important;
}
.el-autocomplete {
  width: 100%;
}
.el-table {
  border-radius: 5px;
  border: 1px solid #a9a9a9;
}
h4 {
  text-align: center;
} */
</style>