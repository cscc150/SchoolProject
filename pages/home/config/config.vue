<template>
	<view class="my-config">
		<view class="config-item" @tap="goAccount">
			<view>账号与安全</view>
			<view class="config-mark"> > </view>
		</view>
		<view class="config-item" @tap="goPathList">
			<view>地址管理</view>
			<view class="config-mark"> > </view>
		</view>
		<view class="config-item" @tap="goMessage">
			<view>消息通知</view>
			<view class="config-mark"> > </view>
		</view>
		<view class="config-item" @tap="goCurrent">
			<view>通用</view>
			<view class="config-mark"> > </view>
		</view>
		<view class="config-item" @tap="goPrivacy">
			<view>隐私设置</view>
			<view class="config-mark"> > </view>
		</view>
		<view class="config-item" @tap="goHelp">
			<view>帮助与反馈</view>
			<view class="config-mark"> > </view>
		</view>
		<view class="my-exit">
			退出
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goAccount () {
				uni.navigateTo({
					url:"account/account"
				})
			},
			goPathList() {
				uni.navigateTo({
					url:"path-list/path-list"
				})
			},
			goMessage() {
				uni.navigateTo({
					url:"message/message"
				})
			},
			goCurrent() {
				uni.navigateTo({
					url:"current/current"
				})
			},
			goPrivacy() {
				uni.navigateTo({
					url:"privacy/privacy"
				})
			},
			goHelp() {
				uni.navigateTo({
					url:"help/help"
				})
			},
		}
	}
</script>

<style scoped>
	
	.config-item {
		display: flex;
		justify-content: space-between;
		margin: 20rpx 0;
		padding: 20rpx 0 20rpx 20rpx;
		border-top: 5rpx solid #f5f5f5;
		border-bottom: 5rpx solid #f5f5f5;
	}
	
	.config-mark {
		padding-right: 10rpx;
	}
	
	.my-exit {
		background-color: rgba(211, 0, 0, .5);
		width: 55%;
		border-radius: 55rpx;
		margin: 0 auto;
		line-height: 80rpx;
		color: #000;
		text-align: center;
	}
	
	
</style>