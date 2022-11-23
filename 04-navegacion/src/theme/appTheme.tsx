import { StyleSheet } from 'react-native';

export const colores = {
  primary: '#55d',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  botonGrande: {
    width: 100,
    backgroundColor: '#ccc',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 5,
  },
  botonGrandeTexto: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  avatarContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 10,
    marginHorizontal: '5%',
  },
  menuBoton: {
    marginVertical: 5,
  },
  menuTexto: {
    fontSize: 23,
  },
});
