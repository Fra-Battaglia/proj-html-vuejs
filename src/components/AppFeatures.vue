<script>
	import AppButton from './AppButton.vue';
	export default {
		components: {
			AppButton
		},

		data() {
			return {
				features: [
					{
						title: 'Live Streaming',
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.',
						icon: 'features-icon-1.png'
					},
					{
						title: 'Great Tournament',
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.',
						icon: 'features-icon-2.png'
					},
					{
						title: 'Gaming News',
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.',
						icon: 'features-icon-3.png'
					},
				]
			}
		}
	}
</script>

<template>
	<section class="features">
		<div class="container">
			<div class="row">
				<div class="col-6"><img src="../assets/img/features-illus.png" alt="gamer" class="gamer-img"></div>
				<div class="col-6">

					<div class="features-content">
						<h4 class="my-font-secondary my-text-primary">The Ultimate Competitive Gaming Platfrom</h4>
						<h1 class="my-font-secondary">Make Your Mark On The Battle Field</h1>
						<p class="my-text-grey">libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.</p>
					</div>

					<div class="feature" v-for="item in features">
						<div class="d-flex gap-4">
							<div class="feature-icon"><img :src="`src/assets/img/icon/${item.icon}`" :alt="item.title"></div>
							<div>
								<h4 class="my-font-secondary mb-3">{{ item.title }}</h4>
								<p>{{ item.description }}</p>
							</div>
						</div>
					</div>

				</div>
			</div>
			<div class="row justify-content-center">
				<AppButton :label="`PLAY NOW`" />
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.features {
		background-color: #000000;
		padding: 120px 0;

		.gamer-img {
			transform: translateX(-350px);
		}
		.features-content {
			h1 {
				font-size: 57px;
			}

			margin-bottom: 35px;
		}

		.feature {
			margin-bottom: 30px;
		}
	}
</style>