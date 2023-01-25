<script>
	export default {
		props: {
			label: String,
			url: String,
			status: Boolean,
			dropdown: Boolean
		}
	}
</script>

<template>
	<li><a :href="url" class="nav-link d-inline-block">{{ label }}</a></li>
</template>

<style lang="scss" scoped>
	@use './styles/partials/variables' as*;
	@use './styles/partials/mixins' as*;

	li {
		a {
			color: $light-color;
			text-decoration: none;
		}

		a:hover {
			color: $primary-color;
		}
	}
</style>