<template>
	<div class="page-login">
		<div class="loginHead">
			登录
		</div>
		<div class="loginContent">
			<img class="log" src="../../assets/img/login/login.png"/>
		</div>
		<div class="loginmess">
			<p class="loginp"><label for="">号码</label>
				<input type="text" name="" id="" value="" placeholder="请输入银盛通信手机号码"  v-model="number" />
				<img v-bind:class="number==''?'':'active'" v-on:click="clear" src="../../assets/img/login/clear.png"/>
			</p>
			<p class="loginp"><label for="">密码</label>
				<input type="text" name="" id="" value="" placeholder="请输入服务密码" v-model="password"/>
				<img  class="padingLeft" src="../../assets/img/login/nosee.png"/>
				<img src="../../assets/img/login/clear.png"/></p>
		</div>
		<div class="loginIn">
			登录
		</div>
	</div>

</template>
<script>
	export default{
		name:'login',
		data(){
			return{
				number:'',
				password:''
			}
		},
		methods:{
			clear(){
				console.log(this.number)
				this.number='';
				console.log("1111111111")
			}
			
		}
	}
</script>
<style scoped>
@import url("../../assets/css/login.css");
</style>