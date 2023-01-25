<script>
	import AppHeader from './components/AppHeader.vue';
	import AppJumbotron from './components/AppJumbotron.vue';
	import AppFooter from './components/AppFooter.vue';

	export default {
		data() {
			return {
				
			}
		},

		components: {
			AppHeader,
			AppJumbotron,
			AppFooter
		}
	}
</script>

<template>
	<AppHeader />
	<AppJumbotron />
	<AppFooter />
</template>

<style lang="scss">
	@use './components/styles/partials/variables' as*;
	@use './components/styles/partials/mixins' as*;

	@use './components/styles/generals.scss' as*;
</style>
