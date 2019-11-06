<template>
  <div class="admin-panel__dashboard-content">
    <table class="rented-table">
      <thead>
        <tr>
          <th v-for="item in headers">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" v-if="list">
          <td>{{ item.id }}</td>
          <td>{{ item.game_id }}</td>
          <td>{{ item.game_name }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.surname }}</td>
          <td>{{ item.phone_number }}</td>
          <td>
            <span class="rented-table__delete">
              <svg class="rented-table__delete-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="482.428px" height="482.429px" viewBox="0 0 482.428 482.429" style="enable-background:new 0 0 482.428 482.429;" xml:space="preserve"><g><g><path d="M381.163,57.799h-75.094C302.323,25.316,274.686,0,241.214,0c-33.471,0-61.104,25.315-64.85,57.799h-75.098 c-30.39,0-55.111,24.728-55.111,55.117v2.828c0,23.223,14.46,43.1,34.83,51.199v260.369c0,30.39,24.724,55.117,55.112,55.117 h210.236c30.389,0,55.111-24.729,55.111-55.117V166.944c20.369-8.1,34.83-27.977,34.83-51.199v-2.828 C436.274,82.527,411.551,57.799,381.163,57.799z M241.214,26.139c19.037,0,34.927,13.645,38.443,31.66h-76.879 C206.293,39.783,222.184,26.139,241.214,26.139z M375.305,427.312c0,15.978-13,28.979-28.973,28.979H136.096 c-15.973,0-28.973-13.002-28.973-28.979V170.861h268.182V427.312z M410.135,115.744c0,15.978-13,28.979-28.973,28.979H101.266 c-15.973,0-28.973-13.001-28.973-28.979v-2.828c0-15.978,13-28.979,28.973-28.979h279.897c15.973,0,28.973,13.001,28.973,28.979 V115.744z"/><path d="M171.144,422.863c7.218,0,13.069-5.853,13.069-13.068V262.641c0-7.216-5.852-13.07-13.069-13.07 c-7.217,0-13.069,5.854-13.069,13.07v147.154C158.074,417.012,163.926,422.863,171.144,422.863z"/><path d="M241.214,422.863c7.218,0,13.07-5.853,13.07-13.068V262.641c0-7.216-5.854-13.07-13.07-13.07 c-7.217,0-13.069,5.854-13.069,13.07v147.154C228.145,417.012,233.996,422.863,241.214,422.863z"/><path d="M311.284,422.863c7.217,0,13.068-5.853,13.068-13.068V262.641c0-7.216-5.852-13.07-13.068-13.07 c-7.219,0-13.07,5.854-13.07,13.07v147.154C298.213,417.012,304.067,422.863,311.284,422.863z"/></g></g></svg>
            </span>
          </td>
        </tr>
        <tr v-if="!list.length">
          <td colspan="7">Brak wypożyczonych gier</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
	import FetchService from "../services/fetchService";

	export default {
		name: 'RentedGames',
		data() {
			return {
				headers: ['ID', "ID gry", "Nazwa gry", "Imię", "Nazwisko", "Numer telefonu", "Usuń"],
        list: [],
			};
		},
    mounted() {
			this.init();
    },
		methods: {
			init() {
				FetchService.fetchData('http://localhost:3000/api/rented').then(data => {
					this.list = data;
				});
      }
		}
	};
</script>

<style lang="less">
  .rented-table {
    width: 100%;
    border-collapse: collapse;

    &__delete {
      cursor: pointer;

      &-icon {
        width: 30px;
        height: 30px;
        font-size: 30px;
        fill: red;
      }
    }

    thead {
      th {
        color: white;
        text-align: center;
        padding-bottom: 25px;
      }
    }

    tbody {
      tr {
        border: 1px solid #505050;
        border-radius: 5px;

        &:hover {
          box-shadow: 1px 0px 17px -9px rgba(255, 255, 255, 0.83);
        }
      }

      td {
        color: white;
        text-align: center;
        padding: 10px 0;
      }
    }
  }
</style>
