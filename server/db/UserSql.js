var User = {
	//查询用户名
	queryUserName(param) {
		return "select * from user where user_name = '" + param.userName + "' or user_phone = '" + param.userName + "' ";
	},
	
	queryUserPwd(param) {
		return "select * from user where user_name = '" + param.userName + "' or user_phone = '" + param.userName + "' and user_password = '" + param.userPwd + "' ";
	}
}

exports = module.exports = User;