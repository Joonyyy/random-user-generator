<template>
	<nav aria-label="Page Navigation">
		<ul class="pagination">
			<li><a class="page-link" @click="previousPage" href="#" aria-label="Return To Previous Page of Results">&#60;</a></li>
			<li v-for="index in pageMax" :key="index">
				<a class="page-link"
				@click="setPage(index)"
					href="#"
					:class="{ 'link-active': currentPage === index}">
					{{ index }}
				</a>
			</li>
			<li><a class="page-link" @click="nextPage" href="#" aria-label="Proceed To Next Page of Results">&#62;</a></li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'Pagination',
	data() {
		return {
			currentPage: 1,
			pageMax: 6,
			pageMin: 1
		}
	},
	methods: {
		nextPage() {
			if (this.currentPage < this.pageMax) {
				this.currentPage++;
				this.$emit('pageChanged', this.currentPage);
			}
		},
		previousPage() {
			if (this.currentPage > this.pageMin) {
				this.currentPage--;
				this.$emit('pageChanged', this.currentPage);
			}
		},
		setPage(index) {
			this.currentPage = index;
			this.$emit('pageChanged', this.currentPage);
		}
	}
};
</script>

<style scoped>
.link-active {
	background-color: blue !important;
	color: white !important;
}

nav {
	display: flex;
	justify-content: center;
}

.page-link {
	position: relative;
    display: block;
    padding: .5rem .75rem;
    line-height: 1;
    color: blue;
    background-color: #fff;
    border: 1px solid #dee2e6;
}
</style>
