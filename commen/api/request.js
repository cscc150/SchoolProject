export default{
	comment: {
		baseUrl: 'http://192.168.43.68:3000/api',
		data:{},
		header:{
			"Content-Type":"application/json",
			"Content-Type":"application/x-www-form-urlencoded"
		},
		method:"GET",
		dataType:"json"
	},
	request( options={} ) {
		options.url = this.comment.baseUrl + options.url;
		options.data = options.data || this.comment.data;
		options.header = options.header || this.comment.header;
		options.method = options.method || this.comment.method;
		options.dataType = options.dataType || this.comment.dataType;
		
		return new Promise((res, rej) => {
			
			// uni.showLoading({
			// 	title: '加载中'
			// });
			
			uni.request({
				...options,
				success: (result) => {
					
					if(result.statusCode != 200){
						return rej();
					}
					
					// setTimeout(function() {
					// 	uni.hideLoading();
					// }, 2000);
					
					let data = result.data.data;
					res(data);
				}
			})
		})
	}
}