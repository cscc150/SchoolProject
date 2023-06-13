<template>
	<view class="content">
		<view class="message-box" v-for="(item , index) in dataList" :key="index">
			<view class="user-icon">
				<image class="img" :src="item.userImg" mode=""></image>
			</view>
			<view class="text-box">
				<view class="user-name">
					{{item.userName}}
				</view>
				<view class="message">
					{{item.message}}
				</view>
				<view class="bc">
					<image class="message-bc" :src="item.imgUrl" mode=""></image>
				</view>
				<view class="message-bottom">
					<view class="good iconfont icon-xihuan">赞</view>
					<view class="speak iconfont icon-xihuan">评论</view>
				</view>
			</view>
		</view>
	</view>
	
	
</template>

<script>
	export default {
		props: {
			dataList:Array
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		filters : {
			
		}
	}
</script>

<style>
	
	.message-box {
		margin: 20rpx 30rpx;
		/* border: 2rpx solid #000; */
	}
	
	.img {
		width: 60rpx;
		height: 60rpx;
		border:5rpx solid #d45235;
		border-radius: 50%;
		position: relative;
		left: 20rpx;
		top: 40rpx;
	}
	
	.text-box {
		position: relative;
		left: 110rpx;
		bottom: 50rpx;
		width: 550rpx;
		/* border: 2rpx solid #000; */
	}
	
	.user-name {
		padding: 0 20rpx 10rpx;
	}
	
	.message {
		padding: 10rpx 0;
	}
	
	.message-bc {
		width: 250rpx;
		height: 250rpx;
	}
	
	.message-bottom {
		margin: 20rpx;
		padding: 0 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.good {
		padding: 10rpx 0;
	}
	
	.speak {
		padding: 10rpx 0;
	}
</style>