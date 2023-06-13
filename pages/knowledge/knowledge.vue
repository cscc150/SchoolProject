<template>
	<view class="content">
		<view class="uni-form-item" @tap="toSearch">
			<input class="search-imput" confirm-type="search" placeholder="搜索食材" />
			<view class="search-icon iconfont icon-fangdajing"></view>
		</view>
		
		<view class="item-list">
			<!-- <view class="right-content" >
				<view class="list-item" v-for="(item , index) in listData" :key="index" :dataList="item.id" @tap="toVegetables">
					<image class="item-img" :src="item.imgUrl" mode=""></image>
					<view class="item-name">{{item.name}}</view>
				</view>
			</view> -->
			
			<view class="right-content" >
				<view class="list-item">
					<image class="item-img" src="../../static/vegetable_icon/cabbage.png" mode="" @tap="tocabbage"></image>
					<view class="item-name">叶菜类</view>
				</view>
				<view class="list-item">
					<image class="item-img" src="../../static/vegetable_icon/carrot.png" mode="" @tap="tocarrot"></image>
					<view class="item-name">根菜类</view>
				</view>
				<view class="list-item">
					<image class="item-img" src="../../static/vegetable_icon/scallion.png" mode="" @tap="toscallion"></image>
					<view class="item-name">茎菜类</view>
				</view>
				<view class="list-item">
					<image class="item-img" src="../../static/vegetable_icon/Broccoli.png" mode="" @tap="toBroccoli"></image>
					<view class="item-name">花菜类</view>
				</view>
				<view class="list-item">
					<image class="item-img" src="../../static/vegetable_icon/tomato.png" mode="" @tap="totomato"></image>
					<view class="item-name">果蔬类</view>
				</view>
				<view class="list-item">
					<image class="item-img" src="../../static/vegetable_icon/shrimp.png" mode="" @tap="toshrimp"></image>
					<view class="item-name">海鲜类</view>
				</view>
				<view class="list-item">
					<image class="item-img" src="../../static/vegetable_icon/egg.png" mode="" @tap="toegg"></image>
					<view class="item-name">蛋制品类</view>
				</view>
				<view class="list-item">
					<image class="item-img" src="../../static/vegetable_icon/meat.png" mode="" @tap="tomeat"></image>
					<view class="item-name">肉类</view>
				</view>
				<view class="list-item">
					<image class="item-img" src="../../static/vegetable_icon/mushroom.png" mode="" @tap="tomushroom"></image>
					<view class="item-name">菌类</view>
				</view>
			</view>
		</view>
		
		<ShoppingCar></ShoppingCar>
				
	</view>
</template>

<script>
	import ShoppingCar from "@/components/common/ShoppingCar"
	import $http from "@/commen/api/request.js";
	export default {
		data() {
			return {
				listData: [],
			}
		},
		onLoad() {
			this.getData();
		},
		methods: {
			toSearch () {
				uni.navigateTo({
					url:"./search"
				})
			},
			// toVegetables () {
			// 	uni.navigateTo({
			// 		url:"./vegetables"
			// 	})
			// },
			
			
			tocabbage () {
				uni.navigateTo({
					url:"vegetables/cabbage"
				})
			},
			tocarrot () {
				uni.navigateTo({
					url:"./vegetables/carrot"
				})
			},
			toscallion () {
				uni.navigateTo({
					url:"./vegetables/scallion"
				})
			},
			toBroccoli () {
				uni.navigateTo({
					url:"./vegetables/Broccoli"
				})
			},
			totomato () {
				uni.navigateTo({
					url:"./vegetables/tomato"
				})
			},
			toshrimp () {
				uni.navigateTo({
					url:"./vegetables/shrimp"
				})
			},
			toegg () {
				uni.navigateTo({
					url:"./vegetables/egg"
				})
			},
			tomeat () {
				uni.navigateTo({
					url:"./vegetables/meat"
				})
			},
			tomushroom () {
				uni.navigateTo({
					url:"./vegetables/mushroom"
				})
			},
			
			
			
			getData () {
				$http.request({
					url:"/cooking/list" 
				}).then((res)=>{
					this.listData = res
				}).catch(()=>{
					uni.showToadt({
						title:'请求失败',
						icon:'none'
					})
				})
			},
			// toggle(type) {
			// 	this.type = type;
			// 	this.$refs['popup'].open();
			// },
			// change(e) {
			// 	uni.showToast({
			// 		// title:'popup: ' + e.type + ' ,状态:'+e.show,
			// 		// title:'已选中的蔬菜',
			// 		// icon:'none'
			// 	})
			// }
		},
		components: {
			ShoppingCar
		}
	}
</script>

<style lang="scss">
	.uni-form-item {
		border: 4rpx solid #000;
		border-radius: 40rpx;
		width: 80%;
		height: 60rpx;
		margin: 80rpx auto;
	}
	
	.search-imput {
		text-align: center;
		margin: 0 25rpx;
		width: 100%;
		height: 85%;
		
	}
	
	.search-icon {
		font-size: 45rpx;
		margin-right: 15rpx;
	}
	
	.item-list {
		margin-top: 100rpx;
		margin-left: 65rpx;
	}
	
	.right-content {
		display: flex;
		flex-wrap: wrap;
	}
	
	.list-item {
		margin: 30rpx 40rpx;
		transition: all .2s ease-out; 
	}
	
	.item-img {
		/* background-image: linear-gradient(to left top, #ece9e6, #ffffff); */
		background-color: #fff;
		width: 130rpx;
		height: 130rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 40rpx;
		box-shadow: 18rpx 18rpx 30rpx rgba(0, 0, 0, 0.2),
					-18rpx -18rpx 30rpx rgba(255, 255, 255, 1);
		transition: all .2s ease-out; 
	}
	
	.item-img:hover {
		cursor: pointer;
		box-shadow: 0 0 0 rgba(0, 0, 0, 0.2),
					0 0 0 rgba(255, 255, 255, 0.8),
					inset 18rpx 18rpx 30rpx rgba(0, 0, 0, 0.1),
					inset -18rpx -18rpx 30rpx rgba(255, 255, 255, 1);
	}
	
	.item-name {
		padding: 10rpx 0; 
		text-align: center;
		font-size: 28rpx;
	}

</style>