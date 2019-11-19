<template>
  <div class="admin-panel">
    <div class="admin-panel__menu">
      <div class="admin-panel__logo">
        <router-link to="/"><img src="../assets/logo-games.png" alt=""></router-link>
      </div>
      <span class="admin-panel__name">Admin</span>
      <div class="admin-panel__menu-wrapper">
        <div class="admin-panel__item" @click="changeTab('home')">
          <svg class="admin-panel__item-icon" height="512pt" viewBox="0 -38 512.001 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m425.519531 313.664062c-3.742187 0-7.476562.265626-11.175781.742188v-32.539062c0-4.140626-3.355469-7.5-7.5-7.5-4.140625 0-7.5 3.359374-7.5 7.5v69.769531c-.519531-.015625-1.035156-.039063-1.558594-.039063-5.6875 0-11.1875.828125-16.394531 2.34375v-71.3125c0-9.800781-7.972656-17.773437-17.773437-17.773437h-18.488282c-9.800781 0-17.773437 7.972656-17.773437 17.773437v79.839844h-22.992188v-79.839844c0-9.800781-7.972656-17.773437-17.769531-17.773437h-79.859375c-9.800781 0-17.773437 7.972656-17.773437 17.773437v79.839844h-22.988282v-79.839844c0-9.800781-7.976562-17.773437-17.773437-17.773437h-18.488281c-9.800782 0-17.773438 7.972656-17.773438 17.773437v79.839844h-17.957031v-153.613281l152.679687-137.082031 152.683594 137.082031v40.351562c0 4.140625 3.359375 7.5 7.5 7.5 4.144531 0 7.5-3.359375 7.5-7.5v-26.882812l2.761719 2.476562c7.292969 6.546875 18.550781 5.941407 25.097656-1.351562l17.15625-19.109375c6.546875-7.292969 5.941406-18.550782-1.351563-25.097656l-81.984374-73.605469c-3.082032-2.769531-7.824219-2.511719-10.59375.566406-2.765626 3.085937-2.511719 7.824219.570312 10.59375l81.988281 73.609375c1.136719 1.019531 1.230469 2.777344.210938 3.914062l-17.160157 19.109376c-1.019531 1.136718-2.777343 1.230468-3.914062.210937l-175.453125-157.527344c-2.851563-2.558593-7.167969-2.558593-10.019531 0l-175.453125 157.523438c-.746094.667969-1.578125.730469-2.003907.707031-.425781-.023438-1.246093-.171875-1.914062-.917969l-17.15625-19.105469c-1.019531-1.140624-.925781-2.894531.210938-3.917968l190.894531-171.390625c5.945312-5.335938 14.917969-5.335938 20.863281 0l84.59375 75.949219c3.082031 2.769531 7.824219 2.511718 10.589844-.566407 2.769531-3.085937 2.511718-7.824219-.566406-10.59375l-84.597657-75.949219c-11.660156-10.46875-29.242187-10.46875-40.902343 0l-190.894532 171.390626c-7.292968 6.546874-7.898437 17.804687-1.351562 25.097656l17.15625 19.109375c3.171875 3.53125 7.527344 5.617187 12.269531 5.871093.328125.019532.652344.027344.976563.027344 4.386718 0 8.5625-1.597656 11.851562-4.546875l2.761719-2.480469v91.667969c-16.195313 1.378907-31.476563 7.21875-44.578125 17.117188-3.304688 2.496093-3.960938 7.199219-1.460938 10.503906 1.472656 1.953125 3.71875 2.980469 5.988282 2.980469 1.574218 0 3.164062-.496094 4.515624-1.515625 10.46875-7.910157 22.632813-12.679688 35.535157-14.011719v92.625h-60.675781c-2.195313-6.9375-3.304688-14.164062-3.304688-21.546875 0-12.167969 3.125-24.195313 9.035156-34.78125 2.019532-3.617187.726563-8.183594-2.890625-10.207031-3.617187-2.015625-8.1875-.722656-10.203125 2.894531-7.160156 12.816406-10.941406 27.371094-10.941406 42.09375 0 10.980469 2.03125 21.683594 6.039062 31.808594 1.132813 2.863281 3.898438 4.742187 6.976563 4.742187h485.96875c3.078125 0 5.84375-1.878906 6.976563-4.742187 4.007812-10.125 6.039062-20.828125 6.039062-31.808594 0-47.683594-38.796875-86.476563-86.480469-86.476563zm-83.164062-31.035156c0-1.527344 1.242187-2.769531 2.773437-2.769531h18.488282c1.527343 0 2.773437 1.242187 2.773437 2.769531v78.097656c-.878906.558594-1.742187 1.140626-2.585937 1.742188h-21.449219zm6.769531 94.839844c-6.363281 9.386719-10.085938 20.703125-10.085938 32.875 0 3.839844.375 7.632812 1.105469 11.347656h-35.78125v-44.222656zm-142.394531-97.609375h79.859375c1.527344 0 2.773437 1.242187 2.773437 2.769531v139.0625h-85.402343v-139.0625c0-1.527344 1.242187-2.769531 2.769531-2.769531zm-79.796875 2.769531c0-1.527344 1.246094-2.769531 2.773437-2.769531h18.488281c1.527344 0 2.773438 1.242187 2.773438 2.769531v79.839844h-24.035156zm-32.953125 139.0625v-44.222656h94.980469v44.222656zm312.863281 0h-51.320312c-.984376-3.679687-1.480469-7.480468-1.480469-11.347656 0-24.121094 19.621093-43.746094 43.742187-43.746094s43.746094 19.625 43.746094 43.746094c0 3.871094-.496094 7.667969-1.480469 11.347656zm86.851562 0h-38.265624c.726562-3.714844 1.101562-7.507812 1.101562-11.347656 0-26.644531-17.835938-49.1875-42.1875-56.355469v-24.449219c3.679688-.578124 7.425781-.875 11.175781-.875 39.414063 0 71.480469 32.0625 71.480469 71.476563 0 7.382813-1.109375 14.609375-3.304688 21.550781zm0 0"/><path d="m272.34375 366.78125c4.144531 0 7.5-3.359375 7.5-7.5v-8.507812c0-4.140626-3.355469-7.5-7.5-7.5s-7.5 3.359374-7.5 7.5v8.507812c0 4.140625 3.355469 7.5 7.5 7.5zm0 0"/><path d="m198.117188 190.847656c0 26.769532 21.777343 48.546875 48.542968 48.546875 26.769532 0 48.546875-21.777343 48.546875-48.546875 0-26.765625-21.777343-48.542968-48.546875-48.542968-26.765625 0-48.542968 21.777343-48.542968 48.542968zm82.089843 0c0 18.5-15.046875 33.546875-33.546875 33.546875-18.496094 0-33.542968-15.046875-33.542968-33.546875 0-18.496094 15.046874-33.542968 33.542968-33.542968 18.5 0 33.546875 15.046874 33.546875 33.542968zm0 0"/></svg>
          <span class="admin-panel__item-name">Panel główny</span>
        </div>
        <div class="admin-panel__item" @click="changeTab('add')">
          <svg class="admin-panel__item-icon admin-panel__item-icon--plus" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 52 52" style="enable-background:new 0 0 52 52;" xml:space="preserve"><g><path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26 S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"/><path d="M38.5,25H27V14c0-0.553-0.448-1-1-1s-1,0.447-1,1v11H13.5c-0.552,0-1,0.447-1,1s0.448,1,1,1H25v12c0,0.553,0.448,1,1,1 s1-0.447,1-1V27h11.5c0.552,0,1-0.447,1-1S39.052,25,38.5,25z"/></g></svg>
          <span class="admin-panel__item-name">Dodaj grę</span>
        </div>
        <div class="admin-panel__item" @click="changeTab('stats')">
          <svg class="admin-panel__item-icon admin-panel__item-icon--stats" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"></path></svg>
<!--          <svg class="admin-panel__item-icon admin-panel__item-icon&#45;&#45;plus" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 52 52" style="enable-background:new 0 0 52 52;" xml:space="preserve"><g><path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26 S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"/><path d="M38.5,25H27V14c0-0.553-0.448-1-1-1s-1,0.447-1,1v11H13.5c-0.552,0-1,0.447-1,1s0.448,1,1,1H25v12c0,0.553,0.448,1,1,1 s1-0.447,1-1V27h11.5c0.552,0,1-0.447,1-1S39.052,25,38.5,25z"/></g></svg>-->
          <span class="admin-panel__item-name">Statystyki</span>
        </div>
      </div>
    </div>
    <div class="admin-panel__dashboard">
      <div v-if="currentTab === 'home'" class="admin-panel__dashboard-box">
        <h1 class="admin-panel__dashboard-title">Wypożyczone gry</h1>
        <rented-games></rented-games>
      </div>
      <div v-if="currentTab === 'add'" class="admin-panel__dashboard-box">
        <h1 class="admin-panel__dashboard-title">Dodaj grę</h1>
        <add-new-game></add-new-game>
      </div>
      <div v-if="currentTab === 'stats'" class="admin-panel__dashboard-box">
        <h1 class="admin-panel__dashboard-title">Statystyki</h1>
        <quantity-rented></quantity-rented>
      </div>
    </div>
  </div>
</template>

<script>
  import AddNewGame from "./AddNewGame";
	import RentedGames from "./RentedGames";
	import QuantityRented from "./QuantityRented";

	export default {
		name: 'AdminPanel',
		components: {
			RentedGames,
			AddNewGame,
			QuantityRented
    },
		data() {
			return {
				currentTab: 'home',
			};
		},
		methods: {
			changeTab(name) {
				this.currentTab = name;
      },
		}
	};
</script>

<style lang="less">
  .admin-panel {
    display: flex;
    height: 100vh;
    overflow: hidden;

    &__add-button {
      display: block;
      color: white;
      background-color: #42b883;
      padding: 10px 30px;
      border-radius: 3px;
      text-align: center;
      margin: 20px auto 0;
      cursor: pointer;
      max-width: 200px;
      font-size: 18px;
      transition: .3s ease all;

      &:hover {
        background-color: #53e6a4;
      }
    }

    &__menu {
      border-right: 1px solid #505050;
      max-width: 280px;
      width: 100%;
      box-shadow: 1px 0px 33px -9px rgba(255,255,255,0.83);

      &-wrapper {
        margin-top: 50px;
        height: 100%;
      }
    }

    &__dashboard {
      width: 100%;
      padding: 40px 50px;

      &-error {
        color: #fa2f44;
        margin: 5px 0;
        font-size: 14px;
      }

      &-success {
        color: #42b883;
        margin: 5px 0;
        font-size: 14px;
      }

      &-title {
        color: white;
      }

      &-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 60px;
      }

      &-item {
        width: 48%;
        margin-bottom: 35px;
      }

      &-input {
        width: 100%;
        background: transparent;
        border: none;
        border-bottom: 1px solid #505050;
        font-size: 18px;
        padding-bottom: 5px;
        color: white;

        &:focus {
          outline: none;
        }
      }
    }

    &__logo {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #505050;
      margin: 20px auto;
      box-shadow: 1px 0px 17px -9px rgba(255,255,255,0.83);

      img {
        width: 100%;
        max-width: 90px;
      }
    }

    &__name {
      color: white;
      font-size: 26px;
      display: block;
      width: 100%;
      text-align: center;
    }

    &__item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 15px 10px;
      box-shadow: 1px 0px 11px -9px rgba(255, 255, 255, 0.83);
      cursor: pointer;

      &:hover {
        box-shadow: 1px 0px 17px -9px rgba(255, 255, 255, 0.83);
      }

      &-icon {
        width: 50px;
        height: 50px;
        fill: white;

        &--plus {
          width: 40px;
          height: 40px;
          margin: 0 5px;
        }

        &--stats {
          width: 40px;
          height: 40px;
          margin: 0 5px;

          path {
            fill: white;
          }
        }
      }

      &-name {
        color: white;
        margin-left: 15px;
      }
    }
  }
</style>
