<template>
	<view class="content">
		<!-- <view class="item-box" v-for="(item , index) in listData" :key="index">
			<meat v-if="item.id === 8" :dataList="item.data"></meat>
			<root></root>
		</view>
		<view class="window-img">
			<image class="img-pic" src="../../../static/logo.png" mode=""></image>
		</view> -->
		
		<view class="item" v-for="(item , index) in listData" :key="index">
			<!-- <view class="" v-if="item.id === 1">
				<leaf></leaf>
			</view> -->
			<!-- <meat></meat> -->
			<leaf v-if="item.id === 1"></leaf>
			
			<root v-else-if="item.id === 2"></root>
			
			<!-- <seafood></seafood> -->
			<!-- <fungi></fungi> -->
			<!-- <stem></stem> -->
			<!-- <florescent></florescent> -->
			<!-- <fruits></fruits> -->
			<!-- <egg></egg> -->
		</view>
		
		
		
		<ShoppingCar></ShoppingCar>
		
	</view>
</template>

<script>
	import ShoppingCar from "@/components/common/ShoppingCar"
	import $http from "@/commen/api/request.js";
	import meat from "@/components/vegetables/meat.vue"
	import root from "@/components/vegetables/root.vue"
	import leaf from "@/components/vegetables/leaf.vue"
	import seafood from "@/components/vegetables/seafood.vue"
	import fungi from "@/components/vegetables/fungi.vue"
	import stem from "@/components/vegetables/stem.vue"
	import florescent from "@/components/vegetables/florescent.vue"
	import fruits from "@/components/vegetables/fruits.vue"
	import egg from "@/components/vegetables/egg.vue"
	export default {
		// props () {
		// 	dataList:Array
		// },
		data() {
			return {
				listData: [],
			}
		},
		onLoad() {
			this.getData()
		},
		methods: {
			getData () {
				$http.request({
					url:"/cooking/list" 
				}).then((res)=>{
					this.listData = res
					console.log(listData)
				}).catch(()=>{
					uni.showToadt({
						title:'请求失败',
						icon:'none'
					})
				})
			},
		},
		components: {
			ShoppingCar,meat,root,leaf,seafood,fungi,stem,florescent,fruits,egg
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
