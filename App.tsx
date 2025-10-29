import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';

export default function App() {
  const [age, setAge] = useState<string>("")
  const ageAsNumber: number = !isNaN(Number(age)) === true ? Number(age) : 0
  const lowerlimit: number = !isNaN(Number(age)) === true ? Number((220 - ageAsNumber) * 0.65) : 0
  const upperlimit: number = !isNaN(Number(age)) === true ? Number((220 - ageAsNumber) * 0.85) : 0

  return (
    <ImageBackground
      source={require('./assets/unicorn.png')}
      style={styles.background}
      resizeMode='cover'>
    <View style={styles.top}>
      <Text style={styles.heading}>Heart Rate Limits Calculator</Text>
    </View> 
    <View style={styles.container}>
      <Text style={styles.field}>Enter your age:</Text>
      <TextInput 
        style={styles.input}
        placeholder='age...'
        placeholderTextColor='rgba(255,255,255,0.7)'
        keyboardType='number-pad'
        value={age}
        onChangeText={setAge}/>
    </View>
    <View style={styles.bottom}>
      <Text style={styles.results}>Lower limit: {lowerlimit.toFixed(2)} bpm</Text>
      <Text style={styles.results}>Upper limit: {upperlimit.toFixed(2)} bpm</Text>
    </View>
    <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 80,
    paddingBottom: 60
  },
  top: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    justifyContent: 'flex-start'
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    fontFamily: 'sans-serif-light',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: '#fff',
    borderWidth: 3,
    padding: 20,
    
  },
  field: {
    fontSize: 20,
    color: 'white',
    fontWeight: '400'
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 18,
    margin: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  bottom: {
    marginBottom: 20,
  },
  results: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  
});
