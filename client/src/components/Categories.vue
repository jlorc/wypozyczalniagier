<template>
  <div class="categories">
    <div class="categories__wrapper">
      <div v-for="category in categories"
           class="categories__item"
           :class="{'selected': activeCategory === category.category_name}"
           @click="setCategory(category)">{{ category.category_name }}</div>
    </div>
    <h1 class="categories__title">{{ activeCategory }}</h1>
  </div>
</template>

<script>
  import FetchService from "../services/fetchService";

	export default {
		name: 'GamesList',
		data() {
			return {
				defaultCategory: {
					category_id: 0,
          category_name: 'Wszystkie',
        },
				categories: [],
        activeCategory: 'Wszystkie',
			};
		},
    mounted() {
			this.getCategories();
    },
		methods: {
			getCategories() {
				FetchService.fetchData('http://localhost:3000/api/categories').then(categories => {
					this.categories = [this.defaultCategory, ...categories];
        })
      },
			setCategory(selected) {
				this.activeCategory = selected.category_name;
        
				if (selected.category_id === 0) {
					FetchService.fetchData('http://localhost:3000/api/games').then(data => {
						this.$root.$emit('categoryUpdate', data);
					});
				  return;
        }

				FetchService.postData('http://localhost:3000/api/category', {...selected}).then(result => {
					return result.json()
        }).then(list => {
        	this.$root.$emit('categoryUpdate', list);
        })
			}
		}
	};
</script>

<style lang="less">
  .categories {
    &__wrapper {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 40px;
      flex-wrap: wrap;
    }

    &__item {
      padding: 10px 12px;
      margin-bottom: 10px;
      border-radius: 10px;
      text-align: center;
      font-size: 14px;
      margin-right: 20px;
      cursor: pointer;
      background: #505050;
      color: #42b883;
      border-color: #42b883;

      &.selected {
        border: 1px solid #505050;
        background: #42b883;
        color: white;
      }
    }

    &__title {
      margin: 30px 0 10px;
      text-align: center;
      color: white;
    }
  }
</style>
