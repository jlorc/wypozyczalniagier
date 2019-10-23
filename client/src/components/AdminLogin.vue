<template>
  <div class="login__container">
    <div class="login__wrapper">
      <img src="../assets/logo.png" alt="" class="login__logo">
      <div class="login__box">
        <span class="login__title">Zaloguj się</span>
        <input type="text" class="login__input" placeholder="Login" v-model="login">
        <span class="login__error" v-if="loginError">Proszę podać login.</span>
        <input type="text" class="login__input" placeholder="Hasło" v-model="password">
        <span class="login__error" v-if="passwordError">Proszę podać hasło.</span>
        <span class="login__button" @click="validateData">Zaloguj</span>
      </div>
    </div>
  </div>
</template>

<script>
  import FetchService from "../services/fetchService";

	export default {
		name: "AdminLogin",
    data() {
			return {
				login: '',
        password: '',
        loginError: false,
        passwordError: false,
      }
    },
		methods: {
			validateData() {
				if (!this.login) this.loginError = true;
				if (!this.password) this.passwordError = true;
				if (this.login) this.loginError = false;
				if (this.password) this.passwordError = false;

				if (this.login && this.password) {
					// FetchService.postData('http://localhost:3000/api/game',data);
        }


				console.log('login', this.login);
				console.log('pass', this.password);
			}
		}
	}
</script>

<style lang="less">
  .login {
    &__container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 15px;
    }

    &__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: -150px;
    }

    &__box {
      padding: 35px;
      background-color: #3b3b3b;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      min-width: 280px;
      border-radius: 8px;
    }

    &__logo {
      max-height: 100px;
      margin-bottom: 20px;
    }

    &__title {
      color: white;
      font-size: 24px;
      margin-bottom: 30px;
    }

    &__input {
      max-width: 200px;
      width: 100%;
      padding: 0 10px;
      background: transparent;
      color: white;
      border: 1px solid #dcdcdc;
      border-radius: 3px;
      min-height: 40px;
      margin-bottom: 5px;
      margin-top: 15px;
    }

    &__button {
      display: block;
      color: white;
      background-color: #42b883;
      padding: 10px 30px;
      border-radius: 3px;
      text-align: center;
      margin-top: 20px;
      cursor: pointer;
    }

    &__error {
      color: #fa2f44;
      margin: 5px 0;
      font-size: 14px;
    }
  }
</style>
