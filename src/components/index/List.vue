<template>
	<div class="index-list">
		
		<div class="businessContent">
			<div class="imgBanner">
				<img src="../../assets/img/list/businessbanner.jpg"/>
			</div>
		</div>
		<div class="businessTab">
			<div class="TabLeft">
				<ul class="TabItem">
					<li data-index="0" class="rgbaC"  v-bind:class="num==0?'active':''" @click="jump(0)"><span v-bind:class="num==0?'listBar':''"></span> 查询</li>
					<li data-index="1"  v-bind:class="num==1?'active':''" @click="jump(1)"><span v-bind:class="num==1?'listBar':''"></span>选号</li>
					<li data-index="2"  v-bind:class="num==2?'active':''" @click="jump(2)"><span v-bind:class="num==2?'listBar':''"></span>办理</li>
					<li data-index="3"  v-bind:class="num==3?'active':''" @click="jump(3)"><span v-bind:class="num==3?'listBar':''"></span>缴费</li>
					<li data-index="4"  v-bind:class="num==4?'active':''" @click="jump(4)"><span v-bind:class="num==4?'listBar':''"></span>客服</li>
					<li data-index="5"  v-bind:class="num==5?'active':''" @click="jump(5)"><span v-bind:class="num==5?'listBar':''"></span>金融投资</li>
					<li data-index="6"  v-bind:class="num==6?'active':''" @click="jump(6)"><span v-bind:class="num==6?'listBar':''"></span>物联网业务</li>
					<li data-index="7"  v-bind:class="num==7?'active':''" @click="jump(7)"><span v-bind:class="num==7?'listBar':''"></span>帮助中心</li>
					
				</ul>
			</div>
			<div class="TabRight" v-bind:class="num==0?'active':''">
				<div class="Tabhr">
					<hr class="hrL"/>
					基础业务查询
					<hr class="hrR" />
				</div>
				<ul class="Tabul">
					<li>
						<a href="#">
							<img src="../../assets/img/list/checkIcon1.png"/>
							<p>基本信息</p>
						</a>
						
					</li>
					<li>
						<a href="#">
							<img src="../../assets/img/list/checkIcon2.png"/>
							<p>余量查询</p>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="../../assets/img/list/checkIcon3.png"/>
							<p>话费余额</p>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="../../assets/img/list/checkIcon4.png"/>
							<p>历史账单</p>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="../../assets/img/list/checkIcon5.png"/>
							<p>充值记录</p>
						</a>
						
					</li>
					<li>
						<a href="#">
							<img src="../../assets/img/list/checkIcon6.png"/>
							<p>资费专区</p>
						</a>
						
					</li>
					<li>
						<a href="#">
							<img src="../../assets/img/list/checkIcon7.png"/>
							<p>已办业务</p>
						</a>
						
					</li>
					<li>
						<a href="#">
							<img src="../../assets/img/list/checkIcon8.png"/>
							<p>订单查询</p>
						</a>
						
					</li>
					<li>
						<a href="#">
							<img src="../../assets/img/list/checkIcon9.png"/>
							<p>发票查询</p>
						</a>
						
					</li>
					<li>
						<a href="#">
							<img src="../../assets/img/list/checkIcon10.png"/>
							<p>详单查询</p>
						</a>
						
					</li>
				</ul>
			</div>
			<div class="TabRight " v-bind:class="num==1?'active':''">
				<div class="Tabhr">
					<hr class="hrL"/>
					选号
					<hr class="hrR" />
				</div>
				<ul class="Tabul">
					<li>
						<a href="choose_number_center.html">
							<img src="../../assets/img/list/chooseNo1.png"/>
							<p>选号中心</p>
						</a>
					</li>
				</ul>
			</div>
			<div class="TabRight " v-bind:class="num==2?'active':''">
				<div class="Tabhr">
					<hr class="hrL"/>
					基础业务办理
					<hr class="hrR" />
				</div>
				<ul class="Tabul">
					<li>
						<a href="#">
							<img src="../../assets/img/list/banli1.png"/>
							<p>号卡激活</p>
						</a>
						
					</li>
					<li>
						<a href="#">
							<img src="../../assets/img/list/banli2.png"/>
							<p>服务密码修改</p>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="../../assets/img/list/banli3.png"/>
							<p>发票详情</p>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="../../assets/img/list/banli4.png"/>
							<p>过户申请</p>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="../../assets/img/list/banli5.png"/>
							<p>销户</p>
						</a>
						
					</li>
					<li>
						<a href="#">
							<img src="../../assets/img/list/banli6.png"/>
							<p>停复机业务</p>
						</a>
						
					</li>
					<li>
						<a href="#">
							<img src="../../assets/img/list/banli7.png"/>
							<p>套餐修改</p>
						</a>
						
					</li>
					<li>
						<a href="#">
							<img src="../../assets/img/list/banli8.png"/>
							<p>最新活动</p>
						</a>
						
					</li>
					<li>
						<a href="#">
							<img src="../../assets/img/list/banli9.png"/>
							<p>境外上网</p>
						</a>
						
					</li>
					<li>
						<a href="#">
							<img src="../../assets/img/list/banli10.png"/>
							<p>手机深圳通</p>
						</a>
						
					</li>
					<li>
						<a href="#">
							<img src="../../assets/img/list/banli11.png"/>
							<p>实名补登</p>
						</a>
						
					</li>
					<li>
						<a href="#">
							<img src="../../assets/img/list/banli12.png"/>
							<p>补换卡业务</p>
						</a>
						
					</li>
				</ul>
			</div>
			
			<div class="TabRight " v-bind:class="num==3?'active':''">
				<div class="Tabhr">
					<hr class="hrL"/>
					缴费
					<hr class="hrR" />
				</div>
				<ul class="Tabul">
					<li>
						<a href="#">
							<img src="../../assets/img/list/jiaofei1.png"/>
							<p>话费充值</p>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="../../assets/img/list/jiaofei2.png"/>
							<p>流量语音充值</p>
						</a>
					</li>
				</ul>
			</div>
			
			<div class="TabRight " v-bind:class="num==4?'active':''">
				<div class="Tabhr">
					<hr class="hrL"/>
					客服中心
					<hr class="hrR" />
				</div>
				<ul class="Tabul">
					<li>
						<a href="#">
							<img src="../../assets/img/list/kefuIcon1.png"/>
							<p>在线客服</p>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="../../assets/img/list/kefuIcon2.png"/>
							<p>人工客服</p>
						</a>
					</li>
				</ul>
			</div>
			
			<div class="TabRight" v-bind:class="num==5?'active':''">
				<div class="Tabhr">
					<hr class="hrL"/>
					金融理财
					<hr class="hrR" />
				</div>
				<ul class="Tabul">
					<li>
						<a href="#">
							<img src="../../assets/img/list/jinrongIcon1.png"/>
							<p>银盛金服</p>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="../../assets/img/list/jinrongIcon2.png"/>
							<p>e票通</p>
						</a>
					</li>
				</ul>
			</div>
			
			<div class="TabRight " v-bind:class="num==6?'active':''">
				<div class="Tabhr">
					<hr class="hrL"/>
					物联网业务
					<hr class="hrR" />
				</div>
				<ul class="Tabul">
					<li>
						<a href="#">
							<img src="../../assets/img/list/wulianwIcon1.png"/>
							<p>业务介绍</p>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="../../assets/img/list/wulianwIcon2.png"/>
							<p>合作登记</p>
						</a>
					</li>
				</ul>
			</div>
			
			<div class="TabRight " v-bind:class="num==7?'active':''">
				<div class="Tabhr">
					<hr class="hrL"/>
					帮助中心
					<hr class="hrR" />
				</div>
				<ul class="Tabul">
					<li>
						<a href="#">
							<img src="../../assets/img/list/commomq.png"/>
							<p>常见问题</p>
						</a>
					</li>
					
				</ul>
			</div>
		</div>
	</div>


</template>
<script>
	export default{
		name:'list',
		data(){
			return{
				num:0
			}
		},
		methods:{
			jump:function(number){
				this.num=number;
			}
		}
	}
</script>
<style scoped>
@import url("../../assets/css/business_center.css");
</style>