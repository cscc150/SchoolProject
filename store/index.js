import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//地址管理
import path from "./modules/path.js"

export default new Vuex.Store({
	modules:{
		path
	}
})