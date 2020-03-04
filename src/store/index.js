import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { map } from 'underscore'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		users: {}
	},
	getters: {
		relevantDataAllUsers(state) {
			return map(state.users, (user) => {
				return {
					info: {
						name: `${user.name.first} ${user.name.last}`,
						email: user.email,
						phone: user.phone,
						age: user.registered.age,
						gender: user.gender
					},
					pictures: user.picture
				}
			})
		}
	},
	mutations: {
		setUsers: (state, payload) => {
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
