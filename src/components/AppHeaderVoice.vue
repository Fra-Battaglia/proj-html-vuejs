<script>
	export default {
		props: {
			label: String,
			url: String,
		}
	}
</script>

<template>
	<li><a :href="url">{{ label }}</a></li>
</template>

<style lang="scss">
	@use './styles/partials/variables' as*;
	@use './styles/partials/mixins' as*;
</style>