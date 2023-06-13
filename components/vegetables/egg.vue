<template>
	<view class="content">
		<view class="list">
			<!-- <image class="title" src="../../../static/vegetables/肉类/title.png" mode=""></image> -->
			<view class="title">蛋制品类</view>
			<view class="item-list-left">
				<view class="left-text">
					<view class="left-content">
						<image class="left-img" src="../../static/vegetables/egg/egg.png" mode=""></image>
						<text class="left-name">鸡蛋</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../static/vegetables/egg/cake.png" mode=""></image>
						<text class="left-name">蛋糕</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../static/vegetables/egg/Duck-egg.png" mode=""></image>
						<text class="left-name">鸭蛋</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../static/vegetables/egg/Pine-egg.png" mode=""></image>
						<text class="left-name">松花蛋</text>
					</view>
				</view>
			</view>
			<view class="item-list-middle">
				<view class="left-text">
					<view class="left-content">
						<image class="left-img" src="../../static/vegetables/egg/Goose-egg.png" mode=""></image>
						<text class="left-name">鹅蛋	</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../static/vegetables/egg/Pigeon-egg.png" mode=""></image>
						<text class="left-name">鸽蛋</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../static/vegetables/egg/Quail-eggs.png" mode=""></image>
						<text class="left-name">鹌鹑蛋</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../static/vegetables/egg/Salted-egg.png" mode=""></image>
						<text class="left-name">咸蛋</text>
					</view>
				</view>
			</view>
			<view class="item-list-right">
				<view class="left-text">
					<view class="left-content">
						<image class="left-img" src="../../static/vegetables/egg/Grooved-egg.png" mode=""></image>
						<text class="left-name">槽蛋</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../static/vegetables/egg/Marinated-Egg.png" mode=""></image>
						<text class="left-name">卤蛋</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../static/vegetables/egg/Tiger-skin-egg.png" mode=""></image>
						<text class="left-name">虎皮蛋</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../static/vegetables/egg/Frozen-whole-egg.png" mode=""></image>
						<text class="left-name">冰全蛋</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		// props: {
		// 	dataList:Array,
		// },
		data() {
			return {
				
			}
		},
		methods: {
			
		}
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
		width: 180rpx;
		text-align: center;
		padding-bottom: 60rpx;
	}
	
	.left-img {
		width: 180rpx;
		height: 180rpx;
		padding-top: 10rpx;
	}
	
	.left-name {
		font: 32rpx;
		text-align: center;
	}
</style>
