<template>
  <div class="particles">
    <div id="particles-js">
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
    </div>
  </div>
</template>

<script>
import "particles.js";

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
  mounted() {
    this.initParticles();
  },
  methods: {
    initParticles() {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 900,
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
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#000000",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 200,
              size: 10,
              duration: 2,
              opacity: 8,
              speed: 100,
            },
            repulse: {
              distance: 400,
              duration: 0.4,
            },
            push: {
              particles_nb: 2,
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
    height: 100%;
    position: fixed;
  
    top: 0;
    left: 0
}
a.el-link{
  text-align: center;
} 
</style>

