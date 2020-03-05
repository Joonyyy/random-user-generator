<template>
	<div class="row">
		<div class="headline col-12">
			<h1>Random User Generator</h1>
		</div>

		<div class="card-container col-12">
			<user-card
				v-for="user in userDataBasedOnWindow"
				:key="user.name"
				:user="user"/>
		</div>

		<div class="col-12">
			<pagination @pageChanged="changePages"/>
		</div>
	</div>
</template>

<script>
import Pagination from './pagination.vue';
import UserCard from './user-card.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'UserList',
	components: {
		Pagination,
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
		]),
		changePages(pageNumber) {
			this.getUsersFromAPI(pageNumber);
		}
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
		this.getUsersFromAPI(1);
	},
	mounted() {
		window.addEventListener('resize', () => {
			this.windowWidth = window.innerWidth
		})
	}
};
</script>

<style scoped>
.card-container {
	display: flex;
	flex-wrap: wrap;
	padding: 2rem;
}

.headline {
	color: blue;
}

.row {
	margin: 0;
}
</style>
