import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, FlatList, Image, StyleSheet, avatar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Colors from "../../assets/Colors";
import { Avatar } from "react-native-elements";

const data = [
  {
    id: 1,
    sender: "Victoria Hanson",
    email: "@vicky23hanson",
    text: "Lorem ipsum dolor sit amit dolor connectsur?",
    senderType: "user",
    avatar: "https://www.bootdey.com/img/Content/avatar/avatar1.png",
    image: "https://www.bootdey.com/image/580x580/00BFFF/000000",
    price: "$100",
    title: "Mobile",
  },
  {
    id: 2,
    sender: "Victoria Hanson",
    email: "@vicky23hanson",
    text: "Lorem ipsum dolor sit amit dolor connectsur",
    senderType: "other",
    avatar: "https://www.bootdey.com/img/Content/avatar/avatar2.png",
    image: "https://www.bootdey.com/image/580x580/FF00FF/000000",
    price: "$100",
    title: "Electronics",
  },
  {
    id: 3,
    sender: "Victoria Hanson",
    email: "@vicky23hanson",
    text: "Lorem ipsum dolor sit amit dolor connectsur",
    senderType: "user",
    avatar: "https://www.bootdey.com/img/Content/avatar/avatar3.png",
    image: "https://www.bootdey.com/image/580x580/008000/000000",
    price: "$100",
    title: "Appliances",
  },
];

const CategoryScreen = ({ navigation }) => {
  return (
    // <SafeAreaView style={styles.container}>
    <View style={styles.row}>
      <TouchableOpacity style={styles.rounded}>
        <Image
          style={styles.image}
          source={{
            uri: "https://img.freepik.com/premium-photo/gamer-workspace_127657-18683.jpg?size=626&ext=jpg&uid=R94214209&ga=GA1.1.1081558094.1677063520&semt=sph",
          }}
        />
        <Text style={styles.label}>Electronics</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rounded}>
        <Image
          style={styles.image}
          source={{
            uri: "https://img.freepik.com/premium-photo/group-home-appliances-pink-studio-background_241146-976.jpg?size=626&ext=jpg&uid=R94214209&ga=GA1.2.1081558094.1677063520&semt=sph",
          }}
        />
        <Text style={styles.label}>Appliances</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.rounded}
        onPress={() => navigation.navigate("Mobiles")}
      >
        <Image
          style={styles.image}
          source={{
            uri: "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?size=338&ext=jpg&uid=R94214209&ga=GA1.2.1081558094.1677063520&semt=sph",
          }}
        />
        <Text style={styles.label}>Mobiles</Text>
      </TouchableOpacity>
    </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.white,
    backgroundColor: "red",
    alignItems: "center",
  },
  image: {
    // resizeMode: "contain",
    height: hp("9"),
    width: wp("20"),
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.fadedgray,
  },
  rounded: {
    margin: hp("1"),
  },
  row: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    flex: 1,
    paddingTop: hp("1"),
  },
  label: {
    fontSize: hp("2"),
    fontWeight: "400",
    lineHeight: 24,
    alignSelf: "center",
  },
});

export default CategoryScreen;
