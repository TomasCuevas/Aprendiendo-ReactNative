import {StyleSheet} from 'react-native';

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
  boton: {
    height: 80,
    width: 80,
    borderRadius: 100,
    backgroundColor: '#333',
    justifyContent: 'center',
  },
  botonTexto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 35,
    color: 'white',
    fontWeight: '700',
  },
});
