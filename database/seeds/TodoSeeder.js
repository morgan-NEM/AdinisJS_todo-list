'use strict'

/*
|--------------------------------------------------------------------------
| TodoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Todo   = use('App/Models/Todo')

class TodoSeeder {
  async run () {

  // await Factory
  // .model('App/Models/Todo')
  // .createMany(5)
  await Todo.create({
    titre: 'Aller à la salle de sport',
    completed: false
  })
  await Todo.create({
    titre: 'Faire les courses',
    completed: false
  })
  await Todo.create({
    titre: 'Dominer le monde',
    completed: false
  })
   }
}

module.exports = TodoSeeder
