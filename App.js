import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WeatherChart from './WheaterChart';
import { mockData } from './mockdata';

export default function App() {
  const hours = mockData.hourly.time;
  const temperatures = mockData.hourly.temperature_2m;
  const rainProbabilities = mockData.hourly.precipitation_probability;

  return (
    <View style={styles.container}>
      <WeatherChart
      yDomain={{ min: 10, max: 35 }}
      hours={hours}
      values={temperatures}
      color={{
        from: '#36d',
        to: '#d61',
        line: '#555'
      }}
      />
      <WeatherChart
      yDomain={{ min: 0, max: 100 }}
      hours={hours}
      values={rainProbabilities}
      color={{
        from: '#ddf',
        to: '#14a',
        line: '#555'
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
