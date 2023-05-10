<script>
	import AppButton from './AppButton.vue';
	export default {
		components: {
			AppButton
		},

		data() {
			return {
				matches: [
					{
						game: 'Call Of Duty',
						date: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.',
						icon: 'features-icon-1.png'
					},
					{
						game: 'Legendary Battles',
						date: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.',
						icon: 'features-icon-2.png'
					},
					{
						game: 'Nay Corral Gundown',
						date: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.',
						icon: 'features-icon-3.png'
					},
				]
			}
		}
	}
</script>

<template>
	<section class="upcoming-matches">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-7 text-center upcoming-matches-content">
					<h5 class="my-font-secondary my-text-primary">Trending Battle</h5>
					<h1 class="my-font-secondary">Upcoming Matches</h1>
					<p class="my-text-grey">libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.</p>
				</div>
			</div>
			<div class="row">
				<div class="col-6"></div>
				<div class="col-6">
					
				</div>
			</div>
			<div class="row justify-content-center">
				<AppButton :label="`VIEW ALL MATCHES`" />
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.upcoming-matches {
		background-color: #222833;
		padding: 120px 0;
		.upcoming-matches-content {
			h1 {
				font-size: 57px;
			}

			h5 {
				font-size: 24px;
			}


			margin-bottom: 35px;
		}
	}
</style>