import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Colors from "../../../assets/Colors";
import Spacer from "../Spacer";

const data = [
  {
    id: 1,
    sender: "Victoria Hanson",
    email: "@vicky23hanson",
    text: "Lorem ipsum dolor sit amit dolor connectsur?",
    senderType: "user",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBEHKY5fLa4xV7UeK8n18JWw82gnzc5mcITg&usqp=CAU",
    image: "https://www.bootdey.com/image/580x580/00BFFF/000000",
    price: "$100",
  },
  {
    id: 2,
    sender: "Victoria Hanson",
    email: "@vicky23hanson",
    text: "Lorem ipsum dolor sit amit dolor connectsur",
    senderType: "other",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROnye0TQdbFw0m4U65oB9jP7Syvw-lFVW4gw&usqp=CAU",
    image: "https://www.bootdey.com/image/580x580/FF00FF/000000",
    price: "$100",
  },
  {
    id: 3,
    sender: "Victoria Hanson",
    email: "@vicky23hanson",
    text: "Lorem ipsum dolor sit amit dolor connectsur",
    senderType: "user",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-b-4_ARUtc0DxqzuduzJx83l4fwjnhD2Wlg&usqp=CAU",
    image: "https://www.bootdey.com/image/580x580/008000/000000",
    price: "$100",
  },
  // {
  //   id: 4,
  //   sender: "Victoria Hanson",
  //   email: "@vicky23hanson",
  //   text: "Lorem ipsum dolor sit amit dolor connectsur",
  //   senderType: "user",
  //   avatar:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxvvGo7XJJL-uexC8Yg9mdXS0-5SOMeDAjXA&usqp=CAU",
  //   image: "https://www.bootdey.com/image/580x580/008000/000000",
  //   price: "$100",
  // },
];

const Grab = () => {
  return (
    <View style={styles.container}>
      {/* <Spacer/> */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: item.avatar }}
                  style={{
                    height: "100%",
                    width: "100%",
                    // alignSelf: "flex-start",
                    resizeMode: "cover",
                    backgroundColor: Colors.blue,
                  }}
                />
              </View>
              <View>
                <Text>{item.sender}</Text>
                <Text>{item.price}</Text>
              </View>
            </View>
          );
        }}
      />
      {/* <Spacer/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    height: hp("32"),
    // backgroundColor: Colors.blue,
    // marginBottom: hp("4"),
    alignSelf: "center",
    // alignItems: "center",
    marginTop: hp("1"),
  },
  card: {
    // height: hp("30"),
    height: hp("30"),
    width: wp("50"),
    borderWidth: 0.5,
    borderRadius: hp("1"),
    borderColor: Colors.fadedgray,
    // backgroundColor:'red',
    backgroundColor: Colors.white,
    margin: hp("1"),
    // alignItems: "center",
    padding: hp("1"),
  },
  listContainer: {
    marginVertical: hp("1.5"),
    backgroundColor: "yellow",
    // height:130
  },
  sender: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 21,
  },
  imageContainer: {
    backgroundColor: "pink",
    height: "60%",
    width: "100%",
  },
});

export default Grab;
