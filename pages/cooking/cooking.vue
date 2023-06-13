<template>
	<view class="content">
		
		<!-- 顶部滑块页面 -->
		<scroll-view scroll-x="true" class="scroll-content" :scroll-into-view='scrollIntoIndex'>
			<view
				:id="'top' + index"
				class="scroll-item"
				v-for='(item, index) in topBar'
				:key='index'
				@tap="changeTap(index)"
			>	
				<text :class='tobBarIndex === index ? "f-active-color" : "f-color"'>{{ item.name }}</text>
			</view>
		</scroll-view>
		
		<!-- 中间可视区域 -->
		<swiper @change="onChangeTab" :current="tobBarIndex" :style="'height:' + clentHeight + 'px;'">
			<swiper-item
				v-for='(item, index) in newTopBar'
				:key='index'
			>
				<scroll-view scroll-y="true" :style="'height:' + clentHeight + 'px;'" >
					<block v-if="item.data.length > 0">
						<block v-for="(k, i) in item.data" :key="i">
							
							<!-- 御膳房推荐页面 -->
							<CookingSwiper v-if='k.type === "SwiperList"' :dataList='k.data'></CookingSwiper>
							<Recommend v-if='k.type === "recommendList"' :dataList='k.data'></Recommend>
							
							<!-- 御膳房广场页面 -->
							<Icons v-if='k.type === "iconsList"' :dataList='k.data'></Icons>
							<Message v-if='k.type === "messageList"' :dataList='k.data'></Message>
							
							<!-- 御膳房广场页面 -->
							<HotSwiper v-if='k.type === "hotSwiperList"' :dataList='k.data'></HotSwiper>
							
							
						</block>
					</block>
					<view v-else>暂无数据</view>
				</scroll-view>
			</swiper-item>
		</swiper>
		
	</view>
</template>

<script>
	import $http from "@/commen/api/request.js";
	import Recommend from "@/components/cooking/Recommend.vue";
	import CookingSwiper from "@/components/cooking/CookingSwiper.vue";
	import Icons from "@/components/cooking/Icons.vue";
	import Message from "@/components/cooking/Message.vue";
	import HotSwiper from "@/components/cooking/HotSwiper.vue"
	export default {
		data() {
			return {
				//选中的索引值
				tobBarIndex: 0,
				//顶栏跟随的id值
				scrollIntoIndex: "top0",
				//初始化页面高度
				clentHeight: 0,
				//顶部信息
				topBar:[],
				//承载数据
				newTopBar:[]
			}
		},
		onLoad() {
			this.__init();
		},
		onReady() {	
			//设置高度
			uni.getSystemInfo({
				success: (res) => {
					// this.clentHeight = res.windowHeight - uni.upx2px(100) - this.getClientHeight();
					this.clentHeight = res.windowHeight - uni.upx2px(100);
				}
			})
		},
		// onNavigationBarButtonTap(e) {
		// 	if(e.float == "right") {
		// 		uni.navigateTo({
		// 			url: "../search/search" 
		// 		})
		// 	}
		// },
		methods: {
			//请求首页数据
			__init() {
				$http.request({
					url:"/cooking_list/data"
				}).then((res)=>{
					this.topBar = res.topBar;
					this.newTopBar = this.initData(res);
					
				}).catch(()=>{
					uni.showToadt({
						title:'请求失败', 
						icon:'none'
					})
				})
			},
			//添加数据
			initData(res) {
				let arr = [];
				for(let i = 0; i < this.topBar.length; i++){
					let obj = {
						data:[],
						load:"first",
						// loadText:''
					}
					if(i == 0) {
						obj.data = res.data;
					}
					arr.push(obj);
				}
				return arr; 
			},
			//点击顶栏
			changeTap(index) {
				if(this.tobBarIndex === index) {
					return ;
				}
				this.tobBarIndex = index;
				this.scrollIntoIndex = "top" + index;
				
				//每一次滑动赋值为first
				if(this.newTopBar[this.tobBarIndex].load === "first") {
					this.addData();
				}
			},
			//顶栏对应滑动
			onChangeTab(e) {
				this.changeTap(e.detail.current)
			},
			//获取可视区域高度【兼容】
			// getClientHeight() {
			// 	const res = uni.getSystemInfoSync();
			// 	console.log(res.platform, res.statusBarHeight);
			// 	const system = res.platform;
			// 	if(system === 'ios') {
			// 		return 44 + res.statusBarHeight;
			// 	}else if(system === 'android') {
			// 		return 48 + res.statusBarHeight;
			// 	}else {
			// 		return 0;
			// 	}
			// },
			//对应显示不同数据
			addData() {
				//索引值
				let index = this.tobBarIndex;
				//id值
				let id = this.topBar[index].id
				
				// let page = Math.ceil(this.newTopBar[index].data.length / 5) + 1;
				
				//请求不同的数据 
				$http.request({
					url:'/cooking_list/' + id + '/data/1'
				}).then((res)=>{
					this.newTopBar[index].data = [...this.newTopBar[index].data, ...res];
				}).catch(()=>{
					uni.showToadt({
						title:'请求失败',
						icon:'none'
					})
				})
				
				//请求结束后，重新赋值
				this.newTopBar[index].load = "last";
				
				// if(typeof callback === 'function') {
				// 	callback();
				// }
			},
			//上拉加载更多
			// loadMore(index) {
			// 	this.newTopBar[index].loadText = "加载中";
			// 	this.addData(() => {
			// 		this.newTopBar[index].loadText = "暂时内容就这么多了";
			// 	})
			// }
		},
		components: {
			CookingSwiper,Recommend,Message,Icons,HotSwiper
		}
	}
</script>

<style scoped>

	.scroll-content {
		width: 100%;
		height: 130rpx;
		white-space: nowrap;
	}
	
	.scroll-item {
		display: inline-block;
		margin: 50rpx 10rpx	10rpx;
		background-color: #fff;
		font-size: 55rpx;
		border-radius: 75rpx;
		padding: 15rpx 87rpx;
		font-size: 32rpx;
		/* border: 2rpx solid #000; */
	}
	
	.f-active-color {
		border-bottom: 6rpx solid rgba(211, 0, 0, .5);
	}

	.load-test {
		border-top: 2rpx solid #636263;
		line-height: 60rpx;
		text-align: center;
	}
</style>
