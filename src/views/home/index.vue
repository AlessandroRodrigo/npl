<template>
  <div class="fill-height d-flex flex-column align-center justify-center grey lighten-5">
    <v-container fluid class="pa-8" grid-list-lg style="max-width: 900px">
      <h5 class="text-h5 font-weight-light text-left col-8 pa-0">✌ Olá {{ userEmail }}</h5>
      <h5 class="text-h4 text-left col-8 font-weight-bold pa-0">O que vamos fazer hoje?</h5>
      <v-layout justify-center class="mt-8">
        <v-flex lg8>
          <v-hover v-slot:default="{ hover }">
            <v-card
              @click="$router.push('/data-table')"
              height="280px"
              class="pa-4 rounded-lg default-box-shadow default-card first d-flex flex-column"
              lg8
              v-ripple
            >
              <div class="d-flex align-center justify-end">
                <div class="pa-4 rounded-lg" :class="hover ? 'primary darken-1' : 'grey lighten-4'">
                  <v-icon :color="hover ? 'white' : 'grey'"> mdi-arrow-right </v-icon>
                </div>
              </div>
              <div class="mt-auto text-left">
                <h3 class="font-weight-bold default-title">Tabela de gerenciamento</h3>
                <p class="default-description">Vamos lá, vamos gerenciar vários usuários!</p>
              </div>
            </v-card>
          </v-hover>
        </v-flex>
        <v-flex lg8>
          <v-hover v-slot:default="{ hover }">
            <v-card
              height="280px"
              class="pa-4 rounded-lg default-box-shadow default-card second d-flex flex-column"
              lg8
              v-ripple
            >
              <div class="d-flex align-center justify-end">
                <div class="pa-4 rounded-lg" :class="hover ? 'primary darken-1' : 'grey lighten-4'">
                  <v-icon :color="hover ? 'white' : 'grey'"> mdi-arrow-right </v-icon>
                </div>
              </div>
              <div class="mt-auto text-left">
                <h3 class="font-weight-bold default-title">Chat</h3>
                <p class="default-description">
                  Olá, tudo bem? Desculpem, esse desafio não tive tempo de concluir, mas não tenham dúvidas de que
                  conseguiria :). Trabalho em horário comercial, faço alguns freelas e estou em semana de provas. Apesar
                  de estar bastante corrido, tentei fazer até aqui com excelência. Espero que tenha agradado. Foi um
                  prazer participar, espero nos ver novamente.
                </p>
              </div>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    userEmail() {
      const user = JSON.parse(sessionStorage.getItem('user'));
      return user.email;
    },
  },
};
</script>

<style scoped lang="scss">
@import '../../styles/colors';

.default-card {
  transition: all 0.2s ease;
  cursor: pointer;
  user-select: none;
  border: 1px solid #eee;
  position: relative;
  overflow-y: hidden;

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 30px 25px 0 rgba(0, 0, 0, 0.05) !important;
    background-color: $primary;
    color: white !important;
  }

  &.first {
    background-image: url('https://842930.smushcdn.com/1760858/wp-content/uploads/2020/07/grainy-03-education.png?lossy=1&strip=1&webp=1');
    background-size: 50%;
    background-position: left top;
    background-blend-mode: multiply;

    .default-title {
      transition: transform 0.2s ease;
      transform: translateY(25px);
    }

    .default-description {
      opacity: 0.7;
      margin-bottom: 0;
      transform: translateY(60px);
      transition: transform 0.2s ease;
    }

    &:hover {
      .default-description {
        transform: translateY(0);
      }

      .default-title {
        transform: translateY(0);
      }
    }
  }

  &.second {
    background-image: url('https://842930.smushcdn.com/1760858/wp-content/uploads/2020/07/grainy-08-design.png?lossy=1&strip=1&webp=1');
    background-size: 50%;
    background-position: left top;
    background-blend-mode: multiply;

    .default-title {
      transition: transform 0.2s ease;
      transform: translateY(163px);
    }

    .default-description {
      opacity: 0.7;
      margin-bottom: 0;
      transform: translateY(300px);
      transition: transform 0.2s ease;
    }

    &:hover {
      .default-description {
        transform: translateY(0);
      }

      .default-title {
        transform: translateY(0);
      }
    }
  }
}
</style>
