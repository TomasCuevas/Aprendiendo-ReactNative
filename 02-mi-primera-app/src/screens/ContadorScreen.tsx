import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>
      <Fab
        onPress={() => setContador(contador - 1)}
        position="left"
        title="-1"
      />
      <Fab
        onPress={() => setContador(contador + 1)}
        position="right"
        title="+1"
      />
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
});
