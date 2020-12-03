<template>
  <div>
    <v-snackbar :color="feedbackController.color" v-model="feedbackController.open" width="fit-content">
      <span class="text-center">{{ feedbackController.message }}</span>
    </v-snackbar>
    <v-dialog v-model="open" max-width="600px" transition="slide-y-transition">
      <template v-slot:activator="{ on }">
        <slot name="activator" :on="on"></slot>
      </template>
      <v-card class="pa-8">
        <div class="mb-4 d-flex align-center justify-space-between">
          <h3 class="text-h4 col-8 pa-0 font-weight-bold text-left">Vamos gerenciar usuários!</h3>
          <div @click="open = false" class="grey lighten-3 pa-4 rounded-lg" style="cursor: pointer" v-ripple>
            <v-icon>mdi-close</v-icon>
          </div>
        </div>
        <v-form ref="formUser" v-model="formData.validate" @submit.prevent="controller.submitFormHandler()">
          <v-text-field
            v-model="formData.name"
            :rules="[formRules.required]"
            label="Nome"
            placeholder="Alessandro Rodrigo"
            filled
            class="rounded-lg"
          />
          <v-text-field
            v-model="formData.email"
            :rules="[formRules.required]"
            label="E-mail"
            placeholder="alessandro.fresneda84@gmail.com"
            filled
            class="rounded-lg"
          />
          <v-text-field
            v-model="formData.document"
            :rules="[formRules.required]"
            label="Documento"
            v-facade="['###.###.###-##', '##.###.###/####-##']"
            placeholder="111.111.111-11"
            filled
            class="rounded-lg"
          />
          <v-text-field
            label="Localização"
            disabled
            placeholder="Pegaremos sua localização atual"
            filled
            class="rounded-lg"
          />
          <v-btn
            :disabled="!formData.validate"
            :loading="formData.loading"
            block
            color="primary"
            large
            type="submit"
            class="rounded-lg"
            elevation="0"
            height="52px"
          >
            Salvar usuário
          </v-btn>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import FormRules from '@/services/FormRules';
import UserFormController from '@/components/data_table/user_form/UserFormController';

export default {
  name: 'user-form',
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      feedbackController: {
        open: false,
        message: '',
        color: 'success',
      },
      formData: {
        loading: false,
        validate: false,
        id: this.user.id || 0,
        name: this.user.name || '',
        email: this.user.email || '',
        document: this.user.document || '',
        latitude: this.user.latitude || '',
        longitude: this.user.longitude || '',
      },
      open: false,
    };
  },
  computed: {
    formRules() {
      return {
        required: FormRules.required,
      };
    },
  },
  watch: {
    open(value) {
      if (!value && !this.formData.id) this.$refs.formUser.reset();
    },
  },
  beforeMount() {
    this.controller = new UserFormController(this);
  },
};
</script>
