<template>
  <div class="admin-panel__dashboard-content">
    <table class="rented-table">
      <thead>
      <tr>
        <th v-for="item in headers">{{ item }}</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" v-if="list">
          <td>{{ item.id }}</td>
          <td>{{ item.game_name }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.rented_counter }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
	import FetchService from "../services/fetchService";

	export default {
		name: 'RentedGames',
		data() {
			return {
				headers: ['ID', "Nazwa gry", "Pozostałych sztuk do wypożyczenia", "Wypożyczone sztuki"],
				list: [],
			};
		},
		mounted() {
			this.init();
		},
		methods: {
			init() {
				return FetchService.fetchData('http://localhost:3000/api/quantityRented').then(data => {
					this.list = data;
				});
			},
		}
	};
</script>

<style lang="less"></style>
