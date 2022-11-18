import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
  },
  calculadoraContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  resultado: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
  resultadoPequeno: {
    color: '#fff4',
    fontSize: 30,
    textAlign: 'right',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
});
