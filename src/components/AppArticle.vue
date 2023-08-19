<script>
	export default {
		props: {
			title: String,
			reading_time: Number,
			views: Number,
			date: String,
			article_img: String,
			big_article: Boolean
		},
	}
</script>

<template>
	<div v-if="big_article == true" class="article big-article">
		<img :src="'src/assets/img/blog/' + article_img" :alt="title" class="article-img" />
		<div class="article-info">
			<div class="d-flex article-header my-text-primary">
				<span><img src="src/assets/img/icon/clock.png" alt="{{ title }}">{{ reading_time }} Min</span>
				<span><img src="src/assets/img/icon/eye.png" alt="{{ title }}">{{ views }}</span>
				<span><img src="src/assets/img/icon/calendar.png" alt="{{ title }}">{{ date }}</span>
			</div>

			<h4>{{ title }}</h4>
		</div>
	</div>
	<div v-else class="article">
		<img :src="'src/assets/img/blog/' + article_img" :alt="title" class="article-img" />
		<div class="article-info">
			<div class="d-flex article-header my-text-primary">
				<span><img src="src/assets/img/icon/clock.png" alt="{{ title }}">{{ reading_time }} Min</span>
				<span><img src="src/assets/img/icon/eye.png" alt="{{ title }}">{{ views }}</span>
				<span><img src="src/assets/img/icon/calendar.png" alt="{{ title }}">{{ date }}</span>
			</div>

			<h5>{{ title }}</h5>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@use './styles/partials/variables' as*;
	@use './styles/partials/mixins' as*;

	.article {
		background-color: $secondary-background;
		display: flex;
		border-radius: 20px;

		.article-img {
			height: 100%;
			border-radius: 20px;
		}
		.article-info {
			padding: 25px 30px;

			.article-header {
				align-items: center;
				margin-bottom: 20px;

				span {
					display: flex;
					align-items: center;
					margin-right: 25px;

					img {
						margin-right: 10px;
					}
				}
			}

			h5 {
				font-size: 24px;
				line-height: 31.2px;
				margin-top: -6px;
				font-family: $secondary-font;
				text-align: left;
			}
		}
		
	}

	.article.big-article {

		.article-img {
			width: 100%;
		}
		.article-info {
			h4 {
				font-size: 32px;
				line-height: 41.6px;
				margin-top: -8px;
				font-family: $secondary-font;
				text-align: left;
			}
		}
	}
</style>