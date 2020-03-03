<template>
  <div class="hello">
		<user-card
			v-for="user in users"
			:key="user.login.username"
			:user="user"/>
  </div>
</template>

<script>
import UserCard from './user-card.vue'
import { mapActions, mapState } from 'vuex';

export default {
	name: 'UserList',
	components: {
		UserCard
	},
	props: {
		user: Object
	},
	methods: {
		...mapActions([
			'getUsersFromAPI'
		])
	},
	computed: {
		...mapState([
			'users'
		])
	},
	created() {
		this.getUsersFromAPI();
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
