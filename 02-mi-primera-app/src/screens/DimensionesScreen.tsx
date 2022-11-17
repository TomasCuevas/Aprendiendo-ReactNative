import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from 'react-native';

// const { width, height } = Dimensions.get('window');

export const DimensionesScreen = () => {
  const { height, width } = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            ...styles.cajaMorada,
            width: width * 0.4,
          }}
        />
        <View style={styles.cajaNaranja} />
      </View>
      <Text style={styles.text}>
        Width: {width.toFixed(2)}, Height: {height.toFixed(2)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
  },
  cajaMorada: {
    backgroundColor: '#5856d6',
    width: '50%',
    height: '50%',
  },
  cajaNaranja: {
    backgroundColor: '#f0a23b',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});
