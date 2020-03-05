<template>
	<div class="card col-6 col-md-4 col-lg-3">
		<div class="img-wrapper">
			<img :src="user.picture"/>
		</div>

		<div class="list-wrapper">
			<ul>
				<li v-for="(info, key) in user.info" :key="key">{{ info }}</li>
			</ul>
		</div>

		<download-csv
			class="btn btn-default"
			:data="user.jsonData"
			name="filename.csv">
			Download CSV (This is a slot)
		</download-csv>
	</div>
</template>

<script>
import JsonCSV from 'vue-json-csv';

export default {
	name: 'UserCard',
	props: {
		user: Object
	},
	components: {
		'download-csv': JsonCSV
	}
}
</script>

<style scoped>
.card {
	border: 1px solid blue;
	display: flex;
	flex-direction: column;
	padding: 1rem;
}

img {
	min-height: 100%;
	width: 100%;
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
