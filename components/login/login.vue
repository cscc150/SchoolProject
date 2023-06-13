<template>
	<view class="login-other">
		<view class="other-text">
			<view class="">第三方登录</view>
		</view>
		<view class="other">
			<view class="other-item">
				<image src="../../static/login/weixin.png" mode=""></image>
				<view class="">微信登录</view>
			</view>
			<view class="other-item">
				<image src="../../static/login/qq.png" mode=""></image>
				<view class="">QQ登录</view>
			</view>
			<view class="other-item">
				<image src="../../static/login/weibo-circle-fill.png" mode=""></image>
				<view class="">微博登录</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	/* 其他方式登录 */
	.login-other {
		padding: 100rpx 0;
	}
	
	.other-text {
		display: flex;
		padding: 50rpx 0;
	}
	
	.other-text view {
		line-height: 0;
		padding: 0 10rpx;
	}
	
	.other-text:after {
		flex: 1;
		content: '';
		height: 2rpx;
		background-color: #ccc;
	}
	
	.other-text::before {
		flex: 1;
		content: '';
		height: 2rpx;
		background-color: #ccc;
	}
	
	.other {
		display: flex;
		justify-content: space-around;
	}
	
	.other-item {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	
	.other-item image {
		width: 80rpx;
		height: 80rpx;
	}
	
	/* 其他方式登录 end */
</style>