<script>
	export default {
		props: {
			testimonial_name: String,
			message: String,
			vote: Number,
			testimonial_img: String,
			country: String
		},
	}
</script>

<template>
	<div class="review">
		<div class="review-card">
			<div class="vote d-flex">
				<i class="fa-solid fa-star" v-for="n in vote"></i>
			</div>
			<p class="message">{{ message }}</p>

			<!-- Testimonial -->
			<div class="testimonial d-flex align-items-center">
				<div class="testimonial-img">
					<img :src="'src/assets/img/testimonials/' + testimonial_img" :alt="testimonial_name">
				</div>
				<div class="testimonial-info">
					<h6>{{ testimonial_name }}</h6>
					<p>{{ country }}</p>
				</div>
			</div>

		</div>
	</div>
</template>

<style lang="scss" scoped>
	@use './styles/partials/variables' as*;
	@use './styles/partials/mixins' as*;

	.review {
		width: calc(100% / 3);
		.review-card {
			background-color: $secondary-background;
			padding: 34px 40px;
			border-radius: 30px;
			margin: 0 10px;

			.vote {
				color: #ffba00;
				gap: 3px;
				
				i {
					display: inline-block;
					font-size: 18px;
					line-height: 30px;
				}
			}

			.message {
				font-size: 24px;
				margin: 12px 0 22px;
			}

			.testimonial-info {
				margin-left: 20px;

				h6 {
					font-size: 18px;
					font-family: $secondary-font;
					line-height: 23.4px;
					margin: 0;
				}

				p {
					font-size: 18px;
					color: $primary-color;
					line-height: 30px;
					margin: 0;
					margin-top: 6px;
				}
			}

		}
	}
</style>