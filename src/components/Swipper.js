import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import Spacer from "./Spacer";
const { height: screenHeight } = Dimensions.get("window");
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const imageList = [
  {
    uri: "https://img.freepik.com/free-photo/blue-sport-sedan-parked-yard_114579-5078.jpg?size=626&ext=jpg&uid=R94214209&ga=GA1.2.1081558094.1677063520&semt=sph",
  },
  {
    uri: "data:image/jpeg;base64,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",
  },
  {
    uri: "https://img.freepik.com/premium-photo/scarlet-red-elegant-sports-car-3dabstract-room-white-background-3d-render_167862-2034.jpg?size=626&ext=jpg&uid=R94214209&ga=GA1.2.1081558094.1677063520&semt=sph",
  },

  // add more images as needed
];

const MySwiper = () => {
  return (
    <View style={styles.container}>
      <Swiper style={styles.swiper}>
        {imageList.map((image, index) => (
          <View key={index}>
            <Image
              source={image}
              style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // height:'40%'
    // paddingBottom: "5%",
    // marginBottom: "20%",
    // width: wp("100%"),
    height: screenHeight * 0.2, // set the height of the container to 30% of the screen height
  },
  swiper: {
    height: "100%",
  },
  slide: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
export default MySwiper;
