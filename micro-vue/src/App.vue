<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <div id="hello-world"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    console.log(this.loadMicroApp)
    this.microApp = this.loadMicroApp({
      name: 'micro-react',
      entry: '//localhost:2002',
      container: '#hello-world', // 可为子应用分配不同的container，本次将不示例
      props: {
        detail: 'test'
      }
    })
  }
}
</script>

<style>
</style>
