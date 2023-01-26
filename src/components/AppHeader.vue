<script>

	import AppHeaderVoice from './AppHeaderVoice.vue'
	import AppButton from './AppButton.vue';

	export default {
		data() {
			return {
				navbar_voices: [
					{
						label: 'Home',
						url: '#',
						status: true,
						
						dropdown: false
					},
					{
						label: 'Games',
						url: '#',
						status: false,
						dropdown: true,
						dropdown_voices: [
							{
								label: 'Games',
								url: '#',
							},
							{
								label: 'Games Details',
								url: '#',
							},
							{
								label: 'Match Deatails',
								url: '#',
							},
						]
					},
					{
						label: 'Shop',
						url: '#',
						status: false,
						dropdown: true,
						dropdown_voices: [
							{
								label: 'Shop',
								url: '#',
								dropdown: false
							},
							{
								label: 'Shop Single',
								url: '#',
								dropdown: false
							},
							{
								label: 'Shop Single 2',
								url: '#',
								dropdown: false
							},
							{
								label: 'Shop Single 3',
								url: '#',
								dropdown: false
							},
							{
								label: 'Shop Single 4',
								url: '#',
								dropdown: false
							},
						]
					},
					{
						label: 'Pages',
						url: '#',
						status: false,
						dropdown: true,
						dropdown_voices: [
							{
								label: 'About Us',
								url: '#',
								dropdown: false
							},
							{
								label: 'Team',
								url: '#',
								dropdown: false
							},
							{
								label: 'Player',
								url: '#',
								dropdown: false
							},
							{
								label: 'Upcoming Matches',
								url: '#',
								dropdown: false
							},
							{
								label: 'FAQs',
								url: '#',
								dropdown: false
							},
							{
								label: 'Privacy Policy',
								url: '#',
								dropdown: false
							},
							{
								label: 'Terms',
								url: '#',
								dropdown: false
							},
							{
								label: 'Coming Soon',
								url: '#',
								dropdown: false
							},
							{
								label: 'Error',
								url: '#',
								dropdown: false
							},
						]
					},
					{
						label: 'Blog',
						url: '#',
						status: false,
						dropdown: true,
						dropdown_voices: [
							{
								label: 'Blog',
								url: '#',
								dropdown: false
							},
							{
								label: 'Blog Single',
								url: '#',
								dropdown: false
							},
						]
					},
					{
						label: 'Contact',
						url: '#',
						status: false,
						dropdown: false
					},
				]
			}
		},

		components: {
			AppHeaderVoice,
			AppButton
		}
	}
</script>

<template>
	<header class="w-100 position-absolute z-1">
		<div class="container">
			<div class="row align-items-center justify-content-between">

				<!-- Logo -->

				<div class="col-3"><img src="../assets/img/logo.png" alt="logo"></div>

				<!-- Nav -->

				<div class="col-5">
					<nav>
						<ul class="mb-0 d-flex justify-content-between list-unstyled">
							<AppHeaderVoice v-for="item in navbar_voices" :label="item.label" :url="item.url" :dropdown_menu="item.dropdown_voices" :class="item.dropdown == true ? 'dropdown-toggle' : ''"/>
						</ul>
					</nav>
				</div>


				<div class="col-3 text-end">
					<AppButton :label="`LIVE STREAMING`"/>
				</div>
			</div>
			
			
		</div>
	</header>
</template>

<style lang="scss" scoped>

	@use './styles/partials/variables' as*;
	@use './styles/partials/mixins' as*;

	header {

		.row {
			height: 100px;

			nav {
				font-family: 'Orbitron', sans-serif;
			}
		}
	}
</style>
