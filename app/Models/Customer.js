'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const DB = use('App/Utils/DB')

class Customer extends Model {

  static boot() {
    super.boot();
    this._db = new DB(this);
  }

  static get table() {
    return 'customers'
  }


  static async register(data) {
    return await this._db.create(data);
  }

  static async login(data) {
    return await this._db.get(data);
  }
}

module.exports = Customer
