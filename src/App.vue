<script>
	import AppHeader from './components/AppHeader.vue';
	import AppJumbotron from './components/AppJumbotron.vue';

	export default {
		data() {
			return {
				
			}
		},

		components: {
			AppHeader,
			AppJumbotron
		}
	}
</script>

<template>
	<AppHeader />
	<AppJumbotron />
</template>

<style lang="scss">
	@use './components/styles/partials/variables' as*;
	@use './components/styles/partials/mixins' as*;

	@use './components/styles/generals.scss' as*;
</style>
