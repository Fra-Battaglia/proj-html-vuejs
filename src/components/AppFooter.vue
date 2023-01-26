<script>

	import AppHeaderVoice from './AppHeaderVoice.vue'
	import AppButton from './AppButton.vue';
	import AppFooterVoices from './AppFooterVoices.vue';

	export default {
		data() {
			return {

				social_icons: [
					{
						icon: 'fa-brands fa-youtube',
						url: '#',
					},
					{
						icon: 'fa-brands fa-twitch',
						url: '#',
					},
					{
						icon: 'fa-brands fa-facebook',
						url: '#',
					},
					{
						icon: 'fa-brands fa-instagram',
						url: '#',
					},
				],
				footer_columns: [
					{
						title: 'Quick Links',
						footer_voices: [
							{
								label: 'Games',
								url: '#'
							},
							{
								label: 'Latest Tournament',
								url: '#'
							},
							{
								label: 'Shop',
								url: '#'
							},
							{
								label: 'Blog',
								url: '#'
							},
							{
								label: 'Contact',
								url: '#'
							},
						]
					},
					{
						title: 'Help',
						footer_voices: [
							{
								label: 'Faqs',
								url: '#'
							},
							{
								label: 'Terms & Conditions',
								url: '#'
							},
							{
								label: 'Privacy',
								url: '#'
							},
						]
					},
					{
						title: 'Follow Us',
						footer_voices: [
							{
								label: 'Facebook',
								url: '#'
							},
							{
								label: 'Twitter',
								url: '#'
							},
							{
								label: 'Instagram',
								url: '#'
							},
							{
								label: 'Youtube',
								url: '#'
							},
							{
								label: 'Github',
								url: '#'
							},
						]
					},
				]
			}
		},

		components: {
			AppHeaderVoice,
			AppButton,
			AppFooterVoices
		}
	}
</script>

<template>
	<footer>
		<div class="container">
			<div class="row p-120">

				<div class="col-4">
					<div class="mb-4"><a href="#"><img src="../assets/img/logo.png" alt="logo"></a></div>
					<p class="mb-4">Lorem ipsum dolor sit amet, elit. varius enim in eros elementum Duis mi quis viverra ornare</p>
					<div class="social-icons d-flex gap-3">
						<a :href="item.url" class="social d-flex justify-content-center align-items-center my-text-light rounded-circle text-decoration-none" v-for="item in social_icons"><i :class="item.icon"></i></a>
					</div>
				</div>

				<div class="col-8">
					<div class="row">
						<AppFooterVoices v-for="item in footer_columns" :title="item.title" :voices="item.footer_voices"/>

						<div class="col contacts">
							<h4 class="my-font-secondary">Contacts</h4>
							<ul class="list-unstyled">
								<li>
									<div class="my-text-primary">Location:</div>
									<div>4 Mayfield, Buckden, PE19 5SZ</div>
								</li>

								<li>
									<div class="my-text-primary">Phone:</div>
									<div>(302) 555-0107</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>

	@use './styles/partials/variables' as*;
	@use './styles/partials/mixins' as*;

	footer {
		background-color: $secondary-background;

		a.social {
			height: 40px;
			width: 40px;
			border: 1px solid rgba(127, 108, 152, 0.5);
			color: $grey-color;
			transition: 0.15s;
		}

		a.social:hover {
			background-color: $primary-color;
			color: $light-color;
		}

		ul {
			li {
				line-height: 30px;
				margin-bottom: 10px;
			}
		}
	}
</style>
