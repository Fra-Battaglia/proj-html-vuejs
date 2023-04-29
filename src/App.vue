<script>
	import AppHeader from './components/AppHeader.vue';
	import AppJumbotron from './components/AppJumbotron.vue';
	import AppFooter from './components/AppFooter.vue';
	import AppFeatures from './components/AppFeatures.vue';

	export default {
		data() {
			return {
				
			}
		},

		components: {
			AppHeader,
			AppJumbotron,
			AppFeatures,
			AppFooter
		}
	}
</script>

<template>
	<AppHeader />
	<AppJumbotron />
	<AppFeatures />
	<AppFooter />
</template>

<style lang="scss">
	@use './components/styles/partials/variables' as*;
	@use './components/styles/partials/mixins' as*;

	@use './components/styles/generals.scss' as*;
</style>
