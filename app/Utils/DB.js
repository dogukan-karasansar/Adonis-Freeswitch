"use strict";


import db from '@adonisjs/lucid/services/db'


class DB extends Schema {
  constructor(model) {
    super();
    this.model = model;
  }

  async get(query) {
    return await db.from(this.model.table);
  }

  async find(id) {
    return await db.from(this.model.table).where('id', id).first();
  }

  async create(data) {
    return await db.table(this.model.table).insert(data);
  }

  async update(id, data) {
    return await db.from(this.model.table).where('id', id).update(data);
  }

  async delete(id) {
    return await db.from(this.model.table).where('id', id).delete();
  }

  async count() {
    return await db.from(this.model.table).count();
  }

  async paginate(page, limit) {
    return await db.from(this.model.table).paginate(page, limit);
  }
}

module.exports = DB;
