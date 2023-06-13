<template>
	<view class="content">
		<view class="list">
			<!-- <image class="title" src="../../../static/vegetables/肉类/title.png" mode=""></image> -->
			<view class="title">肉类</view>
			<view class="item-list-left">
				<view class="left-text">
					<view class="type">畜肉类</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/meat/beef.png" mode=""></image>
						<text class="left-name">牛肉</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/meat/mutton.png" mode=""></image>
						<text class="left-name">羊肉</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/meat/pork.png" mode=""></image>
						<text class="left-name">猪肉</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/meat/bacon.png" mode=""></image>
						<text class="left-name">腊肉</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/meat/steak.png" mode=""></image>
						<text class="left-name">肉排</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/meat/Meatloaf.png" mode=""></image>
						<text class="left-name">肉卷</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/meat/donkey_meat.png" mode=""></image>
						<text class="left-name">驴肉</text>
					</view>
				</view>
			</view>
			<view class="item-list-middle">
				<view class="left-text">
					<view class="type">禽肉类</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/meat/duck.png" mode=""></image>
						<text class="left-name">鸭肉</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/meat/goose.png" mode=""></image>
						<text class="left-name">鹅肉</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/meat/chicken.png" mode=""></image>
						<text class="left-name">鸡肉</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/meat/chilled_meat.png" mode=""></image>
						<text class="left-name">冷鲜肉</text>
					</view>
				</view>
			</view>
			<view class="item-list-right">
				<view class="left-text">
					<view class="type">其他类类</view>
					<view class="left-content">
						<image class="left-img" src="../../.././static/vegetables/meat/ham.png" mode=""></image>
						<text class="left-name">火腿肠</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/meat/Frozen_food.png" mode=""></image>
						<text class="left-name">速冻肉</text>
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
