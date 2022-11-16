import { Text, View, StyleSheet, TouchableNativeFeedback } from 'react-native';

interface Props {
  position: 'left' | 'right';
  title: string;
  onPress: React.Dispatch<any>;
}

export const Fab: React.FC<Props> = ({ onPress, position, title }) => {
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
