<script>
	import AppButton from './AppButton.vue';
	import AppMatch from './AppMatch.vue';
	export default {
		components: {
			AppButton,
			AppMatch
		},

		data() {
			return {
				matches: [
					{
						game: 'Call Of Duty',
						date: 'December 25, 2022 4:00 PM',
						team_1: {
								name: 'Cast Alligator',
								img: 'game-img-1.png'
							},
						team_2: {
							name: 'Gaming Bangke',
							img: 'game-img-2.png'
						},
					},
					{
						game: 'Legendary Battles',
						date: 'December 25, 2022 4:00 PM',
						team_1: {
							name: 'Gaming Esport',
							img: 'game-img-3.png'
						},
						team_2: {
							name: 'Ranger Gaming',
							img: 'game-img-4.png'
						},
					},
					{
						game: 'Nay Corral Gundown',
						date: 'December 25, 2022 4:00 PM',
						team_1: {
							name: 'Wolves',
							img: 'game-img-5.png'
						},
						team_2: {
							name: 'Esports Knights',
							img: 'game-img-6.png'
						},
					},
					{
						game: 'League Of Legends',
						date: 'December 25, 2022 4:00 PM',
						team_1: {
							name: 'Holligans',
							img: 'game-img-7.png'
						},
						team_2: {
							name: 'Assassin',
							img: 'game-img-8.png'
						},
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
				<div class="col-6" v-for="item in matches">
					<AppMatch 
						:game="item.game" 
						:date="item.date" 
						:team_1_img="item.team_1.img" 
						:team_1="item.team_1.name" 
						:team_2_img="item.team_2.img" 
						:team_2="item.team_2.name"
					/>
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