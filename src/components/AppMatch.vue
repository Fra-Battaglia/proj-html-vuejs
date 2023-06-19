<script>
	export default {
		props: {
			game: String,
			date: String,
			team_1: String,
			team_1_img: String,
			team_2: String,
			team_2_img: String
		},
	}
</script>

<template>
	<div class="match">
		<div class="teams d-flex justify-content-between align-items-center">
			<img :src="'/src/assets/img/teams/' + team_1_img" :alt="team_1" />
			<img src="/src/assets/img/verus-icon.png" alt="versus" />
			<img :src="'/src/assets/img/teams/' + team_2_img" :alt="team_2" />
		</div>

		<div class="match-info">
			<h4>{{ game }}</h4>
			<p>{{ date }}</p>
		</div>

		<div class="streaming-platforms d-flex justify-content-center gap-4">
			<a href="#">
				<img src="../assets/img/icon/youtube-icon.png" alt="youtube">
				Youtube
			</a>

			<a href="#">
				<img src="../assets/img/icon/twitch-icon.png" alt="twitch">
				Twitch
			</a>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@use './styles/partials/variables' as*;
	@use './styles/partials/mixins' as*;

	.match {
		background-color: #283449;
		border: 1px solid #556f9c;
		border-radius: 20px;
		padding: 40px 0;
		margin-bottom: 30px;
		.teams {
			padding: 0 50px;
		}
		.match-info {
			background-color: #30405f;
			padding: 30px 0;
			margin: 40px 0;
			text-align: center;

			h4 {
				font-family: $secondary-font;
				font-size: 24px;
				color: $light-color;
				font-weight: 700;
				margin: 0;
			}

			p {
				font-size: 18px;
				color: $primary-color;
				margin: 15px 0 0 0;
			}
		}

		.streaming-platforms {
			a {
				text-decoration: none;
				color: $light-color;
			}
		}
	}
</style>