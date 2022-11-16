import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>
      <TouchableOpacity onPress={() => setContador(prev => prev + 1)}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>+1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 35,
  },
  buttonContainer: {
    backgroundColor: 'red',
    borderRadius: 100,
    height: 30,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
  },
});
