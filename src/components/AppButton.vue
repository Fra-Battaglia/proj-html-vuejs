<script>
	export default {
		props: {
			label: String,
			url: String
		},
	}
</script>

<template>
	<a :href="url" class="my-button rounded-pill p-1 my-border-primary d-inline-block">
		<button class="rounded-pill py-2 px-4 border-0">{{ label }}</button>
	</a>
</template>

<style lang="scss" scoped>
	@use './styles/partials/variables' as*;
	@use './styles/partials/mixins' as*;

	.my-button {
		border: 1px solid;
		border-color: $secondary-color;
		font-family: 'Barlow', sans-serif;
		transition: 0.15s;
		
		button {
			background-color: $secondary-color;
			font-weight: 600;
			transition: 0.15s;
		}
	}

	.my-button:hover {
		border-color: $primary-color;
		
		button {
			background-color: $primary-color;
		}
	}
</style>