import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AuthContext } from '../../contexts/auth'

export default function Pedidos() {
  const { nome } = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Text>Pagina Pedidos</Text>
      <Text>Nome Contex: {nome}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
