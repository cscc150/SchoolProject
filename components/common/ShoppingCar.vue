<template>
	<view>
		<view class="window-img" type="primary" @click="toggle('bottom')">
			<image class="img-pic" src="../../static/logo.png" mode=""></image>
		</view>
			<uni-popup ref="popup" :type="type" :animation="true" :maskClick="true" >
				
				<view class="popup-box" >
					
					<!-- 标题小点 -->
					<view class="box-title"></view>
					
					<!--  -->
					<view class="main">
						<view class="order-item" 
							  v-for="(item, index) in csListArrl" 
							  :key="index" 
							  :data-index="index" 
							  @touchstart="drawStart" 
							  @touchmove="drawMove" 
							  @touchend="drawEnd" 
							  :style="'right:'+item.right+'px'"
						>
							<view class="box-item">
								<image class="box-img" :src="item.imgUrl" mode=""></image>
								<text class="box-name">{{item.name}}</text>
							</view>
							<view class="remove" @click="delData(item)">删 除</view>
						</view>
						
					</view>
					
					<view class="synthesis" @tap="toOrder">合成</view>
				</view>
				
			</uni-popup>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 'bottom',
				//列表数据
				csListArrl: [
					{
						imgUrl: "../../static/vegetables/root/potato.png",
						name: '土豆',
						right: 0
					},
					{
						imgUrl: "../../static/vegetables/meat/ham.png",
						name: '火腿',
						right: 0
					},
				],
				//左滑默认宽度
				delBtnWidth: 80
			}
		},
		onLoad() {
			
		},
		methods: {
			toOrder () {
				uni.navigateTo({
					url:"./order"
				})
			},
			toggle(type) {
				this.type = type;
				this.$refs['popup'].open();
			},
			// change(e) {
			// 	uni.showToast({
			// 		// title:'popup: ' + e.type + ' ,状态:'+e.show,
			// 		// title:'已选中的蔬菜',
			// 		// icon:'none'
			// 	})
			// }
			//开始触摸滑动
			drawStart(e) {
				console.log("开始触发");
				var touch = e.touches[0];
				this.startX = touch.clientX;
			},
			//触摸滑动
			drawMove(e) {
				console.log("滑动");
				for (var index in this.csListArrl) {
					this.$set(this.csListArrl[index], 'right', 0);
				}
				var touch = e.touches[0];
				var item = this.csListArrl[e.currentTarget.dataset.index];
				var disX = this.startX - touch.clientX;
				if (disX >= 20) {
					if (disX > this.delBtnWidth) {
						disX = this.delBtnWidth;
					}
					this.$set(this.csListArrl[e.currentTarget.dataset.index], 'right', disX);
				} else {
					this.$set(this.csListArrl[e.currentTarget.dataset.index], 'right', 0);
				}
			},
			//触摸滑动结束
			drawEnd(e) {
				console.log("滑动结束");
				var item = this.csListArrl[e.currentTarget.dataset.index];
				if (item.right >= this.delBtnWidth / 2) {
					this.$set(this.csListArrl[e.currentTarget.dataset.index], 'right', this.delBtnWidth);
				} else {
					this.$set(this.csListArrl[e.currentTarget.dataset.index], 'right', 0);
				}
			},
			//删除方法
			delData(item) {
				console.log("删除")
				uni.showModal({
					title: '提示',
					content: "确认删除此蔬菜吗？",
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		}
	}
</script>

<style scoped>
	
	.img-pic {
		position: fixed;
		right: 20rpx;
		bottom: 130rpx;
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
	}
	
	.popup-box {
		background-color: #fff;
		padding: 30rpx 0;
		border-radius: 50rpx 50rpx 0 0;
		// border: 2rpx solid #000;
	}
	
	.box-title {
		background-color: #b8b8b8;
		width: 48rpx;
		height: 12rpx;
		border-radius: 40rpx;
		margin:0 350rpx 30rpx;
		border: 1rpx solid #b8b8b8;
	}
	
	.box-img {
		width: 140rpx;
		height: 100rpx;
		margin: 0 40rpx;
	}
	
	.box-name {
		position: relative;
		bottom: 30rpx;
		font-size: 32rpx;
	}
	
	.synthesis {
		background-color: rgba(211, 0, 0, .5);
		width: 40%;
		border-radius: 55rpx;
		margin: 0 auto;
		line-height: 70rpx;
		color: #000;
		text-align: center;
	}
	
	
	.main {
		width: 100%;
		height: auto;
		margin: 10rpx auto;
		overflow: hidden
	}
	
	.order-item {
		width: 100%;
		display: flex;
		position: relative;
		margin: 15rpx 0;
		align-items: right;
		flex-direction: row;
	}
	
	.box-item {
		width: 100%;
		height: 130rpx;
		margin: 0 auto;
		border: 1rpx solid #b8b8b8;
		line-height: 200rpx;
		text-align: center;
	}
	
	.remove {
		margin-left: -5%;
		width: 160rpx;
		height: 100%;
		background-color: rgba(211, 0, 0, .5);
		color: #FFFFFF;
		position: absolute;
		top: 0;
		right: -160rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 32rpx;
	}
	
	/* // .edit {
	// 	width: 160rpx;
	// 	height: 100%;
	// 	background-color: green;
	// 	color: white;
	// 	position: absolute;
	// 	top: 0;
	// 	right: -320rpx;
	// 	display: flex;
	// 	justify-content: center;
	// 	align-items: center;
	// 	font-size: 32rpx;
	// } */
</style>