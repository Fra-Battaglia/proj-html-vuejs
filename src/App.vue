<script>
	import AppHeader from './components/AppHeader.vue';

	export default {
		data() {
			return {
				
			}
		},

		components: {
			AppHeader
		}
	}
</script>

<template>
	<AppHeader />
</template>

<style lang="scss">
	@use './components/styles/partials/variables' as*;
	@use './components/styles/partials/mixins' as*;

	@use './components/styles/generals.scss' as*;
</style>
