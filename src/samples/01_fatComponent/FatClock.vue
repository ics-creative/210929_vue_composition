<template>
  <div class="FatClock">
    <div class="clock">
      <div class="hand hour" :style="{ transform: `rotate(${angles.hour}deg)` }"></div>
      <div class="hand minute" :style="{ transform: `rotate(${angles.minute}deg)` }"></div>
      <div class="hand second" :style="{ transform: `rotate(${angles.second}deg)` }"></div>
      <div class="timeText">{{ timeText }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: new Date(),
      timer: 0,
    }
  },
  computed: {
    timeText() {/* 略 */},
    angles() {/* 略 */},
  },
  methods: {
    updateTime() {
      this.current = new Date()
    },
  },
  mounted() {
    this.timer = window.setInterval(() => this.updateTime(), 100)
  },
  unmounted() {
    window.clearInterval(this.timer)
  },
}
</script>

<style lang="scss" scoped>
$clock-size: 300px;
.FatClock {
  position: relative;
  width: 300px;
  height: 300px;
  border: 2px solid currentColor;
  border-radius: 50%;
}
.clock {
  position: absolute;
  width: 0px;
  height: 0px;
  left: 50%;
  top: 50%;

  .hand {
    position: absolute;
    transform-origin: 6px 1px;
    height: 2px;
    top: -1px;
    left: -6px;
    background-color: currentColor;
    &.hour {
      width: $clock-size * 0.25;
    }
    &.minute {
      width: $clock-size * 0.4;
    }
    &.second {
      width: $clock-size * 0.5;
    }
  }

  .timeText {
    position: absolute;
    width: $clock-size;
    left: $clock-size * -0.5;
    top: 1em;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
  }
}
</style>
