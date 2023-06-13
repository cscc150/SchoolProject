<template>
	<view class="content">
		<Lines></Lines>
		
		
		<view class="login-tel">
			<view class="tel-main">
				
				
				
				<view class="logo">
					<image class="logo-img" src="../../../static/login/title.jpg" mode=""></image>
				</view>
				
				
				
				<text class="tip">输入手机号码</text>
				
				
				
				<view class="login-form">
					<view class="login-user">
						<text class="user-text">+86</text>
						<input type="number" focus="true" v-model="userTel" value="" placeholder="请输入11位手机号">
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
				
				
				
				
				<view class="tel" @tap="goNext">同意并继续</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Lines from "@/components/common/Lines.vue"
	export default {
		data() {
			return {
				userTel:'',
				//验证的规则
				rules:{
				   userTel: {
					   rule:/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
					   msg: "请输入正确的手机号码"
				   }
				},
				//是否选中单选按钮
				 isAgree: false,
			}
		},
		methods: {
			//判断验证是否ok
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
			goNext() {
				if( !this.validata('userTel') ) return;
				uni.navigateTo({
					url:"./login-code/login-code?phone=" + this.userTel +""
				})
			},
		},
		components: {
			Lines
		}
	}
</script>

<style scoped>
	
	.content {
		background-color: #f8f8f8;
	}
	
	.login-tel {
		width: 100vw;
		height: 100vh;
	}
	
	.tel-main {
		padding: 0 20rpx;
	}
	
	.logo {
		/* border: 2rpx solid #000; */
		padding: 70rpx 0;
		display: flex;
		justify-content: center;
	}
	
	.logo-img {
		height: 200rpx;
		width: 55%;
	}
	
	.tip {
		font-size: 68rpx;
		margin: 10rpx 30rpx;
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
	
	.login-form{
		margin: 75rpx 80rpx;
		width: 75%;
		border-bottom: 2rpx solid #c7c7c7;
		
	}
	 
	.login-user{
		font-size: 32rpx;
		padding: 10rpx 0;
		display: flex;
		align-items: center;
		border-bottom: 2rpx solid #f7f7f7;
	}
	
	.user-text {
		padding: 0 60rpx 0 30rpx;
		/* border: 2rpx solid #000; */
	}
	
	.choice {
		margin: 15rpx 50rpx; 
	}

</style>
