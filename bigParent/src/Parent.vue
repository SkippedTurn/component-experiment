<template>
	<div>
		<h1>This is the TinyComponent:</h1>
		<TinyComponent />
		<hr>
	</div>
</template>

<script>
	import { TinyComponent } from "tiny-component";
	
	export default {
	components: { TinyComponent },
		props: {
			
		},
		setup(props, { emit }) {
			
		}
	};
</script>