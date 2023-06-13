<template>
	
	<swiper  :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :effect3d="true">
		<swiper-item v-for="(item, index) in dataList" :key='index'>
			<view class="swiper-item">
				<image class="swiper-item-pic" :src="item.imgUrl" mode=""></image>
			</view>
		</swiper-item>
	</swiper>
		
</template>

<script>
	export default {
		props: {
			dataList:Array
		},
		data() {
			return {
				
			}
		},
		onLoad() {
			
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	
	swiper {
		width: 100%;
		height: 496rpx;
		position: relative;
		/* border: 2rpx solid #000; */
	}
	
	.swiper-item-pic {
		width: 95%;
		height: 430rpx;
		margin: 10rpx 30rpx;
		border-radius: 25rpx;
		position: absolute;
		left: -8rpx;
		top: 50rpx;
	}
	
</style>