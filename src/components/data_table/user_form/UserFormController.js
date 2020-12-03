import AbstractController from '@/services/AbstractController';
import UsersModel from '@/model/UsersModel';

class UserFormController extends AbstractController {
  async submitFormHandler() {
    try {
      this.scope.formData.loading = true;
      const { id, name, email, document } = this.scope.formData;
      const {
        coords: { latitude, longitude },
      } = await this.getCurrentPosition();

      let resultUser;
      if (id) {
        resultUser = await UsersModel.update({ id, name, email, document, latitude, longitude });
      } else {
        resultUser = await UsersModel.create({ name, email, document, latitude, longitude });
      }

      if (!resultUser.error) {
        this.scope.feedbackController = {
          color: 'success',
          open: true,
          message: 'Usuário salvo com sucesso',
        };
        this.scope.$emit('updateList');
        return (this.scope.open = false);
      }

      return (this.scope.feedbackController = {
        color: 'error',
        open: true,
        message: 'Problemas ao cadastrar usuário',
      });
    } finally {
      this.scope.formData.loading = false;
    }
  }

  async getCurrentPosition() {
    return await new Promise((resolve, error) => {
      return window.navigator.geolocation.getCurrentPosition(resolve, error);
    }).catch((error) => {
      const response = { error: true, message: error.message };

      switch (error.code) {
        case error.PERMISSION_DENIED:
          response.code = 'PERMISSION_DENIED';
          break;
        case error.POSITION_UNAVAILABLE:
          response.code = 'POSITION_UNAVAILABLE';
          break;
        case error.TIMEOUT:
          response.code = 'TIMEOUT';
          break;
        default:
          response.code = 'UNKNOWN_ERROR';
          break;
      }
      return response;
    });
  }
}

export default UserFormController;
