import {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(0);

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: 35}}>
        Contador: {contador}
      </Text>
      <TouchableOpacity onPress={() => setContador(prev => prev + 1)}>
        <View
          style={{
            backgroundColor: 'red',
            borderRadius: 100,
            height: 30,
            justifyContent: 'center',
          }}>
          <Text style={{textAlign: 'center', color: 'white'}}>+1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
