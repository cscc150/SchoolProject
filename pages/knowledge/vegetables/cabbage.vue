<template>
	<view class="content">
		<view class="list">
			<!-- <image class="title" src="../../../static/vegetables/肉类/title.png" mode=""></image> -->
			<view class="title">叶菜类</view>
			<view class="item-list-left">
				<view class="left-text">
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/leaf/leek.png" mode=""></image>
						<text class="left-name">韭菜</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/leaf/rape.png" mode=""></image>
						<text class="left-name">油菜</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/leaf/lettuce.png" mode=""></image>
						<text class="left-name">生菜</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/leaf/spinach.png" mode=""></image>
						<text class="left-name">菠菜</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/leaf/amaranth.png" mode=""></image>
						<text class="left-name">苋菜</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/leaf/cabbage1.png" mode=""></image>
						<text class="left-name">卷心菜</text>
					</view>
				</view>
			</view>
			<view class="item-list-middle">
				<view class="left-content">
					<image class="left-img" src="../../../static/vegetables/leaf/oleifera.png" mode=""></image>
					<text class="left-name">油麦菜</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../../../static/vegetables/leaf/auriculae.png" mode=""></image>
					<text class="left-name">木耳菜</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../../../static/vegetables/leaf/coriander.png" mode=""></image>
					<text class="left-name">香菜</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../../../static/vegetables/leaf/Cabbage_heart.png" mode=""></image>
					<text class="left-name">菜心</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../../../static/vegetables/leaf/cherry_radish.png" mode=""></image>
					<text class="left-name">樱桃萝卜</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../../../static/vegetables/leaf/water_cabbage.png" mode=""></image>
					<text class="left-name">空心菜</text>
				</view>
			</view>
			<view class="item-list-right">
				<view class="left-content">
					<image class="left-img" src="../../../static/vegetables/leaf/purple_cabbage.png" mode=""></image>
					<text class="left-name">紫甘蓝</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../../../static/vegetables/leaf/yellow_mustard.png" mode=""></image>
					<text class="left-name">黄芥菜</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../../../static/vegetables/leaf/chinese_cabbage.png" mode=""></image>
					<text class="left-name">小白菜</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../../../static/vegetables/leaf/Sweet_ potato_leaf.png" mode=""></image>
					<text class="left-name">红薯叶</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../../../static/vegetables/leaf/coronarium_chrysanthemum.png" mode=""></image>
					<text class="left-name">茼蒿菜</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../../../static/vegetables/leaf/removebg-preview.png" mode=""></image>
					<text class="left-name">芹菜</text>
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
