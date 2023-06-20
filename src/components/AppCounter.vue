<script>
	export default {
		props: {
			data: String,
			number: Number,
		},
	}
</script>

<template>
	<div class="col-3">
		<div class="counter">
			<h1>{{ number }}</h1>
			<p>{{ data }}</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@use './styles/partials/variables' as*;
	@use './styles/partials/mixins' as*;

	.counter {
		padding: 60px 0;
		border: 1px solid rgba(85, 111, 156, 0.4);
		border-radius: 60px;

		h1 {
			line-height: 74.1px;
			font-family: $secondary-font;
			font-size: 57px;
			font-weight: 700;
			margin: 0;
		}

		p {
			color: $primary-color;
			font-size: 18px;
			margin: 5px 0 0;
		}
	}
</style>