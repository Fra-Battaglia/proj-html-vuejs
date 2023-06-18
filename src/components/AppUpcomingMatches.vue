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
						date: 'December 25, 2022 4:00 PM',
						team_1: 'game-img-1.png',
						team_2: 'game-img-2.png'
					},
					{
						game: 'Legendary Battles',
						date: 'December 25, 2022 4:00 PM',
						team_1: 'game-img-3.png',
						team_2: 'game-img-4.png'
					},
					{
						game: 'Nay Corral Gundown',
						date: 'December 25, 2022 4:00 PM',
						team_1: 'game-img-5.png',
						team_2: 'game-img-6.png'
					},
					{
						game: 'League of Legends',
						date: 'December 25, 2022 4:00 PM',
						team_1: 'game-img-7.png',
						team_2: 'game-img-8.png'
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
					<h1 class="my-font-secondary">Keep Eyes & Manage Upcoming Battle</h1>
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
				font-weight: 700;
				margin-bottom: 10px;
				margin-top: -16px;
				line-height: 74.1px;
			}

			h5 {
				font-size: 24px;
				font-weight: 700;
				margin-bottom: 27px;
			}

			p {
				line-height: 30px;
			}

			margin-bottom: 35px;
		}
	}
</style>