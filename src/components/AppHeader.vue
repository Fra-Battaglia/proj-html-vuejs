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
		},

		mounted() {
			const expandable_voices = document.querySelectorAll('.expandable');
			
			window.addEventListener("resize", this.collapse_menu);
			console.log(expandable_voices);

			for (let i = 0; i < expandable_voices.length; i++) {
				if (window.innerWidth <= 992) {
					expandable_voices[i].addEventListener("click", function() {
						expandable_voices[i].querySelector('.dropdown').classList.toggle('d-block');
					});
				} else {
					console.log('schermo largo');
					expandable_voices[i].querySelector('.dropdown').classList.remove('d-block');
				}
			}

			window.addEventListener("resize", function() {
				if (window.innerWidth > 992) {
					for (let i = 0; i < expandable_voices.length; i++) {
						expandable_voices[i].querySelector('.dropdown').classList.remove('d-block');
					}
				}
			});
		},

		methods: {
			collapse_menu() {
				let a = document.querySelector('#menu');
				if (window.innerWidth >= 992) {
					a.classList.remove('collapse')
				} else {
					a.classList.add('collapse')
				}
			},

			// collapse_menu_voice(expandable) {
			// 	if (window.innerWidth >= 992) {
			// 		expandable.classList.remove('d-block')
			// 	}
			// },
		},
	}
</script>

<template>
	<header class="w-100">
		<div class="container">
			<div class="row flex-column flex-lg-row position-relative flex-nowrap">

				<!-- Logo -->

				<div class="header-left col-12 col-lg-auto flex-lg-shrink-1 col-xxl-4 d-flex align-items-center justify-content-between">
					<a href="#"><img src="../assets/img/logo.png" alt="logo"></a>
					<a data-bs-toggle="collapse" href="#menu" role="button" aria-expanded="true" aria-controls="menu"><i class="fa-solid fa-bars d-lg-none"></i></a>
				</div>

				<!-- Nav -->

				<div :class="window.innerWidth <= 991 ? 'collapse' : window.innerWidth > 991 ?'' : ''" class="col-lg-auto col-xxl-8 flex-lg-grow-1" id="menu">
					<div class="d-flex justify-content-between flex-column flex-lg-row">
						<nav class="justify-content-lg-center justify-content-xxl-start">
							<ul class="mb-0 d-flex justify-content-between align-items-start list-unstyled gap-4 flex-column flex-lg-row flex-wrap flex-lg-nowrap">
								<AppHeaderVoice v-for="item in navbar_voices" :label="item.label" :url="item.url" :dropdown="item.dropdown" :dropdown_menu="item.dropdown_voices" />
							</ul>
						</nav>
						<div class="header-right col-6 col-md-auto d-flex align-items-center gap-4">
							<a href="#" class="cart position-relative">
								<img src="../assets/img/cart-icon.png" alt="cart">
								<span class="badge position-absolute rounded-circle my-bg-secondary my-text-dark d-flex align-items-center justify-content-center">03</span>
							</a>
							<AppButton :label="`LIVE STREAMING`"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>

	@use './styles/partials/variables' as*;
	@use './styles/partials/mixins' as*;

	header {
		position: fixed;
		z-index: 2;
		background-color: $secondary-background;
		padding: 25px 15px;
		.row {
			.menu-invisible {
				display: none;
			}
			nav {
				font-family: 'Orbitron', sans-serif;
				margin: 25px 0;
			}
		}

		.badge {
			width: 20px;
			height: 20px;
			top: -4px;
			right: -5px;
		}
	}

	@media screen and (min-width: 992px) {
		header {
			position: absolute;
			background-color: transparent;
			.row {

				nav {
					margin: 0;
					display: flex;
					align-items: center;
					font-size: 16px;
					width: 100%;
					margin: 0 20px 0 30px;
				}
			} 
		} 
	}

	@media screen and (min-width: 1200px) {
		header {
			.row {
				nav {
					font-size: 18px;
					margin: 0;
				} 
			}
		}
	}
</style>
