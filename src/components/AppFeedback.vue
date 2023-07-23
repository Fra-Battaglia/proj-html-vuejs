<script>
	import AppReview from './AppReview.vue';

	export default {
		data() {
			return {
				reviews: [
					{
						testimonial_name: 'Garry Francis',
						message: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”',
						vote: 5,
						testimonial_img: 'testimonials-image-2.png',
						country: 'Kiribati'
					},
					{
						testimonial_name: 'Merle Fisher',
						message: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”',
						vote: 5,
						testimonial_img: 'testimonials-image-1.png',
						country: 'United States'
					},
					{
						testimonial_name: 'Garry Francis',
						message: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”',
						vote: 5,
						testimonial_img: 'testimonials-image-3.png',
						country: 'Serbia'
					},
				]
			}
		},

		components: {
			AppReview
		}
	}
</script>

<template>
	<div class="feedback">
		<div class="container">
			<div class="row justify-content-center feedback-content">
				<div class="col-7 text-center upcoming-matches-content">
					<h5 class="my-font-secondary my-text-primary">Futio Feedback</h5>
					<h1 class="my-font-secondary">What Our Gamers Say</h1>
					<p class="my-text-grey">libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.</p>
				</div>
			</div>
			<div class="reviews">
				<AppReview v-for="item in reviews" 
					:testimonial_name="item.testimonial_name" 
					:message="item.message"  
					:vote="item.vote"
					:testimonial_img="item.testimonial_img"
					:country="item.country"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@use './styles/partials/variables' as*;
	@use './styles/partials/mixins' as*;

	.feedback {
		padding-top: 120px;

		.feedback-content {
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

			margin-bottom: 55px;
		}

		.reviews {
			display: flex;
		}
	}
</style>