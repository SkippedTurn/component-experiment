<template>
	<div>
		<h1>This is the TinyComponent:</h1>
		<TinyComponent>
			<template #extraText>
				<span>Here is some extra text</span>
			</template>
		</TinyComponent>
		<hr>
	</div>
</template>

<script>
	import { TinyComponent } from "tiny-component";
	
	export default {
		components: { TinyComponent },
	};
</script>