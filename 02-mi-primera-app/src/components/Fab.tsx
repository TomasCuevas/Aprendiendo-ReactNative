import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

interface Props {
  position: 'left' | 'right';
  title: string;
  onPress: React.Dispatch<any>;
}

export const Fab: React.FC<Props> = ({ onPress, position, title }) => {
  return (
    <TouchableOpacity
      style={position === 'left' ? styles.fabLocationL : styles.fabLocationR}
      onPress={onPress}>
      <View style={styles.fab}>
        <Text style={styles.fabText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fabLocationR: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  fabLocationL: {
    position: 'absolute',
    left: 20,
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
