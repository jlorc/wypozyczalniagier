<template>
  <div class="games-list__container">
    <div v-for="item in list" class="games-list__box">
      <img :src="item.img_url"/>
      <span class="games-list__name">{{ item.game_name }}</span>
    </div>
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
  .games-list {
    &__container {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      margin-top: 50px;
    }

    &__box {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 6px;
      box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.83);
      width: 135px;
      padding: 10px 15px;
      box-sizing: border-box;
      margin: 0 15px 25px;
      cursor: pointer;

      img {
        max-width: 110px;
      }
    }

    &__name {
      color: white;
      font-size: 14px;
      margin-top: 10px;
      display: block;
      text-align: center;
    }
  }
</style>
