<template>
  <div class="page-index">
    <router-view/>
     <tabbar>
      <tabbar-item selected link="/">
      	<img slot="icon" src="../assets/img/footerIcon/wxb.png">
        <span class="" slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/list">
      	<img slot="icon" src="../assets/img/footerIcon/all.png">
       <span  slot="label">业务中心</span>
      </tabbar-item>
      <tabbar-item  link="/Login" >
      	<img slot="icon" src="../assets/img/footerIcon/account.png">
        <span slot="label">我的</span>
      </tabbar-item>
     
    </tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weui-tabbar{
	position: fixed;
}




</style>
