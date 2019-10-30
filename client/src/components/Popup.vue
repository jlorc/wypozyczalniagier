<template>
  <div class="popup" :class="{'active': show}">
    <div class="popup__blackout"></div>
    <div class="popup__wrapper">
      <img :src="data.img_url" alt="">
      <span>{{ data.game_name }}</span>
      <p>{{ data.game_description}}</p>
      <span>Producent: {{ data.producer }}</span>
      <span>Wydawca: {{ data.publisher }}</span>
      <span>Tryby gry: {{ data.game_mode }}</span>
      <span>Data wydania: {{ data.release_date }}</span>
      <span>Ocena: {{ data.rating }}</span>
      <span>Wymagania sprzętowe: {{ data.hardware_requirements }}</span>
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
      }
    }
  };
</script>

<style lang="less">
  .popup {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
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
      height: 70%;
      max-width: 80%;
      background-color: white;

      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
    }
  }
</style>
