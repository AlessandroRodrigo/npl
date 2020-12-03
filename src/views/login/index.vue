<template>
  <v-layout fill-height class="flex-fill" style="min-height: 100vh">
    <v-flex class="d-flex justify-center align-center">
      <v-form class="col-10" v-model="formData.validate" @submit.prevent="controller.submitFormHandler()">
        <div class="mb-8 d-flex justify-space-between align-center">
          <h3 class="text-h3 font-weight-bold text-left col-6 pa-0">Acesse a plataforma.</h3>
          <v-menu right bottom offset-x nudge-bottom="55px">
            <template v-slot:activator="{on}">
              <div v-on="on" class="grey lighten-3 pa-4 rounded-lg" style="cursor: pointer" v-ripple>
                <v-icon>mdi-information-variant</v-icon>
              </div>
            </template>

            <v-card class="pa-8 text-left rounded-lg" max-width="600" elevation="0">
              <h3 class="font-weight-bold text--secondary">
                Por que esse formulário existe?
              </h3>
              <p class="text--secondary font-weight-light mb-0 mt-2">
                Esse formulário faz parte do teste prático e é a realização do item 9 de sessão logada. Você insere seus
                dados e o formulário vai simular uma requisição onde recuperaria o token de acesso e realizaria o
                gerenciamento da sessão
              </p>

            </v-card>
          </v-menu>

        </div>
        <v-text-field :rules="[formRules.required]" v-model="formData.email" class="rounded-lg" type="mail"
                      label="E-mail"
                      placeholder="seuemail@algumacoisa.com" filled/>
        <v-text-field :rules="[formRules.required]" v-model="formData.password" class="rounded-lg" type="password"
                      label="Senha"
                      placeholder="********" filled/>
        <v-btn :disabled="!formData.validate" :loading="formData.loading" type="submit" elevation="0" color="primary"
               large block
               class="mt-4 d-flex align-center rounded-lg"
               height="52px">
          Acessar plataforma
          <v-icon class="ml-4">
            mdi-logout
          </v-icon>
        </v-btn>
        <v-slide-y-transition>
          <v-snackbar :timeout="1500" :color="formData.feedback.type" v-model="formData.feedback.visible" bottom>
            <div class="font-weight-bold">
              {{ formData.feedback.message }}
            </div>
          </v-snackbar>
        </v-slide-y-transition>
      </v-form>
    </v-flex>
    <v-flex lg8>
      <v-img height="100%" src="https://w.wallhaven.cc/full/pk/wallhaven-pk37qp.jpg">
        <div class="d-flex flex-column align-end justify-start">
          <div class="col-6 pa-8 text-right d-flex flex-column align-end">
            <h2 class="text-h2 font-weight-bold white--text">Por que esta imagem está aqui?</h2>
            <p class="shrink mt-2 font-weight-light white--text pa-2 rounded"
               style="width: fit-content; backdrop-filter: blur(100px)">Esta
              imagem existe para agradar quem quer que
              veja esse teste!</p>
          </div>
        </div>
      </v-img>
    </v-flex>
  </v-layout>
</template>

<script>
import LoginController from "@/views/login/LoginController";
import FormRules from "@/services/FormRules";

export default {
  name: "Login",
  data() {
    return {
      formData: {
        feedback: {
          message: '',
          type: 'success',
          visible: false
        },
        validate: false,
        loading: false,
        email: '',
        password: ''
      }
    }
  },
  computed: {
    formRules() {
      return {
        required: FormRules.required
      };
    }
  },
  beforeMount() {
    this.controller = new LoginController(this);
  }
}
</script>

<style scoped>

</style>
