<template>
  <div class="page-index">
    <router-view/>
    <div id="footerBar">
      <ul class="list">
        <router-link class="listItem" v-for="(item,i) in linkList" :key="i" :to="item.link">{{item.name}}</router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
	name:'indexPage',
	data(){
		return{
			linkList:[
				{link:'/',name:'首页'},
				{link:'/list',name:'业务中心'},
				{link:'/Login',name:'我的'}
			]
		}
	}

}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footerBar {
  width: 7.5rem;
  height: 0.8rem;
  line-height: 0.8rem;
  position: fixed;
  bottom: 0.0rem;
  z-index: 111;
}

#footerBar .list {
  width: 7.5rem;
  height: 0.8rem;
  display: flex;
}

#footerBar .list .listItem {
  flex: 1;
}



</style>
