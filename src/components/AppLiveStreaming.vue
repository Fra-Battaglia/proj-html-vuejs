<script>
	import AppCounter from './AppCounter.vue';
	export default {
		components: {
		}
	}
</script>

<template>
	<div class="live-streaming">
		<div class="container">
			<div class="row justify-content-center">
				<div class="live-info col-7">
					<h5>Live Streaming</h5>
					<h1>Watch The Streams</h1>
					<p>libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.</p>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="live-player">
					<img src="../assets/img/video-bg.png" alt="live streaming">

					<a href="#" class="live-indicator rounded-pill">
						<img src="../assets/img/icon/live-icon.png" alt="Live" style="margin-right: 5px;" /> Live
					</a>

					<div class="play-button">
						<div class="play-icon">
							<img src="../assets/img/play-icon.png" alt="">
						</div>
						<h5>League Of Legends</h5>
					</div>

					<div class="live-stats d-flex">
						<div><span class="my-text-primary">356,599</span>  Viewers</div>
						<div><span class="my-text-primary">23,599</span>  Likes</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@use './styles/partials/variables' as*;
	@use './styles/partials/mixins' as*;

	.live-streaming {
		background-image: url('../assets/img/live-streaming-bg.png');
		background-size: 100%;
		background-repeat: no-repeat;
		background-color: #000000;
		padding-top: 120px;
		text-align: center;

		.live-info {
			margin-bottom: 55px;

			h1 {
				font-family: $secondary-font;
				font-size: 57px;
				font-weight: 700;
				margin-bottom: 10px;
			}

			h5 {
				font-family: $secondary-font;
				font-size: 24px;
				font-weight: 700;
				margin-bottom: 10px;
				color: $primary-color;
			}

			p {
				margin: 0;
				font-size: 18px;
				line-height: 30px;
				color: $grey-color;
			}
		}

		.live-player {
			position: relative;
			width: auto;
			padding: 0;

			a.live-indicator {
				background-color: #ff9933;
				position: absolute;
				top: 40px;
				right: 40px;
				color: $dark-color;
				padding: 5px 26px;
				text-decoration: none;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.play-button {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: auto;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);

				h5 {
					font-family: $secondary-font;
					font-size: 24px;
					margin-top: 15px;
					font-weight: 700;
				}

				.play-icon {
					display: flex;
					align-items: center;
					justify-content: center;
					margin-bottom: 40px;
					img {
						position: relative;
						z-index: 1;
					}
				}
				.play-icon::after {
					position: absolute;
					content: "";
					background-color: $light-color;
					border-radius: 50%;
					width: 70px;
					height: 70px;
				}
				.play-icon::before {
					position: absolute;
					content: "";
					border: 1px solid $secondary-color;
					border-radius: 50%;
					width: 90px;
					height: 90px;
					animation: stretch 4s linear infinite;
				}

				@keyframes stretch {
					0% {
						transform: scale(1, 1);
					}
					50% {
						transform: scale(1.1, 1.1);
					}
					100% {
						transform: scale(1, 1);
					}
				}
			}
		}

		.live-stats {
			position: absolute;
			bottom: 40px;
			left: 40px;
			gap: 35px;
		}

	}
</style>