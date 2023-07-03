import { useState } from "react";
import { Text, Dimensions, View, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel, { Pagination } from "react-native-snap-carousel";

//* DATA *//
import { slideData } from "../../data";

//* INTERFACE *//
import { ISlide } from "../../interfaces";

export const SlidesScreen: React.FC = () => {
  const { height: screenHeight, width: screenWidth } = Dimensions.get("window");
  const [activeIndex, setActiveIndex] = useState(0);

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
});
