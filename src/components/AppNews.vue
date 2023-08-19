<script>
	import AppArticle from './AppArticle.vue';
	export default {
		components: {
			AppArticle
		},

		data() {
			return {
				articles: [
					{
						title: 'Secrets To An Amazing Role Playing Game',
						reading_time: 10,
						views: 240,
						date: 'Apr 11,2022',
						article_img: 'blog-item-1.png',
						big_article: true
					},
					{
						title: 'Top 240 Most Important Aspects Of Your Game',
						reading_time: 10,
						views: 240,
						date: 'Apr 11,2022',
						article_img: 'blog-item-2.png',
						big_article: false
					},
					{
						title: 'The Rise Of Fantasy Sports And Online Games',
						reading_time: 10,
						views: 240,
						date: 'Apr 11,2022',
						article_img: 'blog-item-3.png',
						big_article: false
					},
					{
						title: 'Benefits Of Gaming - PC And Video Games',
						reading_time: 10,
						views: 240,
						date: 'Apr 11,2022',
						article_img: 'blog-item-4.png',
						big_article: false
					},
				]
			}
		}
	}
</script>

<template>
	<div class="news">
		<div class="container">
			<div class="row justify-content-center">
				<div class="news-info col-7">
					<h5>Latest News</h5>
					<h1>Stay Updated With Our Latest News Articles</h1>
					<p>libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.</p>
				</div>
			</div>
			<div class="row">
				<div class="articles">
					<AppArticle v-for="item in articles" 
						:title="item.title" 
						:reading_time="item.reading_time"
						:views="item.views"
						:date="item.date"
						:article_img="item.article_img"
						:big_article="item.big_article"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@use './styles/partials/variables' as*;
	@use './styles/partials/mixins' as*;

	.news {
		padding: 120px 0;
		text-align: center;
		
		.news-info {
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

		.articles {
			display: grid;
			grid-template-columns: calc(50% - 0.5em) calc(50% - 0.5em);
			gap: 1em;

			.article {
				align-items: flex-start;

				.article-info {

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
				grid-row: 1 / span 3;
				flex-direction: column;

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
		}
	}
</style>