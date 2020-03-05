<template>
	<div class="row">
		<div class="hello col-12">
				<user-card
					v-for="user in userDataBasedOnWindow"
					:key="user.name"
					:user="user"/>
		</div>
	</div>
</template>

<script>
import UserCard from './user-card.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'UserList',
	components: {
		UserCard
	},
	data() {
		return {
			windowWidth: window.innerWidth
		}
	},
	methods: {
		...mapActions([
			'getUsersFromAPI'
		])
	},
	computed: {
		...mapGetters([
			'desktopDataAllUsers',
			'mobileDataAllUsers'
		]),
		userDataBasedOnWindow() {
			return (this.windowWidth > 992) ? this.desktopDataAllUsers : this.mobileDataAllUsers;
		}
	},
	created() {
		this.getUsersFromAPI();
	},
	mounted() {
		window.addEventListener('resize', () => {
			this.windowWidth = window.innerWidth
		})
	}
};
</script>

<style scoped>
.hello {
	display: flex;
	flex-wrap: wrap;
	padding: 2rem;
}
</style>
