<template>
  <div id="app">
    <router-view/>
    <div id="footerBar">
      <ul>
        <li>首页</li>
        <li>服务中心</li>
        <li>我的</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
  width: 15.0rem;
  margin:0 auto;
}
#app #footerBar{
  width: 15.0rem;
  height: 1.0rem;
  position: fixed;
  bottom: 0.0rem;
  z-index: 111;
}
#footerBar ul{
   width: 15.0rem;
  height: 1.0rem;
  display: flex;
}
#footerBar ul li{
  flex: 1;
}
</style>
