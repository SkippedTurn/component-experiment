<template>
	<div>
		<input ref="tinyInput">
		<button @click="focusInput">
			Click me to focus the input!
		</button>
		<slot name="extraText"></slot>
	</div>
</template>

<script>
	export default {
		methods: {
			focusInput() {
				this.$refs.tinyInput.focus();
			}
		}
	};
</script>
