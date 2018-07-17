<template>
  <div class="page-index">
    <swiper :aspect-ratio="400/750" v-model="swiperItemIndex" style="height: 3.75rem" :dots-position="center">
      <swiper-item class="swiper-demo-img" v-for="(item, index) in demo04_list" :key="index">
        <img :src="item">
      </swiper-item>
    </swiper>
    <div class="index-notice">
        <img src="../../assets/img/index/noticeIcon.png"/>五月最新优惠活动即将开始！
    </div>
    <flexbox :gutter="0" wrap="wrap" class="index-flexbox">
      <flexbox-item :span="1/4" v-for=" item in flexItem">
        <img class="flexboxImg" v-bind:src="item.itemImg"/>
        <p class="flexboxla" >{{item.itemname}}</p>
      </flexbox-item>
      
    </flexbox>
    <div class="newbars">
    	<img src="../../assets/img/index/news1.jpg"/>
    </div>
    <div class="newproducts">
    	<p class="productP"><img src="../../assets/img/index/productItem1.png"/></p>
   		<div class="productItem">
   			<div class="itemLeft">
   				<img src="../../assets/img/index/news2.png"/>
   			</div>
   			<div class="itemRight">
   				<img src="../../assets/img/index/news3.png"/>
   				<img class="active" src="../../assets/img/index/news4.png"/>
   			</div>
   		</div>
    </div>
    <ul>
      <li v-for="(item,i) in dataList" :key="i">{{item.name}}</li>
    </ul>
    
  </div>
</template>
<script>
import { Swiper, SwiperItem, Flexbox, FlexboxItem,Grid, GridItem, GroupTitle } from 'vux'
const imgList = [
  require("../../assets/img/lunbo.jpg"),
  require("../../assets/img/lunbo.jpg"),
  require("../../assets/img/lunbo.jpg")
]
export default {
  name: 'index',
  components: {
    Swiper,
    SwiperItem,
    Flexbox,
    FlexboxItem,
    Grid,
    GridItem,
    GroupTitle
  },
  methods: {
    onItemClick () {
      console.log('on item click')
    }
  },
  data() {
    return {
      demo04_list: imgList,
      swiperItemIndex: 1,
      flexItem:[
      	{itemname:'话费充值',itemImg: require("../../assets/img/index/1.png")},
      	{itemname:'在线客服',itemImg: require("../../assets/img/index/2.png")},
      	{itemname:'语音/流量包',itemImg: require("../../assets/img/index/3.png")},
      	{itemname:'选号中心',itemImg: require("../../assets/img/index/4.png")},
      	{itemname:'余量查询',itemImg: require("../../assets/img/index/5.png")},
      	{itemname:'最新活动',itemImg: require("../../assets/img/index/6.png")},
      	{itemname:'余额查询',itemImg: require("../../assets/img/index/7.png")},
      	{itemname:'实名认证',itemImg: require("../../assets/img/index/8.png")}
      ],
      center: 'center',
      dataList: [
        { name: 123 },
        { name: 123 },
        { name: 123 },
        { name: 123 }
      ]
    }
  },
  beforeCreate() {
    console.log('11', this.center)
  },
  created() {
    console.log(2, this.center)
    this.$http.post('/someUrl', '').then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(this.test())


      var resData = [
        { name: 333 },
        { name: 1423 },
        { name: 555 },
        { name: 666 }
      ];

      setTimeout(() => {
        resData.forEach((item) => {
          this.dataList.push(item);
        })
      }, 1000)

    })
  },
  mounted() {
    console.log(3, this.center)
  },
  methods: {
    test() {
      console.log('do me')
    }

  }
}

</script>
<style scoped>
@import url("../../assets/css/index.css");

</style>
