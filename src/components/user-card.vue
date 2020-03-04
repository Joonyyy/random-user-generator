<template>
	<div class="card">
		<img :src="imageSrcToUse"/>
		<ul>
			<li v-for="(info, key) in user.info" :key="key">{{ key }}: {{ info }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'UserCard',
	props: {
		user: Object
	},
	computed: {
		imageSrcToUse() {
			const pictures = this.user.pictures;

			return pictures.large;
		}
	}
}
</script>

<style scoped>
.card {
	display: flex;
}
ul {
	display: flex;
	flex-direction: column;
	list-style: none;
}
li {
	text-align: left;
}
</style>
