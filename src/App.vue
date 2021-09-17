<template>
  <div class="app">
    <routerView />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const route = useRoute()
    const isTopPage = computed(() => route.name === 'Top')
    return { isTopPage }
  },
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.app {
  padding: 20px;
}
.description {
  padding: 20px 0 40px 0;
}
a {
  color: rgb(53, 101, 121);
}

.page {
  position: relative;
  width: 970px;
  height: 550px;
  border: 1px solid silver;
  padding: 20px;
  h1 {
    position: relative;
    text-align: center;
    &::after {
      content: "";
      position: absolute;
      z-index: -1;
      left: 5%;
      bottom: 20%;
      width: 90%;
      height: 8px;
      background-color: rgb(135, 202, 188);
    }
  }
  button {
    display: inline-block;
    border: 2px solid currentColor;
    background-color: #fff;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    &:active {
      filter: invert(1);
    }
    &+button {
      margin-left: 4px;
    }
  }
  .note {
    background-color: rgb(223, 241, 239);
    border-radius: 8px;
    padding: 20px;
    font-size: 16px;
  }
}
</style>
