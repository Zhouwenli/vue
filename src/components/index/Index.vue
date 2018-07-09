<template>
  <div class="page-index">
    <swiper :aspect-ratio="400/750" v-model="swiperItemIndex" style="height: 3.75rem" :dots-position="center">
      <swiper-item class="swiper-demo-img" v-for="(item, index) in demo04_list" :key="index">
        <img :src="item">
      </swiper-item>
    </swiper>
    <div class="index-notice">
      五月最新优惠活动即将开始！
    </div>
    <flexbox :gutter="0" wrap="wrap" class="index-flexbox">
      <flexbox-item :span="1/4">
        <div class="flex-demo">1</div>
      </flexbox-item>
      <flexbox-item :span="1/4">
        <div class="flex-demo">2</div>
      </flexbox-item>
      <flexbox-item :span="1/4">
        <div class="flex-demo">3</div>
      </flexbox-item>
      <flexbox-item :span="1/4">
        <div class="flex-demo">4</div>
      </flexbox-item>
      <flexbox-item :span="1/4">
        <div class="flex-demo">5</div>
      </flexbox-item>
      <flexbox-item :span="1/4">
        <div class="flex-demo">6</div>
      </flexbox-item>
      <flexbox-item :span="1/4">
        <div class="flex-demo">7</div>
      </flexbox-item>
      <flexbox-item :span="1/4">
        <div class="flex-demo">8</div>
      </flexbox-item>
    </flexbox>
    <ul>
      <li v-for="(item,i) in dataList" :key="i">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
import { Swiper, SwiperItem, Flexbox, FlexboxItem } from 'vux'
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
    FlexboxItem
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
}

.index-flexbox {
  width: 7.5rem;
}

.flex-demo {
  height: 1rem;
  line-height: 1.0rem;
  text-align: center;
  box-sizing: border-box;
}

</style>
