import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { map } from 'underscore';

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		users: {}
	},
	getters: {
		desktopDataAllUsers(state) {
			return map(state.users, (user) => {
				return {
					info: {
						name: `${user.name.first} ${user.name.last}`,
						gender: user.gender.charAt(0).toUpperCase() + user.gender.slice(1),
						age: `${user.registered.age} yrs. old`,
						phone: `Phone: ${user.phone}`,
						email: user.email
					},
					picture: user.picture.large,
					fullJSON: user
				}
			})
		},
		mobileDataAllUsers(state) {
			return map(state.users, (user) => {
				return {
					info: {
						name: `${user.name.first} ${user.name.last}`,
						gender: user.gender.charAt(0).toUpperCase() + user.gender.slice(1),
						age: `${user.registered.age} yrs. old`,
					},
					picture: user.picture.large,
					fullJSON: user
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
		getUsersFromAPI({ commit }, pageIndex) {
			axios
				.get(`https://randomuser.me/api/?page=${pageIndex}&results=12&seed=abc`)
				.then(({data}) => {
					commit('setUsers', data.results);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}
})
