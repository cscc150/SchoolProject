<template>
	<view class="icons">
		<view class="icons-item" v-for="(item, index) in dataList" :key="index">
			<image class="icons-img" :src="item.imgUrl" mode=""></image>
			<text class="icons-text f-color">{{ item.name }}</text>
		</view>
		
		<view class="comment">
			<text>热门笔记</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			dataList:Array 
		}
	}
</script>

<style>
	.icons {
		display: flex;
		flex-wrap: wrap;
	}
	
	.icons-item {
		width: 33.33%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-top: 20rpx;
	}
	
	.icons-img {
		width: 60rpx;
		height: 60rpx;
	}
	
	.icons-text {
		margin-top: 20rpx;
		font-size: 24rpx;
	}
	
	.comment {
		margin: 40rpx 0 0; 
	}
</style>