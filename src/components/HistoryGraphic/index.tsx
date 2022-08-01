import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import styles from './styles'
import { LineChart } from 'react-native-chart-kit'

interface Props {
  infoDataGraphic: number[]
}

export default function HistoryGraphic(props: Props) {
  return (
    <View style={styles.contentGraphic}>
      <LineChart data={{ 
        labels: [],
        datasets: [
          { 
            data: props.infoDataGraphic
           },
          ] ,
        }}
         width={Dimensions.get("window").width}
         height={220}
         yAxisLabel="$"
         yAxisSuffix='k'
         withVerticalLines={false}
         yLabelsOffset={1}
         withVerticalLabels={false}
         chartConfig={{
          backgroundColor:"#000000",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255,255,255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255,255,255, ${opacity})`,
          propsForDots:{
            r: "1",
            strokeWidth: "1",
            stroke: "#A0E7E5"
          }
         }}
        bezier
        />
    </View>
  )
}
