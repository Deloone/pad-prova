import produce from 'immer'

const todos = (state = [], action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_TODO_TO_LIST':
        const { todo } = action.payload
        
        draft.push({
          id: new Date().toString(),
          ...todo
        })
        
        break;
    
      case 'REMOVE_TODO_FROM_LIST':
        const { id } = action.payload

        const todoIndexInArray = draft.findIndex(todo => todo.id === id)

        draft.splice(todoIndexInArray, 1)

        break

      default:
        return draft
    }
  })
}

export { todos }