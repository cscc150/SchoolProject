<template>
	<view class="content">
		<!-- <view class="left-title">历史记录</view> -->
			<view class="list-title">
				<view class="title-left">历史记录</view>
					<view class="list-item">
						<view class="list-name">
							<view class="name">火腿肠</view>
						</view>
						<view class="list-name">
							<view class="name">莲藕</view>
						</view>
						<view class="list-name">
							<view class="name">黄瓜</view>
						</view>
						<view class="list-name">
							<view class="name">莴笋</view>
						</view>
						<view class="list-name">
							<view class="name">虾</view>
						</view>
					</view>
			</view>
		
		
		<ShoppingCar></ShoppingCar>
		
	</view>
</template>

<script>
	import ShoppingCar from "@/components/common/ShoppingCar"
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		components: {
			ShoppingCar
		}
	}
</script>

<style>
	
	.list-item {
		display: flex;
		flex-wrap: wrap;
	}
	
	.list-name {
		margin: 30rpx 30rpx 0;
		padding: 10rpx 50rpx;
		width: 80rpx;
		border-radius: 40rpx;
		font-size: 26rpx;
		border: 2rpx solid #bcbcbc;
	}
	
	.name {
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
