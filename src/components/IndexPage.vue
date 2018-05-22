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
				{link:'/',name:'shouye'},
				{link:'/list',name:'second'},
				{link:'/Login',name:'login'}
			]
		}
	}

}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footerBar {
  width: 15.0rem;
  height: 1.0rem;
  position: fixed;
  bottom: 0.0rem;
  z-index: 111;
}

#footerBar .list {
  width: 15.0rem;
  height: 1.0rem;
  display: flex;
}

#footerBar .list .listItem {
  flex: 1;
}



</style>
