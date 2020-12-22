<template>
  <div id="app" class="layout">
    <header class="layout-header">DEMO</header>
    <div class="layout-container">
      <aside class="layout-aside">
        <template v-for="(item, index) in sideMenuConfig">
          <div class="layout-aside-item" :key="item.name + index" @click="$router.push(item.path)" v-if="!(item.meta && item.meta.hidden)">
            {{item.name}}
          </div>
        </template>
      </aside>
      <main class="layout-main">
        <div id="subapp-viewport" v-show="!$route.name"></div>
        <router-view v-show="$route.name"></router-view>
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
    overflow: auto;
  }
  &-aside {
    position: absolute;
    left: 0;
    top: 0;
    background-color: #D3DCE6;
    box-shadow:rgba(0, 0, 0, 0.2) 1px 1px 8px 1px;
    color: #333;
    text-align: center;
    height: 100%;
    width: 200px;
    &-item {
      line-height: 45px;
      cursor: pointer;
      &:hover {
        background: rgb(212, 211, 211);
      }
    }
  }
  &-main {
    height: 100%;
    overflow: auto;
  }
}
</style>