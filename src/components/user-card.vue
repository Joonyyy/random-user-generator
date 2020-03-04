<template>
	<div class="card">
		<div class="img-wrapper">
			<img :src="user.picture"/>
		</div>

		<div class="list-wrapper">
			<ul>
				<li v-for="(info, key) in user.info" :key="key">{{ info }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'UserCard',
	props: {
		user: Object
	}
}
</script>

<style scoped>
.card {
	border: 1px solid blue;
	display: flex;
	flex: 0 0 25%;
	flex-direction: column;
	margin: 1rem auto;
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
