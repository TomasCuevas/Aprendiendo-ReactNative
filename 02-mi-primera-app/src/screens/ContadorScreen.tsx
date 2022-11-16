import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>
      <TouchableOpacity
        style={styles.fabLocationL}
        onPress={() => setContador(prev => prev - 1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.fabLocationR}
        onPress={() => setContador(prev => prev + 1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>+1</Text>
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
  fabLocationR: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  fabLocationL: {
    position: 'absolute',
    left: 20,
    bottom: 20,
  },
  fab: {
    backgroundColor: '#5856d6',
    borderRadius: 100,
    height: 60,
    width: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
});
