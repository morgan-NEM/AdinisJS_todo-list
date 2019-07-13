'use strict'

class UpdateTodo {
  get rules () {
    return {
      editTodo: 'required|min:3',
    }
  }
  get messages(){
    return {
      'editTodo.required' : 'Faut mettre un truc !!',
      'editTodo.min'      : 'C\'est trop court !! (min 3 caractères)',
      'editTodo.unique'   : "Ya déjà un truc comme ça !"
    }
  }
}

module.exports = UpdateTodo
