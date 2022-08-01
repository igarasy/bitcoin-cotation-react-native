import React from 'react'
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native'
import CurrentPrice from './src/components/CurrentPrice'
import HistoryGraphic from './src/components/HistoryGraphic'
import QuotationsList from './src/components/QuotationList'

interface coinList { data: string; valor: any; }

function addZero(n: number) {
  if (n <= 9) {
    return '0' + n
  }
  return n
}

function url(daysTotal: number) {
  const date = new Date()
  const listLastDays = daysTotal
  const endDate = `${date.getFullYear()}-${addZero(
    date.getMonth() + 1,
  )}-${addZero(date.getDate())}`
  date.setDate(date.getDate() - listLastDays)
  const startDate = `${date.getFullYear()}-${addZero(
    date.getMonth() + 1,
  )}-${addZero(date.getDate())}`
  return `http://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`
}



async function getListCoins(url: string) {
  let response = await fetch(url)
  let returnApi = await response.json()
  let selectListQuotations = returnApi.bpi
  const queryCoinsList = Object.keys(selectListQuotations).map((key) => {
    return {
      data: key.split('-').reverse().join('/'),
      valor: selectListQuotations[key],
    }
  })
  let data = queryCoinsList.reverse()
  return data
}

async function getPriceCoinsGraphic(url: string) {
  let responseGraphic = await fetch(url)
  let returnApiGraphic = await responseGraphic.json()
  let selectListQuotationsGraphic = returnApiGraphic.bpi
  const queryCoinsListGraphic = Object.keys(selectListQuotationsGraphic).map((key) => {
    return selectListQuotationsGraphic[key]
  })
  let dataGraphic = queryCoinsListGraphic
  return dataGraphic
}

export default function App() {
  const [coinList, setCoinsList] = React.useState<coinList[]>([])
  const [coinsGraphicList, setCoinsGraphicList] = React.useState([0])
  const [days, setDays] = React.useState(30)
  const [updateData, setUpdateData] = React.useState(true)

  function updateDay(n: number) {
    setDays(n)
    setUpdateData(true)
  }

  React.useEffect(() => {
    getListCoins(url(days)).then((data) => {
      console.log(data)
      setCoinsList(data)
    })
    getPriceCoinsGraphic(url(days)).then((dataGraphic) => {
      setCoinsGraphicList(dataGraphic)
    })
    if(updateData){
      setUpdateData(false)
    }
  }, [updateData])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#A0E7E5" barStyle="light-content" />
      <CurrentPrice />
      <HistoryGraphic infoDataGraphic={coinsGraphicList}/>
      <QuotationsList  filterDay={updateDay} listTransactions={coinList}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
})
