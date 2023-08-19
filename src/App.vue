<script>
	import AppHeader from './components/AppHeader.vue';
	import AppJumbotron from './components/AppJumbotron.vue';
	import AppFeatures from './components/AppFeatures.vue';
	import AppUpcomingMatches from './components/AppUpcomingMatches.vue';
	import AppNumbers from './components/AppNumbers.vue';
	import AppLiveStreaming from './components/AppLiveStreaming.vue';
	import AppFeedback from './components/AppFeedback.vue';
	import AppOffer from './components/AppOffer.vue';
	import AppNews from './components/AppNews.vue';
	import AppFooter from './components/AppFooter.vue';

	export default {
		data() {
			return {
				
			}
		},

		components: {
			AppHeader,
			AppJumbotron,
			AppFeatures,
			AppUpcomingMatches,
			AppNumbers,
			AppLiveStreaming,
			AppFeedback,
			AppOffer,
			AppNews,
			AppFooter
		}
	}
</script>

<template>
	<AppHeader />
	<AppJumbotron />
	<AppFeatures />
	<AppUpcomingMatches />
	<AppNumbers />
	<AppLiveStreaming />
	<AppFeedback />
	<AppOffer />
	<AppNews />
	<AppFooter />
</template>

<style lang="scss">
	@use './components/styles/partials/variables' as*;
	@use './components/styles/partials/mixins' as*;

	@use './components/styles/generals.scss' as*;
</style>
