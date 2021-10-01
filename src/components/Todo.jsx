import React from 'react'
import { Image, TouchableOpacity } from 'react-native'

import menuImg from '../assets/storage.png'
import closeImg from '../assets/close.png'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../store/modules/todos/actions'
import { useNavigation } from '@react-navigation/core'

import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  margin-top: 34px;
  height: 122px;
  width: 100%;
  background: #fff;
  border-radius: 10px;
  padding: 0 12px;
`

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.Text`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
`

const Content = styled.Text`
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 300;
  font-size: 14px;
`

function Todo({ todo }) {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  function remove() {
    dispatch(removeTodo(todo.id))
  }

  function redirecionar() {
    navigation.navigate('Detail', { todo })
  }

  return (
    <Container onPress={redirecionar}>
      <Header>
        <Image source={menuImg} />

        <Title>Tarefa#{todo.title}</Title>

        <TouchableOpacity onPress={remove}>
          <Image source={closeImg} />
        </TouchableOpacity>
      </Header>

      <Content>{todo.content}</Content>
    </Container>
  )
}

export { Todo }