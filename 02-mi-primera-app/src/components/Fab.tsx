import {
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from 'react-native';

interface Props {
  position: 'left' | 'right';
  title: string;
  onPress: React.Dispatch<any>;
}

export const Fab: React.FC<Props> = ({ onPress, position, title }) => {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={[
          styles.fabLocation,
          position === 'left' ? styles.fabLocationL : styles.fabLocationR,
        ]}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View
        style={[
          styles.fabLocation,
          position === 'left' ? styles.fabLocationL : styles.fabLocationR,
        ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#afafff', false, 30)}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'android' ? android() : ios();
};

const styles = StyleSheet.create({
  fabLocationR: {
    right: 20,
  },
  fabLocationL: {
    left: 20,
  },
  fabLocation: {
    position: 'absolute',
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
