<script>
	export default {
		props: {
			label: String,
			url: String
		},
	}
</script>

<template>
	<a :href="url" class="my-button rounded-pill p-2 my-border-primary d-inline-block">
		<button class="rounded-pill p-2 border-0">{{ label }}</button>
	</a>
</template>

<style lang="scss" scoped>
	@use './styles/partials/variables' as*;
	@use './styles/partials/mixins' as*;

	.my-button {
		border: 1px solid;
		border-color: $primary-color;
		font-family: 'Barlow', sans-serif;
		
		button {
			background-color: $primary-color;
			font-weight: 600;
		}
	}
</style>