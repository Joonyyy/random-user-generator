<template>
	<div class="card">
		<div class="img-wrapper">
			<img :src="imageSrcToUse"/>
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
	border: 1px solid blue;
	display: flex;
	flex-direction: column;
	margin: 1rem auto;
	padding: 1rem;
	width: 28%;
}

img {
	min-height: 100%;
	width: 100%;
}

.img-wrapper {
	max-height: 100%;
	width: 100%;
	border: 1px solid blue;
}

.list-wrapper {
	width: 50%;
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
