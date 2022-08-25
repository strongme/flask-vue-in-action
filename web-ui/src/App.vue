<template>
  <div id="app">
    <el-tag v-for="item in data" :key="item" style="margin-right: 10px;">Data {{item}}</el-tag>
  </div>
</template>

<script>
import request from "@/request";

export default {
  name: 'App',
  data() {
    return {
      data: []
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      request({
        url: '/load_data',
        method: 'get',
      }).then(res => {
        this.data = res.data
      })
    },
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
