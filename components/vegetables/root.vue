<template>
	<view class="content">
		<view class="list">
			<!-- <image class="title" src="../../../static/vegetables/肉类/title.png" mode=""></image> -->
			<view class="title">根菜类</view>
			<view class="item-list-left">
				<view class="left-text">
					<view class="left-content">
						<image class="left-img" src="../.././static/vegetables/root/beet.png" mode=""></image>
						<text class="left-name">甜菜</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../.././static/vegetables/root/taro.png" mode=""></image>
						<text class="left-name">芋头</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../.././static/vegetables/root/onion.png" mode=""></image>
						<text class="left-name">洋葱</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../.././static/vegetables/root/carrot.png" mode=""></image>
						<text class="left-name">胡萝卜</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../.././static/vegetables/root/garlic.png" mode=""></image>
						<text class="left-name">大蒜</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../.././static/vegetables/root/ginger.png" mode=""></image>
						<text class="left-name">姜</text>
					</view>
				</view>
			</view>
			<view class="item-list-middle">
				<view class="left-content">
					<image class="left-img" src="../.././static/vegetables/root/potato.png" mode=""></image>
					<text class="left-name">土豆</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../.././static/vegetables/root/turnip.png" mode=""></image>
					<text class="left-name">芜青</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../.././static/vegetables/root/burdock.png" mode=""></image>
					<text class="left-name">牛蒡</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../.././static/vegetables/root/cabbage.png" mode=""></image>
					<text class="left-name">甘蓝</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../.././static/vegetables/root/lotus_root.png" mode=""></image>
					<text class="left-name">藕</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../.././static/vegetables/root/Chinese_yam.png" mode=""></image>
					<text class="left-name">山药</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../.././static/vegetables/root/root_mustard.png" mode=""></image>
					<text class="left-name">根芥菜</text>
				</view>
			</view>
			<view class="item-list-right">
				<view class="left-content">
					<image class="left-img" src="../.././static/vegetables/root/seaweed_head.png" mode=""></image>
					<text class="left-name">紫菜头</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../.././static/vegetables/root/sweet_potato.png" mode=""></image>
					<text class="left-name">红薯</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../.././static/vegetables/root/radix_asparagi.png" mode=""></image>
					<text class="left-name">天门冬</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../.././static/vegetables/root/pickled_cabbage.png" mode=""></image>
					<text class="left-name">雪菜</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../.././static/vegetables/root/black_brahmin_ginseng.png" mode=""></image>
					<text class="left-name">黑罗婆门</text>
				</view>
				<view class="left-content">
					<image class="left-img" src="../.././static/vegetables/root/konjak.png" mode=""></image>
					<text class="left-name">魔芋</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
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
		text-align: center;
		padding-bottom: 60rpx;
	}
	
	.left-img {
		width: 180rpx;
		height: 180rpx;
		padding: 10rpx 0;
	}
	
	.left-name {
		font: 32rpx;
		text-align: center;
	}
</style>
