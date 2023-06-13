<template>
	<view class="code">
			<view class="code-tip-one">请输入验证码
				<view class="code-tip">是否向<text>+86 {{phone.substring(0, 3)}}****{{phone.substr(phone.length-4)}}</text>发送验证码</view>
				<view class="code-errow" v-if="codeclolor == '#ff0000'">验证码输入错误</view>
			</view>
			<input class="cinput" adjust-position="false" auto-blur="true" @blur="blur" @input="codenum" :focus="focus"
						value="code" v-model="code" type="number" maxlength="6" />
			<view class="code-input">
				<view v-for="(item,index) in 6" :key="index" @click="codefocus(index)"
							:style='(index == code.length? "border: 5rpx solid rgba(211, 0, 0, .5);width: 80rpx;height: 80rpx;line-height: 80rpx;":"color: " + codeclolor + ";" +"border: 2rpx solid" + codeclolor)'>
							{{code[index] && code[index] || ''}}
				</view>
			</view>
			<block v-if="sec!=60">
				<view class="recode">重新发送({{sec}}s)</view>
			</block>
			
			<button @click="getCode()" type="primary" :disabled="verifyShow" style="margin-top: 150rpx; background-color: rgba(211, 0, 0, .5); width: 60%; border-radius: 60rpx;">发送短信</button>
		</view>
</template>

<script>
	import $http from "@/commen/api/request.js"
	export default {
		data() {
			return {
				phone: '',
				// 验证码输入聚焦
				focus: true,//input焦点，用于键盘隐藏后重新唤起
				// 验证码框颜色
				codeclolor: "#313131",//自定义光标的颜色
				// 验证码获取秒数
				sec: '60',//这是重新获取验证码的倒计时(可根据需求修改)
				code: '',//这是用户输入的验证码
				codeCorrect:'',//正确的验证码
				verifyShow:false,//是否禁用按钮
			}
		},
		onLoad (e) {
			this.phone = e.phone
		},
		onReady() {
			
		},
		methods: {
			// 输入验证码
			codenum: function(event) {
				// console.log('输入的值',event.target.value)
				var that = this
				var code = event.target.value
				that.code = code
				if (code.length == 6) {
					if (code == that.codeCorrect) {
						uni.showLoading({
							title: '输入正确'
						});
						//输入六位验证码后自动进行验证并执行验证成功的函数
						console.log('验证码正确：',that.code)
						setTimeout(() => {
							uni.switchTab({
								url:"../../../home/home"
							})
							uni.hideLoading();
						}, 500)
					} else {
						uni.showLoading({
							title: '重新输入'
						});
						console.log('验证码错误!!!：',that.code)
						that.codeclolor = "#ff0000"
						setTimeout(function() {
							that.code = []
							event.target.value = ""
							that.codeclolor = "#313131"
							uni.hideLoading();
						}, 1500)
					}
				}
			},
			// 键盘隐藏后设置失去焦点
			blur: function() {
				var that = this
				that.focus = false
			},
			// 点击自定义光标显示键盘
			codefocus: function(e) {
				var that = this
				if (e == that.code.length) {
					that.focus = true
				}
			},
			getCode(){//获取验证码
				const that = this
				that.codeCorrect = that.getVerificationCode(6)  //可以不传值，默认为4位随机码
				console.log('生成的随机码为：' + that.codeCorrect)
				that.timedown(that.sec)// 倒计时
			},
			//随机生成几位数
			getVerificationCode(codeLength){ //传入需要的字符串长度，不传默认为4
				// 准备一个用来抽取码的字符串，或者字典
				// let verification_code_str = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";  //数字和字母
				let verification_code_str = "0123456789";     //纯数字
				// 获取某个范围的随机整数，封装的函数，在上面抽取字典的时候进行了调用
				function getRandom(min, max) {//意思是获取min-max数字之间的某个随机数，直接调用即可
					return Math.round(Math.random() * (max - min) + min);
				}
				let newStr = '';                    //创建一个空字符串，用来拼接四位随机码
				for (var i = 0; i < codeLength; i++) {       //for循环四次，则拼接四次随机码
					newStr += verification_code_str[getRandom(0, verification_code_str.length - 1)];   //从字典中随机选一个下标，并拼接到空字符串中
				}
				return newStr
			},
			//倒计时
			timedown:function(num){
				let that = this;
				if(num == 0){
					that.verifyShow = false;		 // 不禁用获取验证码按钮
					that.sec = 60	
					return clearTimeout();
				}else{
					that.verifyShow = true;			// 禁用获取验证码按钮
					setTimeout(function() {  
						that.sec = num-1
						that.timedown(num-1);  
					}, 1000);//定时每秒减一  
				}
			},
		},
		components: {
			
		}
	}
</script>

<style scoped lang="less">
	.code {
		margin: auto;
		margin-top: 50rpx;
		width: 650rpx;
		height: auto;
	}

	.code-tip-one {
		width: 650rpx;
		height: 250rpx;
		line-height: 100rpx;
		font-size: 60rpx;
		font-weight: bold;
		color: #313131;
	}

	.code-tip {
		width: 650rpx;
		height: 100rpx;
		line-height: 50rpx;
		font-size: 30rpx;
		font-weight: normal;
		color: #8a8a8a;
	}

	.code-errow {
		width: 650rpx;
		height: 50rpx;
		line-height: 25rpx;
		font-size: 28rpx;
		font-weight: normal;
		color: #ff0000;
	}

	.code-tip>text {
		padding: 0 20rpx;
		width: 650rpx;
		font-size: 30rpx;
		font-weight: normal;
		color: rgba(211, 0, 0, .5);
	}

	.code-input {
		margin: auto;
		width: 650rpx;
		height: 100rpx;
		display: flex;
	}

	.code-input>view {
		margin-top: 5rpx;
		margin-left: 15rpx;
		width: 86rpx;
		height: 86rpx;
		line-height: 86rpx;
		font-size: 60rpx;
		font-weight: bold;
		color: #313131;
		text-align: center;
		border-radius: 10rpx;
	}

	.code-input>view:nth-child(1) {
		margin-left: 0rpx;
	}

	.cinput {
		position: fixed;
		left: -100rpx;
		width: 50rpx;
		height: 50rpx;
	}

	.recode{
		margin-top: 20rpx;
		width: 200rpx;
		height: 80rpx;
		line-height: 80rpx;
		color: #707070;
		font-size: 28rpx;
	}

</style>
