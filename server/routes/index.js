var express = require('express');
var router = express.Router();
var connection = require("../db/sql.js")
var user = require("../db/UserSql")

//用户数据验证
router.post('/api/login', function(req, res, next) {
	
	//前端给后端的数据
	let params = {
		userName : req.body.userName,
		userPwd : req.body.userPwd
	}
	
	connection.query(user.queryUserName( params ) , function (error, results, fields){
		if(results.length > 0){
			connection.query(user.queryUserPwd( params ) , function (err, result){
				if(result.length > 0){
					res.send({
						data:{
							success:true,
							msg:"登陆成功",
							data:result[0]
						}
					})
				}else{
					res.send({
						data:{
							success:false,
							msg:"密码不正确"
						}
					})
				}
			})
		}
		else {
			res.send({
				data:{
					success:false,
					msg:"用户名或者手机号不存在"
				}
			})
		}
			
	})
});

//发送验证码
router.post('/api/code', function(req, res, next) {
	//前端给后端数据
	let pramas = {
		userName: req.body.userName
	}
	//接入短信sdk
	
});

//科普数据
router.get('/api/cooking/list', function(req, res, next) {
	res.json({
		code:"0",
		data:[
			{
				id: 1,
				name: "叶菜类",
				imgUrl: "../../static/vegetable_icon/cabbage.png",
				data:[
					{
						name: "常见蔬菜",
						list: [
							{
								id: 1,
								name: "大白菜",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 2,
								name: "菠菜",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 3,
								name: "空心菜",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 4,
								name: "生菜",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 5,
								name: "油麦菜",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 6,
								name: "香菜",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 7,
								name: "茼蒿",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 8,
								name: "韭菜",
								imgUrl: "../../static/cooking/message.png"
							},
						]
					},
					{
						name: "不常见蔬菜",
						list: [
							{
								id: 1,
								name: "抱子甘蓝",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 2,
								name: "羽衣甘蓝",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 3,
								name: "芥兰",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 4,
								name: "雪里蕻",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 5,
								name: "香椿",
								imgUrl: "../../static/cooking/message.png"
							},
						]
					}
				]
			},
			{
				id: 2,
				name: "根菜类",
				imgUrl: "../../static/vegetable_icon/carrot.png",
				data:[
					{
						name: "常见蔬菜",
						list: [
							{
								id: 1,
								name: "莲藕",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 2,
								name: "白萝卜",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 3,
								name: "山药",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 4,
								name: "莴笋",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 5,
								name: "马铃薯",
								imgUrl: "../../static/cooking/message.png"
							},
						]
					},
					{
						name: "不常见蔬菜",
						list: [
							{
								id: 1,
								name: "芜菁甘蓝",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 2,
								name: "菊牛蒡",
								imgUrl: "../../static/cooking/message.png"
							}
						]
					}
				]
			},
			{
				id: 3,
				name: "茎菜类",
				imgUrl: "../../static/vegetable_icon/scallion.png",
				data:[
					{
						name: "常见蔬菜",
						list: [
							{
								id: 1,
								name: "大葱",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 2,
								name: "洋葱",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 3,
								name: "莴笋",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 4,
								name: "莴笋",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 5,
								name: "马铃薯",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 6,
								name: "芹菜",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 7,
								name: "芥末",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 8,
								name: "芋头",
								imgUrl: "../../static/cooking/message.png"
							},
						]
					},
					{
						name: "不常见蔬菜",
						list: [
							{
								id: 1,
								name: "茭白",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 2,
								name: "芥芹",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 3,
								name: "芥苣",
								imgUrl: "../../static/cooking/message.png"
							}
						]
					}
				]
			},
			{
				id: 4,
				name: "花菜类",
				imgUrl: "../../static/vegetable_icon/Broccoli.png",
				data:[
					{
						name: "常见蔬菜",
						list: [
							{
								id: 1,
								name: "花椰菜",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 2,
								name: "西兰花",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 3,
								name: "紫花菜",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 4,
								name: "卷心菜",
								imgUrl: "../../static/cooking/message.png"
							},
						]
					},
				]
			},
			{
				id: 5,
				name: "果蔬类",
				imgUrl: "../../static/vegetable_icon/tomato.png",
				data:[
					{
						name: "常见蔬菜",
						list: [
							{
								id: 1,
								name: "甘蔗",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 2,
								name: "圣女果",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 3,
								name: "豆角",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 4,
								name: "黄瓜",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 5,
								name: "番茄",
								imgUrl: "../../static/cooking/message.png"
							},
						]
					},
				]
			},
			{
				id: 6,
				name: "食用菌类",
				imgUrl: "../../static/vegetable_icon/mushroom.png",
				data:[
					{
						name: "常见蔬菜",
						list: [
							// {
							// 	id: 1,
							// 	name: "香菇",
							// 	imgUrl: "../../static/vegetables/香菇.jpg"
							// },
							// {
							// 	id: 2,
							// 	name: "草菇",
							// 	imgUrl: "../../static/vegetables/草菇.jpg"
							// },
							// {
							// 	id: 3,
							// 	name: "蘑菇",
							// 	imgUrl: "../../static/vegetables/蘑菇.jpg"
							// },
							// {
							// 	id: 4,
							// 	name: "木耳",
							// 	imgUrl: "../../static/vegetables/木耳.png"
							// },
							// {
							// 	id: 5,
							// 	name: "银耳",
							// 	imgUrl: "../../static/vegetables/银耳.jpg"
							// },
							// {
							// 	id: 6,
							// 	name: "猴头",
							// 	imgUrl: "../../static/vegetables/猴头.jpg"
							// },
							// {
							// 	id: 7,
							// 	name: "红蘑",
							// 	imgUrl: "../../static/vegetables/红蘑.jpg"
							// },
							// {
							// 	id: 8,
							// 	name: "灵芝",
							// 	imgUrl: "../../static/vegetables/灵芝.jpg"
							// },
							// {
							// 	id: 9,
							// 	name: "白蘑菇",
							// 	imgUrl: "../../static/vegetables/白蘑菇.jpg"
							// },
							// {
							// 	id: 10,
							// 	name: "金针菇",
							// 	imgUrl: "../../static/vegetables/金针菇.jpg"
							// },
						]
					},
					{
						name: "不常见蔬菜",
						list: [
							// {
							// 	id: 1,
							// 	name: "松茸",
							// 	imgUrl: "../../static/vegetables/松茸.jpg"
							// },
							// {
							// 	id: 2,
							// 	name: "草虫",
							// 	imgUrl: "../../static/vegetables/草虫.jpg"
							// },
							// {
							// 	id: 3,
							// 	name: "牛肝菌",
							// 	imgUrl: "../../static/vegetables/牛肝菌.jpg"
							// },
							// {
							// 	id: 4,
							// 	name: "羊肚菌",
							// 	imgUrl: "../../static/vegetables/羊肚菌.jpg"
							// }
						]
					}
				]
			},
			{
				id: 7,
				name: "蛋制品类",
				imgUrl: "../../static/vegetable_icon/egg.png",
				data:[
					{
						name: "常见蛋制品类",
						list: [
							// {
							// 	id: 1,
							// 	name: "咸鸭蛋",
							// 	imgUrl: "../../static/vegetables/咸鸭蛋.webp"
							// },
							// {
							// 	id: 2,
							// 	name: "皮蛋",
							// 	imgUrl: "../../static/vegetables/皮蛋.webp"
							// },
							// {
							// 	id: 3,
							// 	name: "鹌鹑蛋",
							// 	imgUrl: "../../static/vegetables/鹌鹑蛋.jpg"
							// },
							// {
							// 	id: 4,
							// 	name: "鸡蛋",
							// 	imgUrl: "../../static/vegetables/鸡蛋.webp"
							// },
						]
					},
				]
			},
			{
				id: 8,
				name: "肉类",
				imgUrl: "../../static/vegetable_icon/meat.png",
				data:[
					{
						name: "畜肉类",
						list: [
							// {
							// 	id: 1,
							// 	name: "猪肉",
							// 	imgUrl: "../../static/vegetables/猪肉.webp"
							// },
							// {
							// 	id: 2,
							// 	name: "牛肉",
							// 	imgUrl: "../../static/vegetables/牛肉.webp"
							// },
							// {
							// 	id: 3,
							// 	name: "羊肉",
							// 	imgUrl: "../../static/vegetables/羊肉.jpg"
							// },
						]
					},
					{
						name: "禽肉类",
						list: [
							// {
							// 	id: 1,
							// 	name: "鸡肉",
							// 	imgUrl: "../../static/vegetables/鸡肉.jpg"
							// },
							// {
							// 	id: 2,
							// 	name: "鸭肉",
							// 	imgUrl: "../../static/vegetables/鸭肉.jpg"
							// },
							// {
							// 	id: 3,
							// 	name: "鹅肉",
							// 	imgUrl: "../../static/vegetables/鹅肉.webp"
							// },
							// {
							// 	id: 4,
							// 	name: "鸟肉",
							// 	imgUrl: "../../static/vegetables/鸟肉.webp"
							// },
						]
					},
				]
			},
			{
				id: 9,
				name: "海鲜类",
				imgUrl: "../../static/vegetable_icon/shrimp.png",
				data:[
					{
						name: "蟹类",
						list: [
							{
								id: 1,
								name: "青蟹",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 2,
								name: "毛蟹",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 3,
								name: "梭子蟹",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 4,
								name: "红蟹",
								imgUrl: "../../static/cooking/message.png"
							},
						]
					},
					{
						name: "贝类",
						list: [
							{
								id: 1,
								name: "海螺",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 2,
								name: "海虹",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 3,
								name: "文蛤",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 4,
								name: "蛏子",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 5,
								name: "蚬子",
								imgUrl: "../../static/cooking/message.png"
							},
						]
					},
					{
						name: "鱼类",
						list: [
							{
								id: 1,
								name: "大黄鱼",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 2,
								name: "多宝鱼",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 3,
								name: "海鳝鱼",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 4,
								name: "鲈鱼",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 5,
								name: "三文鱼",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 6,
								name: "黄花鱼",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 7,
								name: "沙丁鱼",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 8,
								name: "八爪鱼",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 9,
								name: "带鱼",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 10,
								name: "金枪鱼",
								imgUrl: "../../static/cooking/message.png"
							},
						]
					},
					{
						name: "藻类",
						list: [
							{
								id: 1,
								name: "海带",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 2,
								name: "龙须菜",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 3,
								name: "海木耳",
								imgUrl: "../../static/cooking/message.png"
							},
						]
					},
					{
						name: "虾类",
						list: [
							{
								id: 1,
								name: "基围虾",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 2,
								name: "皮皮虾",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 3,
								name: "龙虾",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 4,
								name: "竹节虾",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 5,
								name: "大海虾",
								imgUrl: "../../static/cooking/message.png"
							},
						]
					},
					{
						name: "肉类",
						list: [
							{
								id: 1,
								name: "海参",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 2,
								name: "鲍鱼",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 3,
								name: "扇贝肉",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 4,
								name: "鱿鱼肉",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 5,
								name: "海肠",
								imgUrl: "../../static/cooking/message.png"
							},
							{
								id: 6,
								name: "蛰头",
								imgUrl: "../../static/cooking/message.png"
							},
						]
					},
				]
			},
		]
	})
});

// //推荐中第一次触底的数据
// router.get('/api/cooking_list/1/data/2', function(req, res, next) {
// 	res.json({
// 		code:"0",
// 		data: {
			
// 				type:"Message",
// 				data:[
// 					{
// 						id: 1,
// 						imgUrl: "../../static/cooking_banner/banner05.jpg",
// 						userImg: "../../static/tabbar_icon/personal_c.png",
// 						userName: "杰尼龟",
// 						message: "见想要相似程度v尽快寄送从成都市看见博纳狂杀三百的v哦回踩尼克劳斯从树丛间的能成为都爱赔偿皮卡车基本都是"
// 					},
// 					{
// 						id: 2,
// 						imgUrl: "../../static/cooking_banner/banner05.jpg",
// 						userImg: "../../static/tabbar_icon/personal_c.png",
// 						userName: "小火龙",
// 						message: "见想要相似程度v尽快寄送从成都市看见博纳狂杀三百的v哦回踩尼克劳斯从树丛间的能成为都爱赔偿皮卡车基本都是"
// 					},
// 					{
// 						id: 3,
// 						imgUrl: "../../static/cooking_banner/banner05.jpg",
// 						userImg: "../../static/tabbar_icon/personal_c.png",
// 						userName: "大岩蛇",
// 						message: "见想要相似程度v尽快寄送从成都市看见博纳狂杀三百的v哦回踩尼克劳斯从树丛间的能成为都爱赔偿皮卡车基本都是"
// 					},
// 					{
// 						id: 4,
// 						imgUrl: "../../static/cooking_banner/banner05.jpg",
// 						userImg: "../../static/tabbar_icon/personal_c.png",
// 						userName: "杰尼龟",
// 						message: "见想要相似程度v尽快寄送从成都市看见博纳狂杀三百的v哦回踩尼克劳斯从树丛间的能成为都爱赔偿皮卡车基本都是"
// 					},
// 					{
// 						id: 5,
// 						imgUrl: "../../static/cooking_banner/banner05.jpg",
// 						userImg: "../../static/tabbar_icon/personal_c.png",
// 						userName: "杰尼龟",
// 						message: "见想要相似程度v尽快寄送从成都市看见博纳狂杀三百的v哦回踩尼克劳斯从树丛间的能成为都爱赔偿皮卡车基本都是"
// 					},
// 					{
// 						id: 6,
// 						imgUrl: "../../static/cooking_banner/banner05.jpg",
// 						userImg: "../../static/tabbar_icon/personal_c.png",
// 						userName: "皮卡丘",
// 						message: "见想要相似程度v尽快寄送从成都市看见博纳狂杀三百的v哦回踩尼克劳斯从树丛间的能成为都爱赔偿皮卡车基本都是"
// 					},
// 					{
// 						id: 7,
// 						imgUrl: "../../static/cooking_banner/banner05.jpg",
// 						userImg: "../../static/tabbar_icon/personal_c.png",
// 						userName: "妙蛙种子",
// 						message: "见想要相似程度v尽快寄送从成都市看见博纳狂杀三百的v哦回踩尼克劳斯从树丛间的能成为都爱赔偿皮卡车基本都是"
// 					}
// 				]
			
			
// 		}
		
// 	})
// });

//广场中第一次加载的数据
router.get('/api/cooking_list/2/data/1', function(req, res, next) {
	res.json({
		code:"0",
		data:[
			{
				type:"iconsList",
				data:[
					{imgUrl:"../../static/cooking/message.png",name:"消息"},
					{imgUrl:"../../static/cooking/notes.png",name:"发布"},
					{imgUrl:"../../static/cooking/charts.png",name:"排行榜"}
				]
			},
			{
				type:"messageList",
				data:[
					{
						userImg: "../../static/user/user_five.jpg",
						userName:"GG爆",
						message: "爆炒小龙虾是一道简单的家常菜。主要制作材料是小龙虾、干红辣椒、葱、蒜、盐、鸡精等。主要做法是先油锅烧热后，将蒜切成块状，爆香。然后倒入更多的油(淹过龙虾肉1/3为适度)，将切段洗净的龙虾块儿入锅，中火即可。最后，将龙虾肉装盘，浇汁，撒上葱段点缀，即可盛出",
						imgUrl: "../../static/cooking/pic/lobster.jpg"
					},
					{
						userImg: "../../static/user/user_four.jpg",
						userName:"波比",
						message: "味道挺不错的，朋友都很喜欢吃我做的饭，说下次还要来吃。",
						imgUrl: "../../static/cooking/pic/foodiesfeed_vegan-falafel-with-fresh-vegetables.jpg"
					},
					{
						userImg: "../../static/user/user_three.jpg",
						userName:"超人强",
						message: "的法国红酒看来立刻脚后跟范德萨法国红酒看来立刻脚后跟法国红酒看离开的人退",
						imgUrl: "../../static/cooking/pic/Braised_pork_with_carrot.jpg"
					},
					{
						userImg: "../../static/user/user_two.jpg",
						userName:"迷糊老师",
						message: "的法国红酒看来立刻脚后跟范德萨法国红酒看来立刻脚后跟法国红酒看离开的人退",
						imgUrl: "../../static/cooking/pic/foodiesfeed_fried_whole_mushrooms.jpg"
					},
					{
						userImg: "../../static/user/user_one.jpg",
						userName:"小呆呆",
						message: "的法国红酒看来立刻脚后跟范德萨法国红酒看来立刻脚后跟法国红酒看离开的人退",
						imgUrl: "../../static/cooking/pic/foodiesfeed_rosemary-lamb-shanks-with-mushrooms-and-vegetables-on-wine.jpg"
					},
					{
						userImg: "../../static/user/user_four.jpg",
						userName:"小菲菲",
						message: "的法国红酒看来立刻脚后跟范德萨法国红酒看来立刻脚后跟法国红酒看离开的人退",
						imgUrl: "../../static/cooking/pic/braised_meat.jpg"
					}
				]
			}
		]
	})
});


//热量数据
router.get('/api/cooking_list/3/data/1', function(req, res, next) {
	res.json({
		code:"0",
		data:[
			{
				type:"hotSwiperList",
				data:[
					{
						id:1,
						imgUrl: "../../static/cooking_hot/rice.webp",
						name: "主食类"
					},
					{
						id:2,
						imgUrl: "../../static/cooking_hot/egg.webp",
						name: "肉蛋类"
					},
					{
						id:3,
						imgUrl: "../../static/cooking_hot/vegatables.webp",
						name: "蔬菜类"
					},
					{
						id:4,
						imgUrl: "../../static/cooking_hot/mike.webp",
						name: "奶制品类"
					},
					{
						id:5,
						imgUrl: "../../static/cooking_hot/grease.jpg",
						name: "油脂类"
					},
					{
						id:6,
						imgUrl: "../../static/cooking_hot/between-meal_nibbles.jpg",
						name: "零食"
					},
					{
						id:7,
						imgUrl: "../../static/cooking_hot/beverage.jpg",
						name: "饮料"
					},
					{
						id:8,
						imgUrl: "../../static/cooking_hot/fruit.webp",
						name: "水果"
					},
				]
			},
		]
	})
});


//热量中第一次加载的数据
// router.get('/api/cooking_list/3/data/1', function(req, res, next) {
// 	res.json({
		// code:"0",
		// data:[
		// 	{
		// 		type:"iconsList",
		// 		data:[
		// 			{imgUrl:"../../static/tabbar_icon/cookie_c.png",name:"简香肴"},
		// 			{imgUrl:"../../static/tabbar_icon/cookie_c.png",name:"简香肴"},
		// 			{imgUrl:"../../static/tabbar_icon/cookie_c.png",name:"简香肴"}
		// 		]
		// 	}
		// ]
// 	})
// });

//推荐页面数据
router.get("/api/cooking_list/data", function(req, res, next) {
	res.json({
		"code":0,
		"data":{
			topBar:[
				{id:1,name:"推荐"},
				{id:2,name:"广场"},
				{id:3,name:"热量"}
			],
			data:[
				{
					type:"SwiperList",
					data:[
						{imgUrl:'../../static/cooking_banner/banner06.jpg'},
						{imgUrl:'../../static/cooking_banner/banner01.jpg'},
						{imgUrl:'../../static/cooking_banner/banner02.jpg'},
						{imgUrl:'../../static/cooking_banner/banner07.jpg'},
						{imgUrl:'../../static/cooking_banner/banner04.jpg'},
						{imgUrl:'../../static/cooking_banner/banner05.jpg'},
					]
				},
				{
					type:"recommendList",
					data:[
						{
							id: 1,
							imgUrl: "../../static/cooking/pic/braised_pork.jpg",
							userImg: "../../static/user/user_two.jpg",
							userName: "李吃不胖",
							message: "五花肉放料酒、葱姜焯水，反复冲洗干净沥水，倒入锅里煸炒出油（锅里不用放油）盛出备用。锅里少油放入冰糖，小火炒出糖色倒入五花肉上色，一勺料酒、三勺生抽、一勺蚝油、半勺老抽（喜欢颜色鲜艳的就放半勺，喜欢颜色深一点可以放整一勺)，翻炒均匀加入开水漫过食材，加入葱姜蒜、八角桂皮，小火炖50分钟左右，最后收汁即可"
						},
						{
							id: 2,
							imgUrl: "../../static/cooking/pic/egg_drop_soup.jpg",
							userImg: "../../static/user/user_five.jpg",
							userName: "小火龙",
							message: "见想要相似程度v尽快寄送从成都市看见博纳狂杀三百的v哦回踩尼克劳斯从树丛间的能成为都爱赔偿皮卡车基本都是"
						},
						{
							id: 3,
							imgUrl: "../../static/cooking/pic/Black_peppe_crab.jpg",
							userImg: "../../static/user/user_one.jpg",
							userName: "大岩蛇",
							message: "见想要相似程度v尽快寄送从成都市看见博纳狂杀三百的v哦回踩尼克劳斯从树丛间的能成为都爱赔偿皮卡车基本都是"
						},
						{
							id: 4,
							imgUrl: "../../static/cooking/pic/braised_meat.jpg",
							userImg: "../../static/user/user_two.jpg",
							userName: "杰尼龟",
							message: "见想要相似程度v尽快寄送从成都市看见博纳狂杀三百的v哦回踩尼克劳斯从树丛间的能成为都爱赔偿皮卡车基本都是"
						},
						{
							id: 5,
							imgUrl: "../../static/cooking/pic/braised_pork_ribs.jpg",
							userImg: "../../static/user/user_one.jpg",
							userName: "杰尼龟",
							message: "见想要相似程度v尽快寄送从成都市看见博纳狂杀三百的v哦回踩尼克劳斯从树丛间的能成为都爱赔偿皮卡车基本都是"
						},
						{
							id: 6,
							imgUrl: "../../static/cooking/pic/Braised_pork_with_carrot.jpg",
							userImg: "../../static/user/user_four.jpg",
							userName: "皮卡丘",
							message: "见想要相似程度v尽快寄送从成都市看见博纳狂杀三百的v哦回踩尼克劳斯从树丛间的能成为都爱赔偿皮卡车基本都是"
						},
						{
							id: 7,
							imgUrl: "../../static/cooking/pic/braised_tofu.jpg",
							userImg: "../../static/user/user_two.jpg",
							userName: "妙蛙种子",
							message: "见想要相似程度v尽快寄送从成都市看见博纳狂杀三百的v哦回踩尼克劳斯从树丛间的能成为都爱赔偿皮卡车基本都是"
						},
						{
							id: 8,
							imgUrl: "../../static/cooking/pic/chicken-salad.jpg",
							userImg: "../../static/user/user_one.jpg",
							userName: "妙蛙种子",
							message: "见想要相似程度v尽快寄送从成都市看见博纳狂杀三百的v哦回踩尼克劳斯从树丛间的能成为都爱赔偿皮卡车基本都是"
						},
						{
							id: 9,
							imgUrl: "../../static/cooking/pic/fensi-sala.jpg",
							userImg: "../../static/user/user_two.jpg",
							userName: "妙蛙种子",
							message: "见想要相似程度v尽快寄送从成都市看见博纳狂杀三百的v哦回踩尼克劳斯从树丛间的能成为都爱赔偿皮卡车基本都是"
						},
						{
							id: 10,
							imgUrl: "../../static/cooking/pic/foodiesfeed_fried_whole_mushrooms.jpg",
							userImg: "../../static/user/user_five.jpg",
							userName: "妙蛙种子",
							message: "见想要相似程度v尽快寄送从成都市看见博纳狂杀三百的v哦回踩尼克劳斯从树丛间的能成为都爱赔偿皮卡车基本都是"
						},
						{
							id: 11,
							imgUrl: "../../static/cooking/pic/foodiesfeed_rosemary-lamb-shanks-with-mushrooms-and-vegetables-on-wine.jpg",
							userImg: "../../static/user/user_one.jpg",
							userName: "妙蛙种子",
							message: "见想要相似程度v尽快寄送从成都市看见博纳狂杀三百的v哦回踩尼克劳斯从树丛间的能成为都爱赔偿皮卡车基本都是"
						},
						{
							id: 12,
							imgUrl: "../../static/cooking/pic/foodiesfeed_vegan-falafel-with-fresh-vegetables.jpg",
							userImg: "../../static/user/user_three.jpg",
							userName: "妙蛙种子",
							message: "见想要相似程度v尽快寄送从成都市看见博纳狂杀三百的v哦回踩尼克劳斯从树丛间的能成为都爱赔偿皮卡车基本都是"
						},
						{
							id: 13,
							imgUrl: "../../static/cooking/pic/fried_egg.jpg",
							userImg: "../../static/user/user_four.jpg",
							userName: "妙蛙种子",
							message: "见想要相似程度v尽快寄送从成都市看见博纳狂杀三百的v哦回踩尼克劳斯从树丛间的能成为都爱赔偿皮卡车基本都是"
						},
						{
							id: 14,
							imgUrl: "../../static/cooking/pic/lobster.jpg",
							userImg: "../../static/user/user_two.jpg",
							userName: "妙蛙种子",
							message: "见想要相似程度v尽快寄送从成都市看见博纳狂杀三百的v哦回踩尼克劳斯从树丛间的能成为都爱赔偿皮卡车基本都是"
						},
						{
							id: 14,
							imgUrl: "../../static/cooking/pic/sesame_chicken.jpg",
							userImg: "../../static/user/user_one.jpg",
							userName: "妙蛙种子",
							message: "见想要相似程度v尽快寄送从成都市看见博纳狂杀三百的v哦回踩尼克劳斯从树丛间的能成为都爱赔偿皮卡车基本都是"
						}
					]
				}
			]
		}
	})
});

module.exports = router;
