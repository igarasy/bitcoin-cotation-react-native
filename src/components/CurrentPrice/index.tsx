import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

interface Props {
  lastQuotation: number
}

export default function CurrentPrice(props: Props) {
  return (
    <View style={styles.headerPrice}>
      <Text style={styles.textPrice}>Última cotação</Text>
      <Text style={styles.currentPrice}>$ {props.lastQuotation} </Text>
    </View>
  )
}
