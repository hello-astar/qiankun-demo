<template>
  <div id="app" class="layout">
    <header class="layout-header">DEMO</header>
    <div class="layout-container">
      <aside class="layout-aside">
        <div class="layout-aside-item" v-for="(item, index) in sideMenuConfig" :key="item.name + index" @click="$router.push(item.path)">
          {{item.name}}
        </div>
      </aside>
      <main class="layout-main">
        <div id="subapp-viewport"></div>
      </main>
    </div>
  </div>
</template>
<script>
import sideMenuConfig from './sideMenu'
export default {
  data () {
    return {
      sideMenuConfig
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  &-header {
    width: 100%;
    color: #333;
    text-align: center;
    height: 80px;
    line-height: 80px;
    box-shadow:rgba(0, 0, 0, 0.2) 1px 1px 8px 1px;
    z-index: 1;
  }
  &-container {
    position: relative;
    flex: 1;
    padding-left: 200px;
  }
  &-aside {
    position: absolute;
    left: 0;
    top: 0;
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    height: 100%;
    width: 200px;
    &-item {
      line-height: 45px;
    }
  }
  &-main {
    height: 100%;
    overflow: auto;
  }
}
</style>