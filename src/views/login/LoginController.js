import AbstractController from '@/services/AbstractController';
import SessionsModel from '@/model/SessionsModel';

class LoginController extends AbstractController {
  /**
   * @description Essa não seria a lógica real de um login, porém afim de simular
   * uma requisição, fiz dessa forma.
   */
  async submitFormHandler() {
    try {
      this.scope.formData.loading = true;
      const { email, password } = this.scope.formData;
      const response = await SessionsModel.create({ email, password });
      if (!response.error) {
        this.scope.formData.feedback = {
          message: 'Parabéns, você está logado!',
          type: 'success',
          visible: true,
        };
        sessionStorage.setItem('user', JSON.stringify(response.data));
        return setTimeout(() => {
          this.scope.$router.push({ name: 'Home' });
        }, 500);
      }
      return (this.scope.formData.feedback = {
        message: 'Oops, parece que algo não está certo!',
        type: 'error',
        visible: true,
      });
    } finally {
      this.scope.formData.loading = false;
    }
  }
}

export default LoginController;
