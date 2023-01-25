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
						dropdown: true
					},
					{
						label: 'Shop',
						url: '#',
						status: false,
						dropdown: true
					},
					{
						label: 'Pages',
						url: '#',
						status: false,
						dropdown: true
					},
					{
						label: 'Blog',
						url: '#',
						status: false,
						dropdown: true
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
	<header class="position-fixed w-100">
		<div class="container">
			<div class="row align-items-center">

				<!-- Logo -->

				<div class="col-3"><img src="https://pixner.net/futio2/main/assets/images/logo.png" alt="logo"></div>

				<!-- Nav -->

				<div class="col-6">
					<nav>
						<ul class="mb-0 d-flex justify-content-between">
							<AppHeaderVoice v-for="item in navbar_voices" :label="item.label" :url="item.url" :class="item.dropdown == true ? 'dropdown-toggle' : ''"/>
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
		z-index: 1;

		.row {
			height: 100px;

			nav {
				font-family: 'Orbitron', sans-serif;

				ul {
					list-style: none;
				}
			}
		}
	}
</style>
