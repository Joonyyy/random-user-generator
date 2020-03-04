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
						gender: user.gender.charAt(0).toUpperCase() + user.gender.slice(1),
						age: `${user.registered.age} yrs. old`,
						phone: `Phone: ${user.phone}`,
						email: user.email
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
				.get('https://randomuser.me/api/?results=6')
				.then(({ data }) => {
					commit('setUsers', data.results);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}
})
