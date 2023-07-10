import { View, Text, StyleSheet, ScrollView } from "react-native";

//* INTERFACES *//
import { IFullPokemon } from "../../interfaces";
import { FadeInImage } from "../FadeInImage/FadeInImage";

interface Props {
  fullPokemon: IFullPokemon;
}

export const PokemonDetails: React.FC<Props> = ({ fullPokemon }) => {
  return (
    <ScrollView
      style={{
        ...StyleSheet.absoluteFillObject,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ ...styles.container, marginTop: 380 }}>
        <Text style={styles.title}>Types: </Text>
        <View style={styles.types__container}>
          {fullPokemon.types.map(({ type }) => (
            <Text style={styles.regular__text} key={type.name}>
              {type.name}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Peso:</Text>
        <Text style={styles.regular__text}>{fullPokemon.weight}kg</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Sprites: </Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FadeInImage
          uri={fullPokemon.sprites.front_default}
          style={styles.sprite__image}
        />
        <FadeInImage
          uri={fullPokemon.sprites.back_default}
          style={styles.sprite__image}
        />
        <FadeInImage
          uri={fullPokemon.sprites.front_shiny}
          style={styles.sprite__image}
        />
        <FadeInImage
          uri={fullPokemon.sprites.back_shiny}
          style={styles.sprite__image}
        />
      </ScrollView>

      <View style={styles.container}>
        <Text style={styles.title}>Habilidades base: </Text>
        <View style={styles.types__container}>
          {fullPokemon.abilities.map(({ ability }) => (
            <Text style={styles.regular__text} key={ability.name}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Movimientos: </Text>
        <View style={styles.types__container}>
          {fullPokemon.moves.map(({ move }) => (
            <Text style={styles.regular__text} key={move.name}>
              {move.name}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Stats: </Text>
        <View style={{ ...styles.types__container, flexDirection: "column" }}>
          {fullPokemon.stats.map(({ stat, base_stat }) => (
            <View key={stat.name} style={{ flexDirection: "row" }}>
              <Text
                style={{
                  ...styles.regular__text,
                  width: 200,
                }}
              >
                {stat.name}
              </Text>
              <Text style={{ ...styles.regular__text, fontWeight: "700" }}>
                {base_stat}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={{ marginBottom: 20, alignItems: "center" }}>
        <FadeInImage
          uri={fullPokemon.sprites.front_default}
          style={styles.sprite__image}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontWeight: "700",
    fontSize: 22,
  },
  types__container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  regular__text: {
    fontSize: 17,
  },
  sprite__image: {
    width: 100,
    height: 70,
    marginBottom: 10,
  },
});
