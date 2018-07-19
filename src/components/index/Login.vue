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
				<input type="text"  placeholder="请输入银盛通信手机号码"  v-model="number" />
				<img v-bind:class="number==''?'':'active'" @click="clear('number')"  src="../../assets/img/login/clear.png"/>
			</p>
			<p class="loginp"><label for="">密码</label>
				<input type="password"  placeholder="请输入服务密码" v-model="password"/>
				<img  class="padingLeft" src="../../assets/img/login/nosee.png"/>
				<img v-bind:class="password==''?'':'active'"  @click="clear('password')" src="../../assets/img/login/clear.png"/></p>
		</div>
		<div class="loginIn" @click="login">
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
			clear:function(type){
				this[type]='';
			},
			login:function(){
				this.$http.get("static/login.json").then(function(responce){
						console.log(responce)
						console.log(responce.body.status)
				    if(responce.body.status==200){
				    	console.log(responce.body.number)
				    	if(responce.body.number==this.number && responce.body.password==this.password){
				    		alert("登录成功")
				    	}else{
				    		alert("登录失败")
				    	}
				    }
				},function(err){
					console.log("请求失败！")
				})

			}
		}
	}
</script>
<style scoped>
@import url("../../assets/css/login.css");
</style>