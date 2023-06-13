<template>
	<view class="content">
		<view class="list">
			<!-- <image class="title" src="../../../static/vegetables/肉类/title.png" mode=""></image> -->
			<view class="title">食用菌类</view>
			<view class="item-list-left">
				<view class="left-text">
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/fungi/fungus.png" mode=""></image>
						<text class="left-name">木耳</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/fungi/porcini.png" mode=""></image>
						<text class="left-name">牛肝菌</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/fungi/mushroom.png" mode=""></image>
						<text class="left-name">蘑菇</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/fungi/tremella.png" mode=""></image>
						<text class="left-name">银耳</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/fungi/morchella.png" mode=""></image>
						<text class="left-name">羊肚菌</text>
					</view>
					</view>
				</view>
				<view class="item-list-middle">
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/fungi/mushroom1.png" mode=""></image>
						<text class="left-name">香菇</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/fungi/Grass-worm.png" mode=""></image>
						<text class="left-name">草虫</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/fungi/Grass-worm1.png" mode=""></image>
						<text class="left-name">草菇</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/fungi/Red-mushroom.png" mode=""></image>
						<text class="left-name">红蘑</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/fungi/Enoki-mushroom.png" mode=""></image>
						<text class="left-name">金针菇</text>
					</view>
					</view>
				</view>
				<view class="item-list-right">
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/fungi/White-mushroom.png" mode=""></image>
						<text class="left-name">白蘑菇</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/fungi/Lucidum-lucidum.png" mode=""></image>
						<text class="left-name">灵芝</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/fungi/Ericius-erinaceus.png" mode=""></image>
						<text class="left-name">猴头菇</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/fungi/Matsutake-mushroom.png" mode=""></image>
						<text class="left-name">松茸</text>
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
