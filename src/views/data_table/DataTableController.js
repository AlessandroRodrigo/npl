import AbstractController from '@/services/AbstractController';
import UsersModel from '@/model/UsersModel';

class DataTableController extends AbstractController {
  async mountTableHandler() {
    try {
      this.scope.tableController.loading = true;
      const response = await this.getUsersDataTable();
      if (!response.error) {
        this.setUsersDataTable(response.data);
      }
    } finally {
      this.scope.tableController.loading = false;
    }
  }

  async getUsersDataTable() {
    const response = await UsersModel.index();
    return response;
  }

  setUsersDataTable(value) {
    this.scope.usersDataTable = value;
  }

  async deleteUser({ userId }) {
    this.scope.tableController.loading = true;
    const deletedUser = await UsersModel.delete({ id: userId });
    if (!deletedUser.error) {
      this.scope.feedbackController = {
        open: true,
        color: 'success',
        message: 'Usuário deletado com sucesso!',
      };
      return this.mountTableHandler();
    }

    this.scope.feedbackController = {
      open: true,
      color: 'error',
      message: 'Problema ao deletar usuário!',
    };
    return (this.scope.tableController.loading = false);
  }
}

export default DataTableController;
