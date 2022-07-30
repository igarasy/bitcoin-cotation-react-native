import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

export default function QuotationsItems() {
  return (
    <View style={styles.mainContent}>
      <View style={styles.contextLeft}>
        <View style={styles.boxLogo} >
          <Image style={styles.logoBitcoin} source={require("../../../img/bitcoin.png")} />
          <Text style={styles.dayQuotation}> 07/05/2021</Text>
        </View>
      </View>
      <View style={styles.contextRigth}>
        <Text style={styles.price} >$ 53445</Text>
      </View>
    </View>
  )
}
