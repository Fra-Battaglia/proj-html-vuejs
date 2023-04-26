<script>
	import AppButton from './AppButton.vue';
	export default {
		components: {
			AppButton
		}
	}
</script>

<template>
	<div class="jumbotron">
		<div class="container d-flex align-items-center position-relative">
			<div class="row w-100">

				<div class="col-5 d-flex align-items-center">
					<div class="jumbotron-content z-1">
						<h4 class="my-font-secondary my-text-primary">Game With Live Stearming</h4>
						<h1 class="my-font-secondary">Future Of Esports</h1>
						<p class="my-font-primary my-text-grey">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
						<div class="d-flex">
							<AppButton :label="`EXPLORE GAMES`" />
							<a :href="url" class="my-button rounded-circle p-1 my-border-secondary ms-2 play-button">
								<button class="rounded-circle border-0 d-flex my-bg-light align-items-center justify-content-center"><img src="../assets/img/play-icon.png" alt="play-icon"></button>
							</a>
						</div>
					</div>
					<img src="../assets/img/game-controler.png" alt="" class="position-absolute" style="bottom: 100px; left: -50px">
				</div>

				<div class="col-7 ">
					<img src="../assets/img/index-banner-illus.png" alt="" class="position-absolute top-0" style="right: -15%;">
				</div>
				
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@use './styles/partials/variables' as*;
	@use './styles/partials/mixins' as*;

	.jumbotron {
		height: 900px;
		background-image: url('../assets/img/index-banner-bg.png');
		background-size: 100% 100%;
		overflow: hidden;

		.container {
			height: 100%;
			padding-top: 100px;

			.row {
				height: 100%;
			}
		}

		.jumbotron-content {
			font-size: 24px;

			h1 {
				font-size: 76px;
			}

			.my-button {
				font-size: 18px;
			}
			.play-button {
				height: 52px;
				width: 52px;
	
				button {
					height: 100%;
					width: 100%;
				}
				img {
					height: 1em;
				}
			}
		}

	}
</style>