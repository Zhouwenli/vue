<template>
  <div>
    <group id="example"  @click.native="greet">
      <cell title="title" value="value" ></cell>
    </group>
  </div>
</template>

<script>
  import {Group,Cell} from 'vux'
  export default{
    components:{
      // example
      Group,
      Cell
    },
    // data(){
    //   name: 'Vue.js'
    // },
    // 在 `methods` 对象中定义方法
    methods: {
      greet: function (event) {
        // console.log(event)
        this.$msgbox("点击起效果了");
      }
    }

  }
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
