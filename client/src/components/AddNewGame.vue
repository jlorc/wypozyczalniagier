<template>
  <div>
    <div class="admin-panel__dashboard-content">
      <div class="admin-panel__dashboard-item" v-for="item in newGame">
        <input v-if="!item.selectMode" type="text" :placeholder="item.placeholder" v-model="item.value" class="admin-panel__dashboard-input">
        <select v-else name="category" id="category" v-model="item.value" class="admin-panel__dashboard-input">
          <option :value="category.category_id" v-for="category in categories">{{ category.category_name }}</option>
        </select>
      </div>
    </div>
    <span class="admin-panel__dashboard-error" v-if="error">Proszę uzupełnić wszystkie pola!</span>
    <span class="admin-panel__dashboard-success" v-if="success">Gra została dodana pomyślnie!</span>
    <span @click="addGame" class="admin-panel__add-button">Dodaj</span>
  </div>
</template>

<script>
	import FetchService from "../services/fetchService";

	export default {
		name: 'AddNewGame',
		data() {
			return {
				error: false,
				success: false,
        categories: [],
				newGame: {
					id: {
						value: null,
						placeholder: 'ID',
					},
					game_name: {
						value: null,
						placeholder: 'Nazwa gry',
					},
					game_description: {
						value: null,
						placeholder: 'Opis gry',
					},
					img_url: {
						value: null,
						placeholder: 'URL do zdjęcia',
					},
					producer: {
						value: null,
						placeholder: 'Producent',
					},
					publisher: {
						value: null,
						placeholder: 'Wydawca',
					},
					category: {
						value: null,
						placeholder: 'Kategoria',
            selectMode: true,
					},
					game_mode: {
						value: null,
						placeholder: 'Tryb gry',
					},
					release_date: {
						value: null,
						placeholder: 'Data wydania',
					},
					rating: {
						value: null,
						placeholder: 'Ocena gry',
					},
					hardware_requirements: {
						value: null,
						placeholder: 'Wymagania sprzętowe',
					},
					quantity: {
						value: null,
						placeholder: 'Ilość',
					},
				}
			};
		},
    mounted() {
			FetchService.fetchData('http://localhost:3000/api/categories').then(categories => {
				this.categories = categories;
			})
    },
		methods: {
			validateAddFields() {
				return (
					this.newGame.id.value &&
					this.newGame.game_name.value &&
					this.newGame.game_description.value &&
					this.newGame.img_url.value &&
					this.newGame.producer.value &&
					this.newGame.publisher.value &&
					this.newGame.category.value &&
					this.newGame.game_mode.value &&
					this.newGame.release_date.value &&
					this.newGame.rating.value &&
					this.newGame.hardware_requirements.value &&
					this.newGame.quantity.value
				);
			},
			clearInputs() {
				this.newGame.id.value = null;
				this.newGame.game_name.value = null;
				this.newGame.game_description.value = null;
				this.newGame.img_url.value = null;
				this.newGame.producer.value = null;
				this.newGame.publisher.value = null;
				this.newGame.category.value = null;
				this.newGame.game_mode.value = null;
				this.newGame.release_date.value = null;
				this.newGame.rating.value = null;
				this.newGame.hardware_requirements.value = null;
				this.newGame.quantity.value = null;
			},
			addGame() {
				const data = {
					'id' : this.newGame.id.value,
					'game_name': this.newGame.game_name.value,
					'game_description': this.newGame.game_description.value,
					'is_rented': 0,
					'img_url': this.newGame.img_url.value,
					'producer': this.newGame.producer.value,
					'publisher': this.newGame.publisher.value,
					'category': this.newGame.category.value,
					'game_mode': this.newGame.game_mode.value,
					'release_date': this.newGame.release_date.value,
					'rating': this.newGame.rating.value,
					'hardware_requirements': this.newGame.hardware_requirements.value,
					'quantity': this.newGame.quantity.value,
				};

				if (!this.validateAddFields()) {
					this.error = true;
					this.success = false;
				}
				if (this.validateAddFields()) {
					this.error = false;
					FetchService.postData('http://localhost:3000/api/game', data).then(res => {
						this.clearInputs();
						this.success = true;
					});
				}
			}
		}
	};
</script>

<style lang="less">
</style>
