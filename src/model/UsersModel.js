import AbstractModel from '@/model/AbstractModel';

class UsersModel extends AbstractModel {
  async index() {
    try {
      const response = await this.api.get('/users_data_table');
      return { error: false, ...response };
    } catch (e) {
      return { error: true, ...e };
    }
  }

  async create({ name, email, document, longitude, latitude }) {
    try {
      const response = await this.api.post('/users_data_table', {
        name,
        email,
        document,
        longitude,
        latitude,
      });
      return { error: false, ...response };
    } catch (e) {
      return { error: true, ...e };
    }
  }

  async update({ id, ...params }) {
    try {
      const response = await this.api.put(`/users_data_table/${id}`, {
        id,
        ...params,
      });
      return { error: false, ...response };
    } catch (e) {
      return { error: true, ...e };
    }
  }

  async delete({ id }) {
    try {
      const response = await this.api.delete(`/users_data_table/${id}`);
      return { error: false, ...response };
    } catch (e) {
      return { error: true, ...e };
    }
  }
}

export default new UsersModel();
