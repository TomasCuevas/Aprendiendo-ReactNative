import {Text, View, StyleSheet} from 'react-native';

interface Props {
  text: string;
  color?: string;
}

export const BotonCalc: React.FC<Props> = ({text, color = '#2d2d2d'}) => {
  return (
    <View
      style={{
        ...styles.boton,
        backgroundColor: color,
      }}>
      <Text style={styles.botonTexto}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boton: {
    height: 80,
    width: 80,
    borderRadius: 100,
    backgroundColor: '#2d2d2d',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  botonTexto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '700',
  },
});
