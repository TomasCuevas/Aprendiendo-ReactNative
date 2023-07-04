import { useEffect, useState } from "react";
import {
  Animated,
  Text,
  Dimensions,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel, { Pagination } from "react-native-snap-carousel";
import Icon from "@expo/vector-icons/Ionicons";
import { StackScreenProps } from "@react-navigation/stack";

//* DATA *//
import { slideData } from "../../data";

//* HOOK *//
import { useAnimation } from "../../hooks";

//* INTERFACE *//
import { ISlide } from "../../interfaces";

interface Props extends StackScreenProps<any, any> {}

export const SlidesScreen: React.FC<Props> = ({ navigation }) => {
  const { height: screenHeight, width: screenWidth } = Dimensions.get("window");
  const { opacity, fadeIn, fadeOut } = useAnimation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const renderItem = (item: ISlide) => (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        borderRadius: 5,
        padding: 40,
        justifyContent: "center",
      }}
    >
      <Image
        source={item.img}
        style={{ width: 300, height: 400, resizeMode: "center" }}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.desc}</Text>
    </View>
  );

  useEffect(() => {
    isButtonVisible ? fadeIn() : fadeOut();
  }, [isButtonVisible]);

  useEffect(() => {
    setIsButtonVisible(activeIndex + 1 === slideData.length);
  }, [activeIndex]);

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        data={slideData}
        renderItem={({ item }) => renderItem(item)}
        sliderWidth={screenWidth - 40}
        itemWidth={screenWidth - 40}
        layout="default"
        onSnapToItem={(index) => setActiveIndex(index)}
      />

      <View style={styles.pagination__container}>
        <Pagination
          dotsLength={slideData.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 25,
            height: 10,
            borderRadius: 10,
            backgroundColor: "#5656D8",
          }}
        />

        {isButtonVisible && (
          <Animated.View style={{ opacity }}>
            <TouchableOpacity
              style={styles.back__button}
              onPress={() => navigation.navigate("HomeScreen")}
            >
              <Text style={styles.button__text}>Entrar</Text>
              <Icon
                name="chevron-forward-outline"
                color="white"
                size={27}
                style={{ marginTop: 4 }}
              />
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    marginHorizontal: 20,
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#5656D8",
  },
  description: {
    fontSize: 16,
  },
  pagination__container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  back__button: {
    marginLeft: "auto",
    width: 140,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#5656D8",
    flexDirection: "row",
    gap: 2,
  },
  button__text: {
    color: "white",
    fontSize: 20,
  },
});
