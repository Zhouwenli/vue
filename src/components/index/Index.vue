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
      <flexbox-item :span="1/4">
        <img class="flexboxImg" src="../../assets/img/index/1.png"/>
        <p class="flexboxla" >话费充值</p>
      </flexbox-item>
      <flexbox-item :span="1/4">
        <img class="flexboxImg"  src="../../assets/img/index/2.png"/>
        <p class="flexboxla">在线客服</p>
      </flexbox-item>
      <flexbox-item :span="1/4">
        <img class="flexboxImg"  src="../../assets/img/index/3.png"/>
        <p class="flexboxla" >语音/流量包</p>
      </flexbox-item>
      <flexbox-item :span="1/4">
        <img class="flexboxImg" src="../../assets/img/index/4.png"/>
        <p class="flexboxla" >选号中心</p>
      </flexbox-item>
      <flexbox-item :span="1/4">
        <img class="flexboxImg"  src="../../assets/img/index/5.png"/>
        <p class="flexboxla" >余量查询</p>
      </flexbox-item>
      <flexbox-item :span="1/4">
        <img class="flexboxImg"  src="../../assets/img/index/6.png"/>
        <p class="flexboxla" >最新活动</p>
      </flexbox-item>
      <flexbox-item :span="1/4">
       <img  class="flexboxImg" src="../../assets/img/index/7.png"/>
       <p class="flexboxla" >余额查询</p>
      </flexbox-item>
      <flexbox-item :span="1/4">
       <img class="flexboxImg" src="../../assets/img/index/8.png"/>
       <p class="flexboxla" >实名认证</p>
      </flexbox-item>
    </flexbox>
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
.page-index {
  width: 7.5rem;
  margin: 0 auto;
}

.swiper-demo-img {
  width: 100%;
  height: 100%;
}

.swiper-demo-img img {
  width: 100%;
  height: 100%;
}

.page-index .index-notice {
  width: 7.5rem;
  height: 0.7rem;
  line-height: 0.7rem;
  font-size: 0.24rem;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  position: relative;
}
.page-index .index-notice img{
	width:0.64rem;
	height:0.27rem;
  position: absolute;
  left: 0.24rem;
  top: 0.22rem;	
}

.index-flexbox {
  width: 7.5rem;
}
.index-flexbox flexbox-item{
	height: 1.5rem;
}
.flexboxImg{
	width: 0.84rem;
	display: block;
	margin: 0.15rem auto;
}
.flexboxla{
	text-align: center;
}


</style>
