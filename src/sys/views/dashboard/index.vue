<template>
  <div>
    <div class="text-container">Welcome</div>
    <div class="particle-container" id="particles-js"></div>
  </div>
</template>

<script>
import 'particles.js';

const options = {
  particles: {
    number: { value: 80, density: { enable: !0, value_area: 800 } },
    color: { value: '#1976d2' },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#000000' },
      polygon: { nb_sides: 5 },
    },
    opacity: {
      value: 0.5,
      random: !1,
      anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 },
    },
    size: {
      value: 3,
      random: !0,
      anim: { enable: !1, speed: 40, size_min: 0.1, sync: !1 },
    },
    line_linked: {
      enable: !0,
      distance: 150,
      color: '#1976d2',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: !0,
      speed: 3,
      direction: 'none',
      random: !1,
      straight: !1,
      out_mode: 'out',
      bounce: !1,
      attract: { enable: !1, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: !0, mode: 'repulse' },
      onclick: { enable: !0, mode: 'push' },
      resize: !0,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: !0,
};

export default {
  name: 'Dashboard',
  mounted() {
    window.particlesJS('particles-js', options);

    // 从其他页面返回的时候会不显示
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 1000);
  },
};
</script>

<style scoped>
.text-container {
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 100px;
  line-height: 100px;
  margin-top: -50px;
  text-align: center;
  font-size: 20px;
  user-select: none;
}

.particle-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
