export default{
	state:{
		list:[
			{
				name:"张三",
				tel:"15924414665",
				city:"北京市海淀区",
				details:"2号楼",
				isDefault:false
			},
			{
				name:"lisi",
				tel:"13624414665",
				city:"北京市朝阳区",
				details:"6号楼",
				isDefault:true
			}
		]
	},
	getters:{
		
	},
	mutations:{
		createPath(state, obj) {
			state.list.push(obj);
		}
	},
	actions:{
		createPathFn({commit}, obj) {
			commit('createPath', obj)
		}
	}
}