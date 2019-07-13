'use strict'

class StoreTodo {
  get rules () {
    return {
      addTodo: 'required|min:3|unique:todos,titre',
    }
  }
  get messages(){
    return {
      'addTodo.required' : 'Faut mettre un truc !!!',
      'addTodo.min'      : 'C\'est trop court!!! (min 3 caractères) ',
      'addTodo.unique'   : "Ya déjà un truc comme ça !"
    }
  }
}

module.exports = StoreTodo
