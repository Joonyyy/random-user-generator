<template>
  <div class="hello">
		<user-card
			v-for="user in relevantDataAllUsers"
			:key="user.email"
			:user="user"/>
  </div>
</template>

<script>
import UserCard from './user-card.vue'
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'UserList',
	components: {
		UserCard
	},
	methods: {
		...mapActions([
			'getUsersFromAPI'
		])
	},
	computed: {
		...mapGetters([
			'relevantDataAllUsers'
		])
	},
	created() {
		this.getUsersFromAPI();
	}
};
</script>

<style scoped>
.hello {
	border: 1px solid black;
}
</style>
