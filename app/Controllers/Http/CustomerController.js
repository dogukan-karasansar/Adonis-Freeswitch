'use strict'

class CustomerController {

  constructor() {
    this._model = use('App/Models/Customer');
  }

  async register({ request, response }) {
    var data = request.all();

    try {
      var customer = await this._model.register(data);
      return response.json({
        message: 'Register',
        data: customer
      })
    } catch (error) {
      return response.status(400).json({
        message: 'Register failed'
      })
    }
  }

  async login({ request, response }) {
    return response.json({
      message: 'Login'
    })
  }

  async profile({ request, response }) {
    return response.json({
      message: 'Profile'
    })
  }

  async updateProfile({ request, response }) {
    return response.json({
      message: 'Update Profile'
    })
  }

  async changePassword({ request, response }) {
    return response.json({
      message: 'Change Password'
    })
  }
}

module.exports = CustomerController
