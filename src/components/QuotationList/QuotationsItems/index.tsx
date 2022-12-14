import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

 interface Props{
  data: string
  value: string
}

export default function QuotationsItems(props: Props) {
  return (
    <View style={styles.mainContent}>
      <View style={styles.contextLeft}>
        <View style={styles.boxLogo}>
          <Image
            style={styles.logoBitcoin}
            source={require('../../../img/bitcoin.png')}
          />
          <Text style={styles.dayQuotation}>{props.data}</Text>
        </View>
      </View>
      <View style={styles.contextRigth}>
        <Text style={styles.price}>{props.value}</Text>
      </View>
    </View>
  )
}
