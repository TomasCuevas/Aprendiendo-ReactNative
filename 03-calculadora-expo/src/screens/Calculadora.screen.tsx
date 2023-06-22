import { StyleSheet, Text, View } from "react-native";

//* COMPONENTS *//
import { ButtonCalc } from "../components";

//* HOOK *//
import { useCalc } from "../hooks";

export const CalculadoraScreen: React.FC = () => {
  const {
    number,
    previousNumber,
    clear,
    positiveNegative,
    buildNumber,
    deleteLast,
    divideButton,
    multiplyButton,
    restButton,
    sumButton,
    calc,
  } = useCalc();

  return (
    <View style={styles.calcContainer}>
      <Text style={styles.previousResult}>
        {previousNumber ? previousNumber : null}
      </Text>
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.row}>
        <ButtonCalc text="C" color="gray" onPress={clear} />
        <ButtonCalc text="+/-" color="gray" onPress={positiveNegative} />
        <ButtonCalc text="del" color="gray" onPress={deleteLast} />
        <ButtonCalc text="/" color="orange" onPress={divideButton} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="7" onPress={() => buildNumber("7")} />
        <ButtonCalc text="8" onPress={() => buildNumber("8")} />
        <ButtonCalc text="9" onPress={() => buildNumber("9")} />
        <ButtonCalc text="X" color="orange" onPress={multiplyButton} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="4" onPress={() => buildNumber("4")} />
        <ButtonCalc text="5" onPress={() => buildNumber("5")} />
        <ButtonCalc text="6" onPress={() => buildNumber("6")} />
        <ButtonCalc text="-" color="orange" onPress={restButton} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="1" onPress={() => buildNumber("1")} />
        <ButtonCalc text="2" onPress={() => buildNumber("2")} />
        <ButtonCalc text="3" onPress={() => buildNumber("3")} />
        <ButtonCalc text="+" color="orange" onPress={sumButton} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="0" onPress={() => buildNumber("0")} width />
        <ButtonCalc text="." onPress={() => buildNumber(".")} />
        <ButtonCalc text="=" color="orange" onPress={calc} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calcContainer: {
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: "flex-end",
  },
  result: {
    marginTop: -10,
    color: "white",
    fontSize: 60,
    textAlign: "right",
    marginBottom: 10,
  },
  previousResult: {
    color: "#fff7",
    fontSize: 35,
    textAlign: "right",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
});
