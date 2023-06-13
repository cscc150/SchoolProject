<template>
	<view class="my-path-list">
		<view class="path-list">
			<view class="path-item" v-for='(item, iindex) in list' :key='index'>
				<view class="item-main">
					<view class="item-name">{{item.name}}</view>
					<view class="">{{item.tel}}</view>
				</view>
				<view class="item-main">
					<view class="active" v-if="item.isDefault">默认</view>
					<view class="">{{item.city}} {{item.details}}</view>
				</view>
			</view>
		</view>
		
		<view class="add-path">
			<view class="add-path-btn" @tap="goAddPath">新增地址</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from "vuex"
	export default {
		data() {
			return {
				
			}
		},
		computed: {
			...mapState({
				list:state=>state.path.list
			})
		},
		methods: {
			goAddPath() {
				uni.navigateTo({
					url:"add-path/add-path"
				})
			}
		}
	}
</script>

<style scoped>
	
	.path-list {
		padding: 20rpx;
	}
	
	.path-item {
		padding: 10rpx;
		border: 2rpx solid #ccc;
	}
	
	.item-main {
		display: flex;
		align-items: center;
	}
	
	.item-name {
		padding-right: 10rpx;
	}
	
	.active {
		padding-right: 10rpx;
		background-color: aqua;
		color: #000;
		border-radius: 20rpx;
		font-size: 24rpx;
		text-align: center;
	}
	
	.add-path {
		padding: 20rpx 0;
		width: 100%;
		display: flex;
		justify-content: center;
	}
	
	.add-path-btn {
		border: 2rpx solid #000;
		color: antiquewhite;
		border-radius: 30rpx;
		padding: 6rpx 60rpx;
	}
</style>
