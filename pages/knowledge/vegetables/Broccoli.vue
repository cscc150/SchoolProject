<template>
	<view class="content">
		<view class="list">
			<!-- <image class="title" src="../../../static/vegetables/肉类/title.png" mode=""></image> -->
			<view class="title">花菜类</view>
			<view class="item-list-left">
				<view class="left-text">
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/florescent/kale.png" mode=""></image>
						<text class="left-name">羽衣甘蓝</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/florescent/laver.png" mode=""></image>
						<text class="left-name">甜菜</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/florescent/neroli.png" mode=""></image>
						<text class="left-name">紫花菜</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/florescent/daylily.png" mode=""></image>
						<text class="left-name">橙花菜</text>
					</view>
				</view>
			</view>
			<view class="item-list-middle">
				<view class="left-text">
				<view class="left-content">
					<image class="left-img" src="../../../static/vegetables/florescent/broccoli.png" mode=""></image>
					<text class="left-name">青花菜</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../../../static/vegetables/florescent/scallion.png" mode=""></image>
					<text class="left-name">花葱</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../../../static/vegetables/florescent/artichoke.png" mode=""></image>
					<text class="left-name">朝鲜蓟</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../../../static/vegetables/florescent/broccoli2.png" mode=""></image>
					<text class="left-name">西兰花</text>
				</view>
				</view>
			</view>
			<view class="item-list-right">
				<view class="left-text">
				<view class="left-content">
					<image class="left-img" src="../../../static/vegetables/florescent/Prickly-ash.png" mode=""></image>
					<text class="left-name">花椒</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../../../static/vegetables/florescent/cauliflower.png" mode=""></image>
					<text class="left-name">花椰菜</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../../../static/vegetables/florescent/Seaweed-vine.png" mode=""></image>
					<text class="left-name">紫菜蔓</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../../../static/vegetables/florescent/Pine-flower-with-white-noodles-and-green-stems.png" mode=""></image>
					<text class="left-name">白面青梗松花菜</text>
				</view>
				</view>
			</view>
		</view>
		<ShoppingCar></ShoppingCar>
		
	</view>
</template>

<script>
	import ShoppingCar from "@/components/common/ShoppingCar"
	export default {
		// props () {
		// 	dataList:Array
		// },
		data() {
			return {
				
			}
		},
		onLoad() {
		},
		methods: {
			
		},
	}
</script>

<style>
	.list {
		display: flex;
	}
	
	.title {
		font-size: 50rpx;
		font-family: "站酷快乐体";
		margin: 60rpx 40rpx;
	}
	
	.item-list-left {
		background-color: rgba(189, 49, 36, 0.1);
		width: 200rpx;
		position: absolute;
		left: 70rpx;
		top: 200rpx;
	}
	
	.item-list-middle {
		width: 200rpx;
		position: absolute;
		top: 100rpx;
		left: 300rpx;
		background-color: rgba(189, 49, 36, 0.1);
	}
	
	.item-list-right {
		width: 200rpx;
		position: absolute;
		top: 50rpx;
		right: 15rpx;
		background-color: rgba(189, 49, 36, 0.1);
	}
	
	.left-text {
		width: 200rpx;
	}
	
	.type {
		font-size: 38rpx;
		color: #cb645b;
		margin-bottom: 30rpx;
	}
	
	.left-content {
		text-align: center;
		padding-bottom: 60rpx;
	}
	
	.left-img {
		width: 180rpx;
		height: 180rpx;
	}
	
	.left-name {
		font: 32rpx;
		text-align: center;
	}
	
	
	/* 图标 */
	.img-pic {
		position: fixed;
		right: 20rpx;
		bottom: 130rpx;
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
	}
</style>
