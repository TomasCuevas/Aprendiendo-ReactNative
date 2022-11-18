import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  text: string;
  color?: string;
  ancho?: boolean;
}

export const BotonCalc: React.FC<Props> = ({
  text,
  color = '#2d2d2d',
  ancho = false,
}) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 170 : 80,
        }}>
        <Text
          style={{
            ...styles.botonTexto,
            color:
              color === '#2d2d2d' || color === '#ff9427' ? 'white' : 'black',
            textAlign: ancho ? 'left' : 'center',
            paddingLeft: ancho ? 30 : 0,
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    height: 80,
    width: 80,
    borderRadius: 100,
    backgroundColor: '#2d2d2d',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  botonTexto: {
    width: '100%',
    textAlign: 'center',
    fontSize: 35,
    color: 'white',
    fontWeight: '700',
  },
});
