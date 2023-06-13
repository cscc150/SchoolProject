<template>
	<view class="content">
		
		<swiper vertical='true' style="height: 100vh;">
			<swiper-item>
				<view>
					<view class="login-tel">
						<view class="tel-main">
							<view class="close close-cneter" @tap="goBack">
								<view class="">
									<image class="close-img" src="../../static/login/close.png" mode=""></image>
								</view>
								<!-- <view class="login-go">
									<image class="close-img" src="../../static/login/arrow_up_fill.png" mode=""></image>
									<view class="">没有账号，去注册</view>
								</view> -->
							</view>
							<view class="logo">
								<image class="logo-img" src="../../static/login/title.jpg" mode=""></image>
							</view>
							<view class="login-form">
								<view class="login-user">
									<text class="user-text">账号</text>
									<input type="text" v-model="userName" value="" placeholder="请输入账号">
								</view>
								<view class="login-user">
									<text class="user-text">密码</text>
									<input type="password" v-model="userPwd" value="" placeholder="6-16位字符">
								</view>
							</view>
							<view class="choice">
								<label class="radio">
								      <radio value="" 
											:checked="isAgree" 
											@click="isAgree = !isAgree" 
											color="rgba(211, 0, 0, .5)" 
											style="transform: scale(0.5);"
											/>
								            <text style="font-size: 24rpx;">
												我已阅读并同意
												<text style="color: #29b6f6;font-size: 22rpx;">《服务协议》</text>
												&
												<text style="color: #29b6f6;font-size: 22rpx;">《简香肴隐私保护指引》</text>
											</text>
								 </label>
							</view> 
							<view class="login-quike">
								<view class="quike-text">忘记密码？</view>
								<view class="quike-text">免密登录</view>
							</view>
							<view class="tel" @tap="submit">登录</view>
							<view class="bottom-text">
								
								<!-- 其他方式登录 -->
								<view>
									<view class="window-img" type="primary" @click="toggle('bottom')">
										<text class="item-text">其他方式登录</text>
									</view>
									<uni-popup ref="popup" :type="type" :animation="true" :maskClick="true" >
										<view class="popup-box" >
											
											<!-- 标题小点 -->
											<view class="box-title"></view>
											
											<!-- 登录方式 -->
											<view class="box-item">
												<image class="box-img" src="../../static/login/qq.png" mode=""></image>
												<text class="box-name">Q Q 登录</text>
												<image class="arrow" src="../../static/login/right.png" mode=""></image>
											</view>
											<view class="box-item">
												<image class="box-img" src="../../static/login/weixin.png" mode=""></image>
												<text class="box-name">微信登录</text>
												<image class="arrow" src="../../static/login/right.png" mode=""></image>
											</view>
											<view class="box-item" @tap="goLoginTel">
												<image class="box-img" src="../../static/login/phone.png" mode=""></image>
												<text class="box-name">手机登录</text>
												<image class="arrow" src="../../static/login/right.png" mode=""></image>
											</view>
										</view>
										
									</uni-popup>
								</view>
			
								<!-- 新用户注册 -->
								<view class="text-item">
									<view class="item-text">新用户注册</view>
								</view>
								
								<!-- 更多选项 -->
								<view class="text-item">
									<view class="item-text">更多选项</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
			
			<!-- <swiper-item>
				<scroll-view>
					<view class="login-tel">
						<view class="tel-main">
							<view class="close" @tap="goBack">
								<image class="close-img" src="../../static/login/close.png" mode=""></image>
							</view>
							<view class="logo">
								
							</view>
							<view class="tel" @tap="goLoginTel">手机号注册</view>/
							<view class="tel">登录</view>
							<LoginOther></LoginOther>
							<view class="login-go">
								<view class="">已有账号，去登陆</view>
								<image src="../../static/login/arrow_up_fill.png" mode=""></image>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item> -->
		</swiper>
	</view>
</template>


<script>
	import $http from "@/commen/api/request.js"
	import LoginOther from '@/components/login/login.vue'
   export default {
     name: 'login',
     data() {
       return {
		   //是否选中单选按钮
            isAgree: false,
		   //用户输入的内容
		   userName:"",
		   userPwd:"",
		   //验证的规则
		   rules:{
			   userName: {
				   rule:/\S/,
				   msg: "账号不能为空"
			   },
			   userPwd: {
				   rule:/^[0-9a-zA-Z]{6,16}$/,
				   msg: "密码应该是6-16位字符"
			   }
		   },
		   type: 'bottom',
         // // 当前选中的模式
         // currentModeIndex: 0,
         // // 模式选中滑块
         // modeSliderStyle: {
         //   left: 0
         // },
         // // 是否显示密码
         // showPassword: false,
         // // 倒计时提示文字
         // tips: '获取验证码'
       }
     },
     watch: {
		 
     },
     methods: {
		 //返回上一页
		 goBack() {
		 	uni.navigateBack({
		 		delta:1
		 	})
		 },
		 goLoginTel() {
			uni.navigateTo({
				url:"login-tel/login-tel"
			})
		 },
		 //登录
		 submit() {
			 if( !this.validata('userName') ) return;
			 if( !this.validata('userPwd') ) return;
			 
			 uni.showLoading({
			 	title: '登录中'
			 });
			 
			 $http.request({
			 	url:"/login",
				method:"POST",
				data:{
					userName : this.userName,
					userPwd : this.userPwd
				}
			 }).then((res)=>{
				 uni.showToadt({
				 	title: res.msg,
				 	icon:'none'
				 })
				 
				// uni.hideLoading();
			 }).catch(()=>{
			 	uni.showToadt({
			 		title:'请求失败',
			 		icon:'none'
			 	})
			 }) 
			 
			 setTimeout(() => {
				 
				 uni.navigateBack({
					 delta:1,
				 })
			 }, 2000)
		 },
		 toggle(type) {
		 	this.type = type;
		 	this.$refs['popup'].open();
		 },
		 // //判断验证是否ok
		 validata(key) {
			 let bool = true;
			 if( !this.rules[key].rule.test(this[key])) {
				 uni.showToast({
					 title:this.rules[key].msg,
					 icon:'none',
				 }) 
				 bool = false
				 return false
			 }
			 return bool
		 },
		 // haveBox () {
			//  uni.showActionSheet({
			// 	// title: "第三方登陆方式",
			// 	itemList: ["QQ登录" , "微信登录" , "手机话登录"],
			// 	itemColor: "rgba(211, 0, 0, .5)",
			//  	success: function (res) {
			//  		console.log('选中了第' + (res.tapIndex.name + 1) + '个按钮');
			//  	},
			//  	fail: function (res) {
			//  		console.log(res.errMsg);
			//  	}
			//  });
			//  uni.showModal({
			//  	title: '提示',
			//  	content: '这是一个模态弹窗',
			//  	success: function (res) {
			//  		if (res.confirm) {
			//  			console.log('用户点击确定');
			//  		} else if (res.cancel) {
			//  			console.log('用户点击取消');
			//  		}
			//  	}
			//  });
		 // },
     },
	 components: {
		 LoginOther,
	 }
   }
</script>


<style scoped>
	
	.content {
		background-color: #f9f9f9;
	}
	
	.login-tel {
		width: 100vw;
		height: 100vh;
	}
	
	.tel-main {
		padding: 0 20rpx;
	}
	
	.close {
		padding: 120rpx 0;
	}
	
	.close-img {
		width: 60rpx;
		height: 60rpx;
	}
	
	.logo {
		padding-bottom: 70rpx;
		display: flex;
		justify-content: center;
	}
	
	.logo-img {
		height: 200rpx;
		width: 60%;
	}
	
	.tel {
		width: 55%;
		height: 80rpx;
		margin: 15rpx auto; 
		line-height: 80rpx;
		text-align: center;
		color: #000;
		background-color: rgba(211, 0, 0, .5);
		border-radius: 40rpx;
	}
	
	.login-go {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	.login-go image {
		width: 60rpx;
		height: 60rpx;
	}
	
	.login-form{
		padding-top: 70rpx;
		padding-left: 60rpx;
	}
	
	.login-user{
		font-size: 36rpx;
		padding: 15rpx 0;
		display: flex;
		align-items: center;
		border-bottom: 2rpx solid #f7f7f7;
	}
	
	.user-text {
		padding-right: 20rpx;
	}
	
	.login-quike {
		display: flex;
		justify-content: space-between;
		padding: 15rpx 60rpx;
	}
	
	.quike-text {
		font-size: 24rpx;
		color: #ccc;
	}
	
	.choice {
		margin: 15rpx 50rpx; 
	}
	
	.bottom-text {
		display: flex;
		flex-wrap: wrap;
	}
	
	.item-text {
		width: 238rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 450rpx 0;
		font-size: 28rpx;
	}
	
	
	
	.popup-box {
		background-color: #fff;
		padding: 30rpx 0;
		border-radius: 50rpx 50rpx 0 0;
	}
	
	.box-title {
		background-color: #b8b8b8;
		width: 48rpx;
		height: 12rpx;
		border-radius: 40rpx;
		margin:0 350rpx 30rpx;
		border: 1rpx solid #b8b8b8;
	}
	
	.box-item {
		width: 100%;
		height: 130rpx;
		border-bottom: 1rpx solid #cbcbcb;
		line-height: 200rpx;
	}
	
	.box-img {
		width: 100rpx;
		height: 100rpx;
		margin: 0 20rpx;
	}
	
	.box-name {
		position: relative;
		bottom: 35rpx;
		font-size: 32rpx;
	}
	
	.arrow {
		width: 40rpx;
		height: 40rpx;
		position: relative;
		bottom: 29rpx;
		margin-left: 400rpx;
	}
</style>
