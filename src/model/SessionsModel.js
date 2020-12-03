import AbstractModel from '@/model/AbstractModel';

class SessionsModel extends AbstractModel {
  async create({ email, password }) {
    try {
      const response = await this.api.post('/users', {
        email: email,
        password: password,
        token: Math.ceil(Math.random() * 8),
      });
      return { error: false, ...response };
    } catch (e) {
      return { error: true, ...e };
    }
  }
}

export default new SessionsModel();
