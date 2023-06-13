<template>
	<view class="content">
		<view class="list">
			<!-- <image class="title" src="../../../static/vegetables/肉类/title.png" mode=""></image> -->
			<view class="title">茎菜类</view>
			<view class="item-list-left">
				<view class="left-text">
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/stem/cudgel.png" mode=""></image>
						<text class="left-name">抱子芥</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/stem/potato.png" mode=""></image>
						<text class="left-name">马铃薯</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/stem/aniseed.png" mode=""></image>
						<text class="left-name">茴香菜</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/stem/lettuce.png" mode=""></image>
						<text class="left-name">莴笋</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/stem/amaranth.png" mode=""></image>
						<text class="left-name">霉苋梗</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/stem/kohlrabi.png" mode=""></image>
						<text class="left-name">苤蓝</text>
					</view>
				</view>
			</view>
			<view class="item-list-middle">
				<view class="left-content">
					<image class="left-img" src="../../../static/vegetables/stem/asparagus.png" mode=""></image>
					<text class="left-name">龙须菜</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../../../static/vegetables/stem/Manna-seed.png" mode=""></image>
					<text class="left-name">甘露子</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../../../static/vegetables/stem/Bamboo-shoot.png" mode=""></image>
					<text class="left-name">茭白</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../../../static/vegetables/stem/Chinese-toon.png" mode=""></image>
					<text class="left-name">香椿</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../../../static/vegetables/stem/Garlic-shoots.png" mode=""></image>
					<text class="left-name">蒜苗</text>
				</view>
			</view>
			<view class="item-list-right">
				<view class="left-content">
					<image class="left-img" src="../../../static/vegetables/stem/sister-in-law.png" mode=""></image>
					<text class="left-name">慈姑</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../../../static/vegetables/stem/Vegetable-moss.png" mode=""></image>
					<text class="left-name">菜苔</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../../../static/vegetables/stem/Water-chestnut.png" mode=""></image>
					<text class="left-name">荸荠</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../../../static/vegetables/stem/Asparagus-cress.png" mode=""></image>
					<text class="left-name">大笋芥蓝</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../../../static/vegetables/stem/Winter-bamboo-shoot.png" mode=""></image>
					<text class="left-name">冬笋</text>
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
