<template>
  <div class="container">
    <h1>Wypożyczalnia gier</h1>
    <ul class="box">
      <li v-for="item in list" class="box__content">
        <span>{{ item.id}}</span>
        <span>{{ item.game_name}}</span>
        <p>{{ item.game_description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import FetchService from "../services/fetchService";

export default {
  name: 'GamesList',
  data() {
    return {
      list: [],
    };
  },
  mounted() {
  	this.init();
	},
  methods: {
  	init() {
			FetchService.fetchData('http://localhost:3000/api/games').then(data => {
				this.list = data;
				console.log(this.list);
      });
		}
  }
};
</script>

<style lang="less">
  .box {
    background: red;
    padding: 30px;

    &__content {
      background: green;
    }
  }
</style>
