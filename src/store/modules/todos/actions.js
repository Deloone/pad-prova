export function addTodo(todo) {
  return {
    type: 'ADD_TODO_TO_LIST',
    payload: {
      todo
    }
  }
}

export function removeTodo(id) {
  return {
    type: 'REMOVE_TODO_FROM_LIST',
    payload: {
      id
    }
  }
}