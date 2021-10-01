import React from 'react'
import { ScrollView } from 'react-native'
import { Todo } from './Todo'
import { useSelector } from 'react-redux'

export function TodoList() {
  const todos = useSelector(state => state.todos)
  
  return (
    <ScrollView style={{marginTop: 14}} showsVerticalScrollIndicator={false}>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ScrollView>
  )
}