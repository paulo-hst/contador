import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

export default function App() {

  const ICON_SIZE = 70
  
  const [ count, setCount ] = useState(0)

  // Função - exemplo 1
  const plus = () => {
    setCount(count + 1)
  }
  const minus = () => {
    count !== 0 ? setCount(count - 1) : null
  }

  // Função - exemplo 2
  function reset(){
    setCount(0)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador</Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.icon} onPress={ minus }>
          <View>
            <MaterialCommunityIcons name="minus-circle" size={ICON_SIZE} color='white' />  
          </View>  
        </TouchableOpacity>

        <View style={styles.value}>
          <Text style={styles.valueText}>{count}</Text> 
        </View>

        <TouchableOpacity style={styles.icon} onPress={ plus }>
          <View>
            <MaterialCommunityIcons name="plus-circle" size={ICON_SIZE} color='white' />  
          </View>  
        </TouchableOpacity>
    </View>

    <TouchableOpacity style={styles.resetButton} onPress={ reset }>
      <Text style={styles.resetText}>Resetar</Text>  
    </TouchableOpacity>

    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 80,
    top: -30,
    fontWeight: 'bold',
    color: 'white',
  },

  buttons: {
    flexDirection: 'row',
  },

  icon: {
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  
  value: {
    minWidth: 70,
    height: 70,
    marginHorizontal: 10,
    paddingHorizontal: 10,

    backgroundColor: 'white',
    borderRadius: 5,

    justifyContent: 'center',
  },

  valueText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },

  resetButton: {
    width: '50%',
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 10,
    marginTop: 50,

    justifyContent: 'center',
  },

  resetText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },

});
