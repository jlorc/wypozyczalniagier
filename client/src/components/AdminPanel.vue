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
				const data = {
					'id' : 2,
					'game_name': 'test',
					'game_description': 'das',
					'is_rented': '0',
					'img_url': 'das',
					'producer': 'das',
					'publisher': 'das',
					'category': 'das',
					'game_mode': 'das',
					'release_date': 'das',
					'rating': 5,
					'hardware_requirements': 'asdd',
					'quantity': 15,
				};
			}
		}
	};
</script>

<style lang="less">
</style>
