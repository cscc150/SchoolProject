<template>
	<view class="recommend" bg-color>
		
		<view class="title">肴肴玉香</view>
		
		<view class="recommend-item" v-for="(item , index) in dataList" :key="index" @tap="toPage">
			
			<image class="recommend-bg" :src="item.imgUrl" mode="" ></image>
			
			<!-- 介绍 -->
			<view class="user-info-box">
				<view class="portrait-box">
					<image class="portrait" :src='item.userImg'></image>
				</view>  
				<view class="info-box">
					<text class="username">{{item.userName}}</text>
				</view>
				<view class="info-good">
					<text class="iconfont icon-xihuan"></text>
				</view>
			</view>
			
			<view class="text">
				<text>{{item.message | ellipsis}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			dataList: Array
		},
		data() {
			return {
				
			}
		},
		onLoad () {
			this.getData()
		},
		methods: {
			toPage() {
				uni.navigateTo({
					url:"../../pages/cooking/MessagePage/MessagePage"
				})
			}
		},
		filters : {
			ellipsis : function (value) {
				if(value.length > 40) {
					return value.substr(0 , 40) + "...";
				}else{
					return value;
				}
			}
		}
	}
</script>

<style scoped>
	.recommend {
		padding: 60rpx;
	}
	
	.title {
		padding: 0 0 15rpx 40rpx;
	}
	
	.recommend-item {
		display: flex;
		flex-direction: column;
		border-radius: 40rpx;
		border: 2rpx solid #ccc;
		overflow: hidden;
		margin: 20rpx 0;
	}
	
	.recommend-bg {
		border-radius: 25rpx;
	}
	
	.user-info-box{
	  height: 110rpx;
	  display: flex;
	  align-items:center;
	  position:relative;
	  z-index: 1;
	}
	
	.portrait{
	  width: 70rpx;
	  height: 70rpx;
	  border:3rpx solid #d45235;
	  border-radius: 50%;
	  margin-left: 30rpx;
	}
	
	.username{
	  font-size: 30rpx;
	  color: #303133;
	  margin-left: 20rpx;
	}
	
	.iconfont {
		color: #636e72;
		position: absolute;
		right: 50rpx;
		top: 28rpx;
	}
	
	.text {
		/* border: 2rpx solid #000; */
		width: 85%;
		margin: 15rpx 50rpx;
		color: #576574;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: 34rpx;
		text-indent: 68rpx;
	}
	
</style>