<template>
  <el-container v-bind:class="{ night: nightMode }">
    <div class="particles">
      <div id="particles-js"></div>
    </div>

    <el-header>
      <h1>
        <el-link icon="el-icon-s-tools" @click="openAPI"></el-link>
        CNVRTR
        {{ nightMode }}
        <el-switch
          v-model="nightMode"
          active-color="#A9A9A9"
          inactive-color="#282828"
        >
        </el-switch>
        &nbsp;
        <i class="el-icon-moon"></i>
      </h1>
    </el-header>

    <el-main>
      <el-tabs type="card">
        <el-tab-pane label="CRYPTO"><CRYPTO></CRYPTO> </el-tab-pane>
        <el-tab-pane label="НБРБ"><NBRB></NBRB> </el-tab-pane>
        <el-tab-pane label="ЦБР"><CBR></CBR></el-tab-pane>
      </el-tabs>
    </el-main>

    <el-footer> </el-footer>
  </el-container>
</template>

<script>
import "particles.js";

import CRYPTO from "./components/CRYPTO-component.vue";
import NBRB from "./components/NBRB-component.vue";
import CBR from "./components/CBR-component.vue";

export default {
  data() {
    return {
      nightMode: Boolean,
    };
  },
  name: "App",
  components: {
    CRYPTO,
    NBRB,
    CBR,
  },

  mounted() {
    this.initParticles();
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
    openAPI() {
      this.$alert(
        '<p>Bitcoin <a href="https://cnvrtr.herokuapp.com/api/currency/BTC">BTC</a></p><p>Etherium <a href="https://cnvrtr.herokuapp.com/api/currency/ETH">ETH</a></p><p> Национальный банк Республики Беларусь <a href=""></a><a href="https://cnvrtr.herokuapp.com/api/currency/NBRB">НБРБ</a></p> <p>Центральный банк России <a href="https://cnvrtr.herokuapp.com/api/currency/CRB">ЦБР</a></p>',
        "API CNVRTR",
        { dangerouslyUseHTMLString: true, confirmButtonText: "OK" }
      );
    },
    initParticles() {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 8,
            density: {
              enable: false,
              value_area: 394.57382081613633,
            },
          },
          color: {
            value: "#1b1e34",
          },
          shape: {
            type: "image",
            stroke: {
              width: 1,
              color: "#000",
            },
            polygon: {
              nb_sides: 1,
            },
            image: {
              src: "https://pngimg.com/uploads/bitcoin/small/bitcoin_PNG47.png",
              width: 10,
              height: 10,
            },
          },
          opacity: {
            value: 0.12626362266116362,
            random: false,
            anim: {
              enable: false,
              speed: 0.1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 10,
            random: false,
            anim: {
              enable: true,
              speed: 5,
              size_min: 40,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 200,
            color: "#ffffff",
            opacity: 1,
            width: 2,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "top",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: true,
              rotateX: 320.6824121731046,
              rotateY: 721.5354273894853,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
              mode: "grab",
            },
            onclick: {
              enable: false,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    },
  },
};
</script>

<style lang="css">
#app {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body,
html {
  height: 100%;
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
}
.el-container {
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

@media (max-width: 600px) {
  h2 {
    font-size: 28px;
  }
}

.small-icon {
  color: rgb(177, 184, 199);
  font-size: 22px;
  font-weight: 500;
}
img.flag {
  margin-top: 10px;
  margin-right: 10px;
  max-height: 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
}
img.btc-logo {
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
</style>

