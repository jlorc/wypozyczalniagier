<template>
  <h1>Admin panel</h1>
</template>

<script>
	export default {
		name: 'AdminPanel',
		data() {
			return {
				title: '',
			};
		},
		mounted() {
			this.init();
		},
		methods: {
			init() {
				console.log('admin panel init');
			}
		}
	};
</script>

<style scoped>
</style>
