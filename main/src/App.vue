<!--
 * @Description: 
 * @Author: astar
 * @Date: 2021-01-11 19:43:22
 * @LastEditTime: 2021-05-11 23:05:44
 * @LastEditors: astar
-->
<template>
  <el-container class="layout" id="app">
    <el-header class="layout-header">Qiankun Demo</el-header>
    <el-container class="layout-container">
      <el-aside class="layout-aside">
        <el-menu router :default-openeds="defaultOpen">
          <template
            v-for="(item, index) in sideMenuConfig"
            default-active="/react/test1"
          >
            <el-submenu
              :key="index"
              v-if="item.children"
              :index="item.path"
            >
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.meta.title}}</span>
              </template>
              <el-menu-item
                :class="{'is-active': checkActive(child.path)}"
                v-for="(child, idx) in item.children"
                :key="index + '-' + idx"
                :index="child.path"
              >
                <i class="el-icon-menu"></i>
                <span slot="title">{{child.meta.title}}</span>
              </el-menu-item>
            </el-submenu>
            <el-menu-item v-else :index="item.path" :key="index" :class="{'is-active': checkActive(item.path)}">
              <i class="el-icon-menu"></i>
              <span slot="title">{{item.meta.title}}</span>
            </el-menu-item>
          </template>
          <el-menu-item index="/vue/404">
            <i class="el-icon-menu"></i>
            <span slot="title">vue 404 测试</span>
          </el-menu-item>
          <el-menu-item index="/react/404">
            <i class="el-icon-menu"></i>
            <span slot="title">react 404 测试</span>
          </el-menu-item>
          <el-menu-item index="/other/404">
            <i class="el-icon-menu"></i>
            <span slot="title">其他 404 测试</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="layout-main">
        <div id="subapp-viewport" v-show="!$route.name"></div>
        <router-view v-show="$route.name"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import sideMenuConfig from './sideMenu'
export default {
  data () {
    return {
      sideMenuConfig
    }
  },
  computed: {
    defaultOpen () {
      let pathname = location.pathname
      let len = this.sideMenuConfig.length
      for (let i = 0; i < len; i++) {
        let item = this.sideMenuConfig[i]
        if (pathname === item.path) return [item.path]
        if (item.children && item.children.some(child => child.path === pathname)) return [item.path]
      }
      return []
    }
  },
  methods: {
    checkActive (path) {
      console.log(location.href, path)
      return location.href.includes(path)
    }
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
    box-shadow:rgba(0, 0, 0, 0.05) 1px 1px 8px 1px;
    z-index: 1;
  }
  &-aside {
    border-right: 1px solid #f6f6f6;
    height: 100%;
    width: 200px;
  }
  &-main {
    height: 100%;
    overflow: auto;
    padding: 0;
  }
}
</style>