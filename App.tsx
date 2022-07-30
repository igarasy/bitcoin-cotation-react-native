import { StyleSheet, SafeAreaView, Platform,StatusBar } from 'react-native';
import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationsList from './src/components/QuotationList';
import QuotationsItems from './src/components/QuotationList/QuotationsItems';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar  backgroundColor='#A0E7E5' barStyle="light-content"/>
      <CurrentPrice/>
      <HistoryGraphic/>
      <QuotationsList/>
      <QuotationsItems/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40: 0
  },
});
