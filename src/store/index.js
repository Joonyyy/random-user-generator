import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	},
	mutations: {
	},
	actions: {
		getUsersFromAPI() {
			axios
				.get('https://randomuser.me/api/?results=5')
				.then(({ data }) => {
					console.log(data);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}
})
