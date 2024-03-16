'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')



/* Customer */
Route.group(() => {
  Route.post('register', 'CustomerController.register')
  Route.post('login', 'CustomerController.login')
  Route.get('profile', 'CustomerController.profile').middleware('auth')
  Route.put('update_profile', 'CustomerController.updateProfile').middleware('auth')
  Route.post('change_password', 'CustomerController.changePassword').middleware('auth')
}).prefix('api/customer')



