<script>
	export default {
		props: {
			title: String,
			url: String,
			voices: Array,
		}
	}
</script>

<template>
	<div class="col">
		<h4 class="my-font-secondary">{{ title }}</h4>
		<ul class="list-unstyled">
			<li v-for="item in voices"><a :href="item.url" class="text-decoration-none my-color-light">{{ item.label }}</a></li>
		</ul>
	</div>
</template>

<style scoped lang="scss">

	@use './styles/partials/variables' as*;
	@use './styles/partials/mixins' as*;

	ul {
		li {
			line-height: 30px;
			margin-bottom: 10px;

			a {
				color: $grey-color;
				transition: 0.15s;
			}

			a:hover {
				color: $primary-color;
			}
		}
	}
</style>