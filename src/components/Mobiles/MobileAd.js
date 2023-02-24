import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Spacer from "../Spacer";

const ImageContainer = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: "100%", height: "95%" , resizeMode:'cover'}}
        source={{
          uri: "https://img.freepik.com/free-photo/blue-sport-sedan-parked-yard_114579-5078.jpg?size=626&ext=jpg&uid=R94214209&ga=GA1.2.1081558094.1677063520&semt=sph",
        }}
      />
      <Spacer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    height: hp("25"),
    // backgroundColor: "pink",
    // margin:hp('3'),
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ImageContainer;
