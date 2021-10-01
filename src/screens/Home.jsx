import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TodoList } from '../components/TodoList'
import { addTodo } from '../store/modules/todos/actions'

import styled from 'styled-components/native';
export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
  background-color: #E5E5E5;
`;

export const Header = styled.View`
  height: 128px;
  width: 100%;
  background-color: #fff;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 36px;
  align-items: center;
  justify-content: center;
`

export const HeaderText = styled.Text`
  font-size: 24px;
  font-weight: bold;
`
export const AddForm = styled.View`
margin-top: 40px;
  width: 100%;
  background: #FFFFFF;
  border-radius: 12px;
  height: 206px;
  padding: 18px 22px;
  align-items: center;
`

export const AddFormTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`

export const ContentInput = styled.TextInput`
  width: 100%;
  background: #E5E5E5;
  border: 1px solid rgba(0, 0, 0, 0.5);
  height: 60px;
  border-radius: 10px;
  margin-top: 18px;
  padding: 0 17px;
  font-size: 18px;

`

export const SubmitButton = styled.TouchableOpacity`
  margin-top: 28px;
  background: #6200EE;
  width: 100%;
  height: 38px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`
export const SubmitButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
`



















export function Home() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)
  
  const [content, setContent] = useState('')
  
  function createTodo() {
    dispatch(addTodo({ title: todos.length, content }))
  }
  
  return (
    <Container>
      <Header>
        <HeaderText>Aplicativo ToDo list</HeaderText>
      </Header>

      <AddForm>
        <AddFormTitle>Adicione aqui uma tarefa</AddFormTitle>
        
        <ContentInput placeholder="tarefa" onChangeText={(e) => setContent(e)} />

        <SubmitButton onPress={createTodo}>
          <SubmitButtonText>ADICIONAR TAREFA</SubmitButtonText>
        </SubmitButton>
      </AddForm>

      <TodoList />
    </Container>
  )
}