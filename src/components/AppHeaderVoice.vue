<script>
	export default {
		props: {
			label: String,
			url: String,
			status: Boolean,
			dropdown: Boolean,
			dropdown_menu: Array
		},
	}
</script>

<template>
	<li :class="dropdown == true ? 'expandable' : ''">
		<a :href="url" :class="dropdown == true ? 'dropdown-toggle' : ''" class="nav-link d-inline-block">{{ label }}</a>
		<ul :class="dropdown == true ? 'dropdown my-translate-25-x list-unstyled my-bg-dark' : ''">
			<li v-for="item in dropdown_menu" class="py-2 px-3 position-relative"><a href="#">{{ item.label }}</a></li>
		</ul>
	</li>
</template>

<style lang="scss" scoped>
	@use './styles/partials/variables' as*;
	@use './styles/partials/mixins' as*;

	li {
		a {
			position: relative;
			color: $light-color;
			text-decoration: none;
		}

		a:hover {
			color: $primary-color;
		}

		ul.dropdown {
			position: relative;
			display: none;
		}
	}

	@media screen and (min-width: 992px) {
		li.expandable:hover {
			ul.dropdown {
				position: absolute;
				display: block;
			}
		}
	}
</style>