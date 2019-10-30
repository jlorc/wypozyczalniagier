<template>
  <div class="popup">
    {{ data }}
  </div>
</template>

<script>
	export default {
		name: 'Popup',
		data() {
			return {
				data: [],
			};
		},
		mounted() {
			this.handlePopup();
		},
		methods: {
			handlePopup() {
				this.$root.$on('showGameDetails', this.showPopup);
      },
      showPopup(data) {
				this.data = data;
      }
		}
	};
</script>

<style lang="less">
  .popup {
  }
</style>
