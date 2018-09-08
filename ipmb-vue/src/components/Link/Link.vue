<template>
	<div class="link">
		<div :style="setStyle">{{ label }}</div>
	</div>
</template>

<script>
export default {
	name: "links",
	props: {
		label: {
			type: String,
			required: false,
			default: "Link",
		},
		fontColor: {
			type: String,
			required: false,
			default: "red",
		},
		fontSize: {
			type: Number,
			required: false,
			default: 1,
		}
	},
	computed: {
		setStyle: function() {
			return {
				color: this.fontColor,
				fontSize: this.fontSize + "em",
			}
		}
	}
}
</script>

<style lang="scss">
@import './link.scss';
</style>
