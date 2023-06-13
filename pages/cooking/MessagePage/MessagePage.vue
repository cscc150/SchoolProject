<template>
	<view class="content">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image class="swiper-item-pic" src="../../../static/generate/braised_pork/banner01.jpg" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="swiper-item-pic" src="../../../static/generate/braised_pork/banner02.jpg" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="swiper-item-pic" src="../../../static/generate/braised_pork/banner03.jpg" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="swiper-item-pic" src="../../../static/generate/braised_pork/banner04.jpg" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="swiper-item-pic" src="../../../static/generate/braised_pork/banner05.jpg" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="swiper-item-pic" src="../../../static/generate/braised_pork/banner06.jpg" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="swiper-item-pic" src="../../../static/generate/braised_pork/banner07.jpg" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		
		
		<view class="item-content">
			<view class="user">
				<view class="user-img">
					<image class="img" src="../../../static/user/user_two.jpg" mode=""></image>
				</view>
				<text class="user-name">李吃不胖</text>
			</view>
			<view class="message">
				<text>下饭之神一口肉一口米饭回味无穷🖤</text><br>
				<text>食材：五花肉葱姜蒜冰糖八角桂皮</text><br>
				<text>做法：</text><br>
				<text style="text-indent: 60rpx;">五花肉放料酒、葱姜焯水，反复冲洗干净沥水，倒入锅里煸炒出油（锅里不用放油）盛出备用</text><br>
				<text style="text-indent: 60rpx;">锅里少油放入冰糖，小火炒出糖色倒入五花肉上色，一勺料酒、三勺生抽、一勺蚝油、半勺老抽（喜欢颜色鲜艳的就放半勺，喜欢颜色深一点可以放整一勺)，翻炒均匀加入开水漫过食材，加入葱姜蒜、八角桂皮，小火炖50分钟左右，最后收汁即可</text><br>
				<text>小贴士（炒糖色跟收汁很重要哦炒糖色的时候一定要小火冰糖溶化成液体以后再倒入肉收汁的时候记得翻炒一下不然容易糊哦)</text>
			</view>
		</view>
		
		<view class="botton-box">
			<input class="userinput" type="text" placeholder="善语结善缘">
			<view class="three">
				<text class="like iconfont icon-xihuan">666</text>
				<text class="like iconfont icon-xihuan">666</text>
				<text class="like iconfont icon-xihuan">86</text>
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

<style scoped>

	swiper {
		width: 100%;
		height: 830rpx;
	}
	
	.swiper-item-pic {
		width: 100%;
		height: 830rpx;
	}
	
	.user-img {
		margin: 20rpx;
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		border: 2rpx solid #bbbbbb;
	}
	
	.img {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
	}
	
	.user-name {
		/* border: 2rpx solid #bbbbbb; */
		position: absolute;
		left: 140rpx;
		bottom: 560rpx;
	}
	
	.message {
		margin: 40rpx 20rpx;
		font-size: 30rpx;
	}
	
	.botton-box {
		position: relative;
		background-color: #f8f8f8;
		padding: 20rpx;
	}
	
	.userinput {
		border: 2rpx solid #bbbbbb;
		background-color: #fff;
		font-size: 28rpx;
		width: 35%;
		height: 60rpx;
		text-align: center;
		border-radius: 40rpx;
		margin: 20rpx 40rpx;
		padding: 0 20rpx;
	}
	
	.three {
		position: absolute;
		left: 400rpx;
		bottom: 45rpx;
	}
	
	.like {
		margin: 0 15rpx;
		font-size: 33rpx;
	}

</style>
