import { Text, View, StyleSheet } from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28c4d9',
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
  },
  caja1: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    height: 100,
    lineHeight: 100,
    backgroundColor: 'red',
  },
  caja2: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    height: 100,
    lineHeight: 100,
    backgroundColor: 'green',
  },
  caja3: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    height: 100,
    lineHeight: 100,
    backgroundColor: 'blue',
  },
});
