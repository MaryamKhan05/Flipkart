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

import Colors from "../../assets/Colors";
import Spacer from "./Spacer";

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
  {
    id: 4,
    sender: "Victoria Hanson",
    email: "@vicky23hanson",
    text: "Lorem ipsum dolor sit amit dolor connectsur",
    senderType: "user",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxvvGo7XJJL-uexC8Yg9mdXS0-5SOMeDAjXA&usqp=CAU",
    image: "https://www.bootdey.com/image/580x580/008000/000000",
    price: "$100",
  },
];

const RecentStores = () => {
  return (
    <View style={styles.listContainer}>
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
                    alignSelf: "flex-start",
                    resizeMode: "cover",
                  }}
                />
              </View>
              <View
                style={{
                  alignItems: "center",
                  marginTop: 5,
                }}
              >
                <Text>{item.sender}</Text>
                <Text>{item.price}</Text>
              </View>
            </View>
          );
        }}
      />
      <Spacer/>
    </View>
  );
};

const styles = StyleSheet.create({
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  listContainer: {
    marginBottom: hp("2"),
  },
  card: {
    borderRadius: 10,
    margin: 5,
    // backgroundColor: 'red',
    justifyContent: "center",
    alignItems: "center",
    // alignSelf:'center',
    width: 150,
    height: "95%",
    borderColor: Colors.fadedgray,
    borderWidth: 1,
  },
  // listContainer: {
  //   // backgroundColor: "orange",
  //   width: "100%",
  //   height: "30%",
  //   // justifyContent: "center",
  //   margin: 10,
  // },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  cardBody: {
    flex: 1,
  },
  sender: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 21,
  },
  cardImage: {
    width: "100%",
    height: 150,
  },
  cardText: {
    backgroundColor: "red",
  },
  btn: {
    padding: 12,
    margin: 10,
    borderRadius: 99,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "10%",
    marginTop: 10,
    width: "70%",
    alignSelf: "flex-end",
  },
  imageContainer: {
    backgroundColor: "pink",
    height: "60%",
    width: "100%",
  },
});

export default RecentStores;
