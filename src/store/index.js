import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		users: {}
	},
	// getters: {
	// 	relevantUserData
	// },
	mutations: {
		setUsers(state, payload) {
			state.users = payload;
		}
	},
	actions: {
		getUsersFromAPI({ commit }) {
			axios
				.get('https://randomuser.me/api/?results=5')
				.then(({ data }) => {
					commit('setUsers', data.results);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}
})
