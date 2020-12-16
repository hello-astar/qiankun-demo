<template>
  <div id="app" class="layout">
    <header class="layout-header">DEMO</header>
    <div class="layout-container">
      <aside class="layout-aside">66</aside>
      <main class="layout-main">
        <div id="subapp-viewport"></div>
      </main>
    </div>
  </div>
</template>
<script>
export default {
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
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    height: 60px;
    line-height: 60px;
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
  }
  &-main {
    height: 100%;
    overflow: auto;
  }
}
</style>