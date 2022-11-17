import { StyleSheet, View } from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28425b',
  },
  cajaMorada: {
    borderWidth: 10,
    width: 100,
    height: 100,
    borderColor: 'white',
    backgroundColor: '#5856d6',
  },
  cajaNaranja: {
    borderWidth: 10,
    width: 100,
    height: 100,
    borderColor: 'white',
    backgroundColor: '#f0a23b',
  },
  cajaAzul: {
    borderWidth: 10,
    width: 100,
    height: 100,
    borderColor: 'white',
    backgroundColor: '#28c4d9',
  },
});
