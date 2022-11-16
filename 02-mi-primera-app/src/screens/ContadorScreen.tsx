import {useState} from 'react';
import {View, Text, Button} from 'react-native';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(0);

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: 35}}>
        Contador: {contador}
      </Text>
      <Button onPress={() => setContador(prev => prev + 1)} title="+1" />
    </View>
  );
};
