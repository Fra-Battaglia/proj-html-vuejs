<script>
	import AppCounter from './AppCounter.vue';
	export default {
		components: {
			AppCounter
		}
	}
</script>

<template>
	<div class="numbers">
		<div class="container">
			<h1>Futio Quick Facts</h1>
			<div class="counters row">
				<AppCounter number="9999" data="Twitch Streams" />
				<AppCounter number="821" data="Total Games" />
				<AppCounter number="9999" data="Youtube Streams" />
				<AppCounter number="73" data="Pro Team" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@use './styles/partials/variables' as*;
	@use './styles/partials/mixins' as*;

	.numbers {
		background-color: #000000;
		padding: 120px 0;
		text-align: center;

		h1 {
			font-family: $secondary-font;
			font-size: 57px;
			font-weight: 700;
			margin-bottom: 55px;
		}
	}
</style>