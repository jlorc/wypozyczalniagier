<template>
  <div class="popup" :class="{'active': show}">
    <div class="popup__blackout"></div>
    <div class="popup__wrapper" v-if="!showFormStep && !showThankYouStep">
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
      <div class="popup__button-wrapper">
        <span class="popup__button" @click="showForm">Wypożycz</span>
        <p class="popup__game-description popup__game-description--button-info">Pozostałych sztuk: {{ data.quantity }}</p>
      </div>
    </div>
    <div class="popup__wrapper popup__wrapper--form" v-if="showFormStep && !showThankYouStep">
      <h2 class="popup__form-title">Wypożycz grę</h2>
      <p class="popup__form-description">Wypełnij poniższe pola, aby zarezerwować <span>{{ data.game_name }}</span> w naszym salonie.</p>
      <div class="popup__form-content">
        <input type="text" placeholder="Imię" v-model="name">
        <input type="text" placeholder="Nazwisko" v-model="surname">
        <input type="text" placeholder="Numer telefonu" v-model="number">
      </div>
      <span class="popup__error-label" v-if="error">Proszę uzupełnić wszystkie pola!</span>
      <span class="popup__button popup__button--centered" @click="showThankYou">Wypożycz</span>
      <span class="popup__close" @click="hidePopup"></span>
    </div>
    <div class="popup__wrapper popup__wrapper--thank-you" v-if="!showFormStep && showThankYouStep">
      <h2 class="popup__form-title">Gratulacje!</h2>
      <p class="popup__form-description">Udało Ci się zarezerwować grę, zapraszamy do salonu po jej odbiór!</p>
      <span class="popup__close" @click="hidePopup"></span>
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
        showFormStep: false,
				showThankYouStep: false,
        name: null,
        surname: null,
        number: null,
        error: false,
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
      showForm() {
      	this.showFormStep = true;
      },
			showThankYou() {
      	if (this.name && this.surname && this.number) {
					this.showThankYouStep = true;
					this.showFormStep = false;
					this.error = false;
					this.clearFormFields();
        } else {
      		this.error = true;
        }
      },
      clearFormFields() {
      	this.name = null;
      	this.surname = null;
      	this.number = null;
      },
      hidePopup() {
      	this.show = false;
      	setTimeout(() => {
					this.showFormStep = false;
					this.showThankYouStep = false;
        }, 1000);
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

    &__error-label {
      color: #fa2f44;
      margin: 5px 0 35px;
      font-size: 14px;
      text-align: center;
      width: 100%;
    }

    &__form {
      &-title {
        text-align: center;
        width: 100%;
        margin-bottom: 15px;
      }

      &-description {
        text-align: center;
      }

      &-content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        padding: 20px 0 5px;

        input {
          width: 70%;
          background: transparent;
          border: none;
          border-bottom: 1px solid black;
          font-size: 18px;
          padding-bottom: 5px;
          color: black;
          margin-bottom: 25px;

          &:focus {
            outline: none;
          }
        }
      }
    }

    &__button {
      display: block;
      color: white;
      background-color: #42b883;
      padding: 10px 30px;
      border-radius: 3px;
      text-align: center;
      font-size: 18px;
      cursor: pointer;
      transition: 0.3s ease all;

      &--centered {
        margin: auto;
      }

      &-wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: auto;
      }
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

        &--button-info {
          margin-left: 25px;
        }
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

      &--form {
        height: auto;
        max-width: 500px;
      }

      &--thank-you {
        height: auto;
        max-width: 600px;
        min-height: 140px;
      }
    }
  }
</style>
