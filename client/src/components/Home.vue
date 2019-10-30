<template>
  <div>
    <div class="menu">
      <div class="container menu__wrapper">
        <img src="../assets/logo-games.png" alt="">
        <router-link to="/admin" class="menu__link">Zaloguj</router-link>
      </div>
    </div>
    <div class="container">
      <categories></categories>
      <games-list></games-list>
    </div>
  </div>
</template>

<script>
	import GamesList from "./GamesList";
	import Categories from "./Categories";

	export default {
		name: 'Home',
		data() {
			return {
				list: [],
			};
		},
    components: {
			GamesList,
      Categories
    }
	};
</script>

<style lang="less">
  .container {
    max-width: 1240px;
    margin: auto;
    padding: 0 20px;
  }

  .menu {
    border-bottom: 1px solid #505050;
    padding: 5px 0;

    img {
      max-width: 65px;
    }

    &__wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__link {
      color: #42b883;
      text-decoration: none;
      transition: .3s ease all;

      &:hover {
        color: #53e6a4;
      }
    }
  }
</style>
