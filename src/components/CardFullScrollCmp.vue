<template>
	
	<div class="elevation-1" style="height:100%; display:flex; flex-direction:column; padding:16px; background-color:#FFFFFF;">

		<div style="background-color:#FFFFFF; z-index:1; position:sticky; top:64px;">
			<slot name="head"></slot>
		</div>

		<div style="flex:1; padding:8px 0px 8px 0px; overflow-y:auto; margin-bottom: 10px;">
			<slot name="body"></slot>
		</div>

		<div style="background-color:#FFFFFF; z-index:1; position:sticky; bottom: 36px;">
			<slot name="footer"></slot>
		</div>

	</div>

</template>


<script>
export default {
	name: 'card-full-scroll-cmp',

	props: {
		title: {
			type: String,
		},
	},
}
</script>
