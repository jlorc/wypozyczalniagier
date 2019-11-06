<template>
  <div class="popup" :class="{'active': show}">
    <div class="popup__blackout"></div>
    <div class="popup__wrapper">
      <div class="popup__content">
        <img :src="data.img_url" class="popup__game-image">
        <div class="popup__info">
          <h2 class="popup__game-name">{{ data.game_name }}</h2>
          <div class="popup__info-wrapper">
            <span class="popup__game-info">Producent: {{ data.producer }}</span>
            <span class="popup__game-info">Wydawca: {{ data.publisher }}</span>
            <span class="popup__game-info">Tryby gry: {{ data.game_mode }}</span>
            <span class="popup__game-info">Data wydania: {{ data.release_date }}</span>
          </div>
        </div>
        <div class="popup__game-rating">
          <span class="rating-title">Ocena gry</span>
          <span class="rating-number">{{ data.rating }}</span>
        </div>
      </div>
      <span class="popup__game-subtitle">Opis gry</span>
      <p class="popup__game-description">{{ data.game_description}}</p>
      <span class="popup__game-subtitle">Wymagania sprzętowe</span>
      <p class="popup__game-description">{{ data.hardware_requirements }}</p>
      <span class="popup__close" @click="hidePopup"></span>
      <span class="popup__button">Wypożycz</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Popup',
    data() {
      return {
        data: [],
        show: false,
      };
    },
    mounted() {
      this.handlePopup();
    },
    methods: {
      handlePopup() {
        this.$root.$on('showGameDetails', this.showPopup);
      },
      showPopup(data) {
        this.data = data;
        this.show = true;
        document.body.classList.add('no-scroll');
      },
      hidePopup() {
      	this.show = false;
				document.body.classList.remove('no-scroll');
      }
    }
  };
</script>

<style lang="less">
  .popup {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    visibility: hidden;
    transition: 0.7s ease all;

    &.active {
      opacity: 1;
      visibility: visible;
    }

    &__button {
      display: block;
      color: white;
      background-color: #42b883;
      padding: 10px 30px;
      border-radius: 3px;
      text-align: center;
      margin-top: auto;
      font-size: 18px;
      cursor: pointer;
      transition: 0.3s ease all;
    }

    &__close {
      position: absolute;
      right: 0;
      top: -35px;
      width: 25px;
      height: 25px;
      cursor: pointer;

      &:before {
        content: "\002B";
        color: white;
        font-size: 50px;
        width: 25px;
        height: 25px;
        transform: rotate(45deg);
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    &__content {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;
    }

    &__info {
      padding: 0 35px;
      width: 100%;

      &-wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
      }
    }

    &__game {
      &-subtitle {
        font-size: 22px;
        display: block;
        margin: 25px 0 15px;
      }

      &-name {
        font-size: 30px;
        margin-top: 0;
        margin-bottom: 30px;
      }

      &-description {
        font-size: 16px;
        margin: 0;
      }

      &-image {
        width: 160px;
        min-width: 160px;
        height: 210px;
      }

      &-info {
        margin-bottom: 15px;
        font-size: 16px;
      }

      &-rating {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: radial-gradient(circle,#00c205,#008903);
        padding: 5px;
        height: 110px;
        width: 99px;
        min-width: 99px;

        .rating-title {
          font-size: 16px;
          line-height: 14px;
          padding-top: 8px;
          height: 21px;
          color: white;
        }

        .rating-number {
          font-size: 48px;
          line-height: 56px;
          letter-spacing: -2px;
          height: 56px;
          color: white;
        }
      }
    }

    &__blackout {
      background-color: black;
      opacity: 0.6;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
    }

    &__wrapper {
      padding: 30px;
      border-radius: 10px;
      min-height: 300px;
      min-width: 350px;
      height: 72%;
      max-width: 80%;
      background-color: white;
      z-index: 10;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      position: relative;
    }
  }
</style>
