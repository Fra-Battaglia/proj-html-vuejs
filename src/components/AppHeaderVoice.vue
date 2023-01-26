<script>
	export default {
		props: {
			label: String,
			url: String,
			status: Boolean,
			dropdown: Boolean,
			dropdown_menu: Array
		}
	}
</script>

<template>
	<li>
		<a :href="url" class="nav-link d-inline-block">{{ label }}</a>
		<ul class="dropdown position-absolute my-translate-25-x list-unstyled my-bg-dark">
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
			display: none;
		}
	}

	li.dropdown-toggle:hover {
		ul.dropdown {
			display: block;
		}
	}
</style>