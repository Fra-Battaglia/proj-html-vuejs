<script>
</script>

<template>
	<div class="offer">
		<div class="container-fluid">
			<div class="row justify-content-center">
				<div class="col-lg-10">
					<div class="banner">
						<div class="banner-info">
							<h5>Make Offer</h5>
							<h1>Get 70% Offer Discount</h1>
						</div>
						<a href="#" class="button">Get Offers</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@use './styles/partials/variables' as*;
	@use './styles/partials/mixins' as*;

	.offer {
		padding-top: 120px;

		.banner {
			padding: 120px 0;
			background-image: url('../assets/img/banner-item-bg.png');
			background-size: cover;
			background-position: center;
			text-align: center;
			border-radius: 10px;

			.banner-info {
				margin-bottom: 50px;

				h5 {
					font-size: 24px;
					line-height: 31.2px;
					margin-top: -6px;
					margin-bottom: 27px;
					font-weight: 700;
					font-family: $secondary-font;
				}

				h1 {
					font-size: 57px;
					line-height: 74.1px;;
					font-weight: 700;
					margin-top: -16px;
					margin-bottom: 10px;
					font-family: $secondary-font;
				}

			}

			a.button {
				text-decoration: none;
				color: white;
				background-color: #1a8f3d;
				padding: 18px 70px;
				border-radius: 60px;
				font-size: 18px;
    			line-height: 30px !important;
			}
		}
	}
</style>