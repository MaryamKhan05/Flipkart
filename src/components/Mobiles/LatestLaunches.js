import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "../../../assets/Colors";
import Spacer from "../Spacer";

const Launches = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Latest Launches</Text>
        <Text style={styles.text}>Top Brands, Latest Technology</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={{ width: "100%", height: "95%", resizeMode: "cover" }}
          source={{
            uri: "https://img.freepik.com/free-photo/blue-sport-sedan-parked-yard_114579-5078.jpg?size=626&ext=jpg&uid=R94214209&ga=GA1.2.1081558094.1677063520&semt=sph",
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("30"),
    width: wp("100"),
    // backgroundColor: Colors.blue,
    marginBottom: hp("3"),
  },
  textContainer: {
    backgroundColor: Colors.white,
    // backgroundColor: "pink",
    paddingVertical: hp("2"),
    paddingHorizontal: hp("1"),
  },
  imageContainer: {
    width: wp("100%"),
    height: hp("25"),
    // backgroundColor: "pink",
    // margin:hp('3'),
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: hp("3"),
    fontWeight: "700",
  },
  text: {
    fontSize: hp("1.8"),
  },
});

export default Launches;
