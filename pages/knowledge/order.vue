<template>
	<view class="content">
		<view class="list">
			<view class="item-list">
				<view class="item-card">
					<image class="item-img" src="../../static/Generate-a-recipe/111/111.png" mode=""></image>
					<view class="user-box">
						<view class="user">
							<image class="user-img" src="../../static/user/user_one.jpg" mode=""></image>
							<text class="user-name">不过六级不改名字</text>
						</view>
					</view>
				</view>
				
				<view class="item-card">
					<image class="item-img" src="../../static/Generate-a-recipe/222/RT%P]_WFMZ8N9_5}18[$~4S.png" mode=""></image>
					<view class="user-box">
						<view class="user">
							<image class="user-img" src="../../static/user/user_four.jpg" mode=""></image>
							<text class="user-name">你好鸭</text>
						</view>
					</view>
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
		
	}
	
	.item-list {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.item-card {
		width: 45%;
		padding: 5rpx 5rpx;
		margin: 5rpx 10rpx;
		border: 2rpx solid #bbbbbb;
		border-radius: 40rpx;
	}
	
	.item-img {
		width: 100%;
		border-radius: 40rpx;
	}
	
	.user-img {
		width: 70rpx;
		height: 70rpx;
		border-radius: 50%;
	}
	
	.user-name {
		font-size: 28rpx;
		position: relative;
		left: 10rpx;
		bottom: 15rpx;
	}
	
</style>
