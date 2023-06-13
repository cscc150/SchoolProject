<template>
	<view class="content">
		<view class="list">
			<!-- <image class="title" src="../../../static/vegetables/肉类/title.png" mode=""></image> -->
			<view class="title">果蔬类</view>
			<view class="item-list-left">
				<view class="left-text">
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/fruits/apple.png" mode=""></image>
						<text class="left-name">苹果</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/fruits/grape.png" mode=""></image>
						<text class="left-name">葡萄</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/fruits/lemon.png" mode=""></image>
						<text class="left-name">柠檬</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/fruits/peach.png" mode=""></image>
						<text class="left-name">桃子</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/fruits/banana.png" mode=""></image>
						<text class="left-name">香蕉</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/fruits/grape2.png" mode=""></image>
						<text class="left-name">桑葚</text>
					</view>
				</view>
			</view>
			<view class="item-list-middle">
				<view class="left-text">
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/fruits/orange.png" mode=""></image>
						<text class="left-name">橙子</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/fruits/orange1.png" mode=""></image>
						<text class="left-name">橘子</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/fruits/pineapple.png" mode=""></image>
						<text class="left-name">菠萝</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/fruits/Kiwi-fruit.png" mode=""></image>
						<text class="left-name">猕猴桃</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/fruits/Star-fruit.png" mode=""></image>
						<text class="left-name">杨桃</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/fruits/Dragon-fruit.png" mode=""></image>
						<text class="left-name">火龙果</text>
					</view>
				</view>
			</view>
			<view class="item-list-right">
				<view class="left-text">
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/fruits/cantaloupe.png" mode=""></image>
						<text class="left-name">哈密瓜</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/fruits/mangosteen.png" mode=""></image>
						<text class="left-name">山竹</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/fruits/strawberry.png" mode=""></image>
						<text class="left-name">草莓</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/fruits/Red-extract.png" mode=""></image>
						<text class="left-name">红提</text>
					</view>
					<view class="left-content">
						<image class="left-img" src="../../../static/vegetables/fruits/pomegranate.png" mode=""></image>
						<text class="left-name">石榴</text>
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
