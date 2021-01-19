<template>
  <el-container>
    <div class="particles">
      <div id="particles-js"></div>
    </div>

    <el-header>
      <h1>CNVRTR</h1>
    </el-header>

    <el-main>
      <el-tabs type="card">
        <el-tab-pane label="CRYPTO"><CRYPTO></CRYPTO> </el-tab-pane>
        <el-tab-pane label="НБРБ"><NBRB></NBRB> </el-tab-pane>
        <el-tab-pane label="ЦБР"><CBR></CBR></el-tab-pane>
      </el-tabs>
    </el-main>

    <el-footer>
      <el-link icon="el-icon-s-tools" @click="openAPI">API CNVRTR</el-link>
    </el-footer>
  </el-container>
</template>

<script>
import "particles.js";

import CRYPTO from "./components/CRYPTO-component.vue";
import NBRB from "./components/NBRB-component.vue";
import CBR from "./components/CBR-component.vue";

export default {
  name: "App",
  components: {
    CRYPTO,
    NBRB,
    CBR,
  },
  mounted() {
    this.initParticles();
  },
  methods: {
    openAPI() {
      this.$alert(
        
        '<p>Bitcoin <a href="https://cnvrtr.herokuapp.com/api/currency/BTC">BTC</a></p><p>Etherium <a href="https://cnvrtr.herokuapp.com/api/currency/ETH">ETH</a></p><p> Национальный банк Республики Беларусь <a href=""></a><a href="https://cnvrtr.herokuapp.com/api/currency/NBRB">НБРБ</a></p> <p>Центральный Банк России <a href="https://cnvrtr.herokuapp.com/api/currency/CRB">ЦБР</a></p>',
        'API CNVRTR',{  dangerouslyUseHTMLString: true,   confirmButtonText: 'OK',}
        
      );
    },
    initParticles() {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#000000",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 4,
              size_min: 0.3,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 600,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
              mode: "bubble",
            },
            onclick: {
              enable: true,
              mode: "repulse",
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
              distance: 250,
              size: 0,
              duration: 2,
              opacity: 0,
              speed: 3,
            },
            repulse: {
              distance: 400,
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
.el-header {
  text-align: center;
}
h1 {
  text-shadow: 0 0 1px rgba(0, 0, 0, 5);
}

h2 {
  text-align: center;
  font-weight: 600;
  font-size: 36px;
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
  text-decoration: none;
}
.el-footer {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
}
</style>

