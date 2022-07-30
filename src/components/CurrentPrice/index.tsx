import React from "react";
import { View, Text } from 'react-native'
import styles from './styles'

export default function CurrentPrice(){
  return(
    <View style={styles.headerPrice}>
      <Text style={styles.currentPrice}>$ 542323</Text>
      <Text style={styles.textPrice}>Última cotação</Text>
    </View>
  )
}