<template>
	<view class="my-add-path">
		<view class="path-item">
			<view class="">收件人</view>
			<input type="text" value="" placeholder="收件人姓名" v-model="name"/>
		</view>
		<view class="path-item">
			<view class="">手机号</view>
			<input type="text" value="" placeholder="11位手机号" v-model="tel"/>
		</view>
		<view class="path-item">
			<view class="">所在地址</view>
			<view class="" @tap='showCityPaker'> {{city}} > </view>
			<mpvue-city-picker ref="mpvueCityPicker" :pickerValueDefault='pickerValueDefault' @onConfirm='onConfirm'>
				
			</mpvue-city-picker>
		</view>
		<view class="path-item">
			<view class="">详细地址</view>
			<input type="text" value="" placeholder="不少于五个字" v-model="details"/>
		</view>
		<view class="path-item">
			<view class="">设为默认地址</view>
			<label class="radio">
				<radio value="" color="#ff3333" v-model="isDefaults"/><text></text>
			</label>
		</view>
	</view>
</template>

<script>
	import mpvueCityPicker from "@/components/uni/mpvue-citypicker/mpvueCityPicker.vue";
	import {mapActions} from "vuex";
	export default {
		data() {
			return {
				pickerValueDefault: [0, 0, 1],
				// pathObj:{
				// 	name:"",
				// 	tel:"",
				// 	city: "请选择",
				// 	details:"",
				// 	isDefaults:false
				// }
				name:"",
				tel:"",
				city: "请选择",
				details:"",
				isDefaults:false
			}
		},
		onNavigationBarButtonTap() {
			this.createPathFn(
			{
				name:this.name,
				tel:this.tel,
				city:this.city,
				details:this.details,
				isDefaults:this.isDefaults
			}
			// this.pathObj
			)
			uni.navigateBack({
				dalta:1
			})
		},
		methods: {
			...mapActions(["createPathFn"]),
			showCityPaker() {
				this.$refs.mpvueCityPicker.show();
			},
			onConfirm(e) {
				this.city = e.label
			}
		},
		components: {
			mpvueCityPicker
		}
	}
</script>

<style scoped>
	.my-add-path {
		padding-left: 20rpx;
	}
	
	.path-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16rpx 0;
		width: 100%;
		border-bottom: 2rpx solid #ccc;
	}
	
	.path-item input {
		flex: 1;
		text-align: left;
		padding-left: 10rpx;
	}

</style>
