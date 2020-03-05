<template>
	<div class="card col-6 col-md-4 col-lg-3">
		<div class="img-wrapper">
			<img :src="user.picture" alt=""/>
		</div>

		<div class="list-wrapper">
			<ul>
				<li v-for="(info, key) in user.info" :key="key">{{ info }}</li>
			</ul>

			<button class="btn btn-primary" @click="csvExport" aria-label="Click to Export User Info as a CSV File">Export CSV...</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'UserCard',
	props: {
		user: Object
	},
	methods: {
		csvExport() {
			let converter = require('json-2-csv');

			converter.json2csvAsync(this.user.fullJSON)
				.then((csv) => {
					let fileDownload = require('js-file-download');

					fileDownload(csv, 'data.csv');
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}
}
</script>

<style scoped>
.btn {
	font-size: 14px;
}

.card {
	border: 1px solid blue;
	display: flex;
	flex-direction: column;
	padding: 1rem;
}

.img-wrapper {
	border: 1px solid blue;
	margin: 0 auto;
	max-height: 100%;
	width: 100%;
}

.list-wrapper {
	width: 100%;
}

img {
	min-height: 100%;
	width: 100%;
}

ul {
	display: flex;
	flex-direction: column;
	list-style: none;
	padding: 0;
}

li {
	text-align: left;
	font-size: 14px;
}
</style>
