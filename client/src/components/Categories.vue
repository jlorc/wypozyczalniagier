<template>
  <div class="categories">
    <div class="categories__wrapper">
      <div v-for="category in categories"
           class="categories__item"
           :class="{'selected': activeCategory === category}"
           @click="setCategory(category)">{{ category }}</div>
    </div>
    <h1 class="categories__title">{{ activeCategory }}</h1>
  </div>
</template>

<script>
	export default {
		name: 'GamesList',
		data() {
			return {
				categories: ['Wszystkie', 'Strategiczne'],
        activeCategory: 'Wszystkie',
			};
		},
		methods: {
			setCategory(selected) {
				this.activeCategory = selected;
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
    }

    &__item {
      padding: 10px 12px;
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
