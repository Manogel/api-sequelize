import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/User';
import File from '../app/models/File';

// tem que adicionar todos os models aqui
const models = [User, File];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .forEach(model => {
        try {
          model.associate(this.connection.models);
        } catch (e) {
          //
        }
      });
  }
}

export default new Database();
