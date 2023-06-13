<template>
	<view class="personalContainer">
		<view class="user-section">
			<image class="bg" src="../../static/cooking_banner/banner05.jpg"></image>
			
			<view class="user-info-box" @tap='goLogin'>
				<view class="portrait-box" >
					<image class="portrait" src='../../static/user/user_two.jpg'></image>
				</view>
		  
				<view class="info-box" >
					<text class="username">猪猪侠</text>
				</view>
			</view>
	
			<view class="vip-card-box">
				<image class="card-bg" src="../../static/cooking_banner/banner03.jpg" mode=""></image>
				<view class="b-btn">开通</view>
				<view class="tit">
					<!-- 会员图标-->
					<text class="iconfont icon-huizhanghuiyuan"></text>
					会员专属
				</view>
				<text class="e-m">肴香</text>
				<text class="e-b">简香肴为您提供健康饮食</text>
			</view>
		</view>
	
	
		<view 
			class="cover-container"
			bindtouchstart="handleTouchStart"
			bindtouchmove="handleTouchMove"
			bindtouchend="handleTouchEnd"
			
		>
			<image class="arc" src="../../static/home_icn/arc.png"></image>
			<!-- 个人中心导航 -->
			<view class="nav-section">
				<view class="nav-item"  hover-class="common-hover"  hover-stay-time="50" @tap="goFriend">
					<text class="iconfont icon-xihuan"></text>
					<text>好友</text>
				</view>
				<view class="nav-item"   hover-class="common-hover" hover-stay-time="50" @tap="goHistory">
					<text class="iconfont icon-lishi"></text>
					<text>历史</text>
				</view>
				<view class="nav-item"  hover-class="common-hover"  hover-stay-time="50" @tap="goCook">
					<text class="iconfont icon-airudiantubiaohuizhi-zhuanqu_meishicaipu"></text>
					<text>菜谱</text>
				</view>
				<view class="nav-item" hover-class="common-hover"  hover-stay-time="50" @tap="goConfig">
					<text class="iconfont icon-shezhi"></text>
					<text>设置</text>
				</view>
			</view>
	
			<!-- 个人中心列表 -->
			<view class="personalContent">
				<view class="cardList">
					<view class="card-item" @tap="goMycollect">
						<text class="title">我的收藏</text>
						<text class="more"> > </text>
					</view>
					<view class="card-item" @tap="goMyOrder">
						<text class="title">我的订单</text>
						<text class="more"> > </text>
					</view>
					<view class="card-item" @tap="goMyScore">
						<text class="title">我的积分</text>
						<text class="more"> > </text>
					</view>
					<view class="card-item" @tap="goConnection">
						<text class="title">联系客服</text>
						<text class="more"> > </text>
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
			goLogin() {
				uni.navigateTo({
					url:"../login/login"
				})
			},
			goFriend() {
				uni.navigateTo({
					url:"friend/friend"
				})
			},
			goHistory() {
				uni.navigateTo({
					url:"history/history"
				})
			},
			goCook() {
				uni.navigateTo({
					url:"cook/cook"
				})
			},
			goConfig() {
				uni.navigateTo({
					url:"config/config"
				})
			},
			goMycollect () {
				uni.navigateTo({
					url:"myCollect/myCollect"
				})
			},
			goMyOrder () {
				uni.navigateTo({
					url:"myOrder/myOrder"
				})
			},
			goMyScore () {
				uni.navigateTo({
					url:"myScore/myScore"
				})
			},
			goConnection () {
				uni.navigateTo({
					url:"connection/connection"
				})
			}
		},
	}
</script>

<style lang="scss">
	
	.personalContainer {
	  width: 100%;
	  height: 100%;
	  
	}
	
	.personalContainer .user-section {
	  height: 520rpx;
	  position: relative;
	  padding: 200rpx 30rpx 0;
	}
	.user-section .bg {
	  position: absolute;
	  left: 0;
	  top: 0;
	  width: 100%;
	  height: 100%;
	  opacity: 0.7;
	  filter: blur(1px);
	}
	
	.user-info-box{
	  height: 180rpx;
	  display:flex;
	  align-items:center;
	  position:relative;
	  z-index: 1;
	}
	.user-info-box .portrait{
	  width: 130rpx;
	  height: 130rpx;
	  border:5rpx solid #d45235;
	  border-radius: 50%;
	  margin-left: 30rpx;
	}
	.user-info-box .username{
	  font-size: 36rpx;
	  color: #303133;
	  margin-left: 40rpx;
	}
	
	/* vip-box */
	.vip-card-box {
	  position: relative;
	  display: flex;
	  flex-direction: column;
	  background: linear-gradient(left, red, black);
	  background: rgba(0, 0, 0, .8);
	  height: 240rpx;
	  color: #f7d680;
	  border-radius: 16rpx 16rpx 0 0;
	  padding: 24rpx 28rpx; 
	}
	
	
	.vip-card-box .card-bg{
	  position:absolute;
	  top: 20rpx;
	  right: 0;
	  width: 360rpx;
	  height: 240rpx;
	}
	
	.vip-card-box .b-btn{
	  position: absolute;
	  right: 20rpx;
	  top: 16rpx;
	  width: 132rpx;
	  height: 40rpx;
	  text-align: center;
	  line-height: 40rpx;
	  font-size: 22rpx;
	  color: #36343c;
	  border-radius: 20px;
	  background: #f9e6af;
	  z-index: 1;
	}
	
	.vip-card-box .b-btn{
	  position: absolute;
	  right: 20rpx;
	  top: 16rpx;
	  width: 132rpx;
	  height: 40rpx;
	  text-align: center;
	  line-height: 40rpx;
	  font-size: 22rpx;
	  color: #36343c;
	  border-radius: 20px;
	  background: linear-gradient(left, #f9e6af, #ffd465); /*渐变不生效*/
	  background: #f9e6af;
	  z-index: 1;
	}
	
	.vip-card-box .tit {
	  font-size: 26rpx;
	  color: #f7d680;
	  margin-bottom: 22rpx;
	}
	.vip-card-box .tit .iconfont{
	  color: #f6e5a3;
	  margin-right: 16rpx;
	}
	
	
	.vip-card-box .e-m{
	  font-size: 38rpx;
	  margin-top: 10rpx;
	}
	.vip-card-box .e-b{
	  font-size: 26rpx;
	  color: #d8cba9;
	  margin-top: 10rpx;
	  margin-left: 20rpx;
	}
	
	
	.cover-container{
	  margin-top: -80rpx;
	  padding: 0 30rpx;
	  position:relative;
	  background: #f5f5f5;
	  padding-bottom: 20rpx;
	}
	
	.cover-container .arc{
	  position:absolute;
	  left: 0;
	  top: -34rpx;
	  width: 100%;
	  height: 36rpx;
	}
	
	
	/* 导航部分 */
	.cover-container .nav-section {
	  display: flex;
	  background: #fff;
	  padding: 20rpx 0;
	  border-radius: 15rpx;
	}
	
	
	.nav-section .nav-item {
	  width: 25%;
	  box-sizing: border-box;
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	}
	
	.nav-section .nav-item .iconfont {
	  font-size: 50rpx;
	  color: #d43c33;
	  line-height: 70rpx;
	}
	
	.nav-section .nav-item text:last-child {
	  font-size: 22rpx;
	}
	
	
	/* 个人中心列表 */
	.personalContent {
	  background: #fff;
	  margin-top: 20rpx;
	}
	
	.cardList {
	  margin-top: 20rpx;
	
	}
	.cardList .card-item{
	  border-top: 20rpx solid #f5f5f5;
	  height: 100rpx;
	  line-height: 80rpx;
	  padding: 10rpx;
	  font-size: 28rpx;
	  color: #333;
	}
	.cardList .card-item .more {
	  float: right;
	}
	
</style>