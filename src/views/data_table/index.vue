<template>
  <div class="grey lighten-5 fill-height d-flex justify-center flex-column">
    <v-snackbar :color="feedbackController.color" v-model="feedbackController.open" width="fit-content">
      <span class="text-center">{{ feedbackController.message }}</span>
    </v-snackbar>
    <v-card max-width="1200px" elevation="0" color="transparent" class="mx-auto">
      <div class="d-flex justify-space-between align-center mb-4">
        <div
          @click="$router.push({ name: 'Home' })"
          class="grey lighten-3 pa-4 rounded-lg"
          style="cursor: pointer"
          v-ripple
        >
          <v-icon>mdi-arrow-left</v-icon>
        </div>
        <user-form @updateList="controller.mountTableHandler()" :dialog-controller="dialogController">
          <template v-slot:activator="{ on }">
            <v-btn large elevation="0" color="primary" class="rounded-lg" v-on="on"> Adicionar registro </v-btn>
          </template>
        </user-form>
      </div>
      <v-card
        max-width="1200px"
        width="1200px"
        min-height="400px"
        class="pa-4 default-box-shadow rounded-lg d-flex flex-column"
        style="border: 1px solid #eee"
      >
        <v-data-table
          class="flex-fill"
          :loading="tableController.loading"
          :items="usersDataTable"
          :headers="headers"
          style="border: 1px solid #eee"
          height="100%"
          item-key="id"
          :items-per-page="5"
        >
          <template v-slot:item.actions="{ item }">
            <div class="d-flex align-center justify-end my-2">
              <user-form
                :user="item"
                @updateList="controller.mountTableHandler()"
                :dialog-controller="dialogController"
              >
                <template v-slot:activator="{ on }">
                  <div v-on="on" class="grey lighten-3 pa-4 rounded-lg" style="cursor: pointer" v-ripple>
                    <v-icon>mdi-pencil</v-icon>
                  </div>
                </template>
              </user-form>

              <div
                @click="controller.deleteUser({ userId: item.id })"
                class="grey lighten-3 pa-4 rounded-lg ml-2"
                style="cursor: pointer"
                v-ripple
              >
                <v-icon>mdi-delete</v-icon>
              </div>
            </div>
          </template>
          <template v-slot:item.localization="{ item }">
            <div class="d-flex align-center">
              <a
                :href="`https://www.google.com.br/maps/@${item.latitude},${item.longitude},15z`"
                target="_blank"
                class="text-decoration-underline text--primary"
                @click="controller.redirectToMaps(item)"
                style="cursor: pointer"
              >
                {{ `${item.latitude} / ${item.longitude}` }}
              </a>
            </div>
          </template>
        </v-data-table>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import DataTableController from '@/views/data_table/DataTableController';
import UserForm from '@/components/data_table/user_form';

export default {
  name: 'DataTable',
  components: { UserForm },
  data() {
    return {
      feedbackController: {
        open: false,
        color: 'success',
        message: '',
      },
      dialogController: {
        open: true,
      },
      tableController: {
        loading: false,
      },
      usersDataTable: [],
      headers: [
        {
          text: 'Nome',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'CPF/CNPJ', value: 'document' },
        { text: 'E-mail', value: 'email' },
        { text: 'Latitude e Longitude', value: 'localization' },
        { text: 'Ações', value: 'actions', align: 'end' },
      ],
    };
  },
  beforeMount() {
    this.controller = new DataTableController(this);
  },
  mounted() {
    this.controller.mountTableHandler();
  },
};
</script>
