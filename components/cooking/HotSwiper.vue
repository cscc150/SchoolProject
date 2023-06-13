<template>
	<view class="container">
		
		<!-- 搜索 -->
		<view class="title">食物热量库</view>
		<view class="search-box">
			<input class="userinput" type="text" placeholder="想要查看的食物热量">
			<view class="search-icon iconfont icon-fangdajing"></view>
		</view>

		<!-- 滑块轮播 -->
		<view class="hot-swiper">
			<view class="swiper-item">
				<scroll-view scroll-x="true" class="scroll-content">
					<view class="scroll-item"
						v-for="(item, index) in dataList"
						:key="index"
					>
						<image class="hot-img" :src="item.imgUrl" mode=""></image>
						<view class="hot-content">
							<text class="hot-name">{{item.name}}</text>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		
		<!-- 卡片 -->
		<view class="tip-content">
			<view class="title">
				<image class="item-pic" src="../../static/cooking_hot/tip.png" mode=""></image>
			</view>
			<view class="tip">
				<view class="tip-left">
					<image class="left-img" src="../../static/cooking_hot/tip_left.jpg" mode=""></image>
					<image class="right-img" src="../../static/cooking_hot/tip_right.png" mode=""></image>
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
		data () {
			return {
				
			}	
		},
	}
</script>

<style>
	
	
	.title {
		margin: 40rpx;
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
		font-size: 40rpx;
	}
	
	.userinput {
		border: 4rpx solid #bbbbbb;
		width: 70%;
		height: 40rpx;
		text-align: center;
		border-radius: 40rpx;
		margin: 20rpx 70rpx;
		padding: 0 20rpx;
	}
	
	.search-icon {
		font-size: 60rpx;
		position: relative;
		left: 655rpx;
		bottom: 85rpx; 
	}
	
	
	.scroll-content {
		width: 100%;
		white-space: nowrap;
	}
	
	.scroll-item {
		display: inline-block;
		width: 150rpx;
		height: 150rpx;
		margin: 0 20rpx;
	}
	
	.hot-img {
		width: 100%;
		height: 150rpx;
		border-radius: 50%;
	}
	
	.hot-content {
		text-align: center;
	}
	
	.hot-name {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-border-clamp: 2;
		-webkit-box-orient: vertical;
		color: #333;
		word-break: break-all;
		padding: 3rpx 20rpx;
	}
	
	
	
	.item-pic {
		padding: 80rpx 0 0 20rpx;
		width: 490rpx;
		height: 75rpx;
	}
	
	.tip-left {
		height: 600rpx;
	}
	
	.left-img {
		width: 40%;
		height: 400rpx;
		position: absolute;
		left: 40rpx;
		bottom: 130rpx;
		border-radius: 45rpx;
	}
	
	.right-img {
		width: 40%;
		height: 400rpx;
		position: absolute;
		right: 40rpx;
		bottom: 50rpx;
		border-radius: 45rpx;
	}
</style>