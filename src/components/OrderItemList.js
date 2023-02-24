import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Pressable,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Colors from "../../assets/Colors";
import { useNavigation } from "@react-navigation/native";
const size = 20;
const color = Colors.black;

const DATA = [
  // {
  //   id: 1,
  //   sender: "Victoria Hanson",
  //   email: "@vicky23hanson",
  //   text: "Lorem ipsum dolor sit amit dolor connectsur?",
  //   senderType: "user",
  //   avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nicepng.com%2Fourpic%2Fu2q8a9e6i1o0o0u2_mobile-png-image-hd-all-mobile-phone-png%2F&psig=AOvVaw0_qBEzKgS8UFGNACbmmzkA&ust=1676653960019000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJjy-e7Emv0CFQAAAAAdAAAAABAE",
  //   image: "image/580x580/00BFFF/000000",
  //   price: "$100",
  // },
  {
    id: 2,
    sender: "Victoria Hanson",
    avatar: "https://www.bootdey.com/img/Content/avatar/avatar3.png",
    text: "Lorem ipsum dolor sit amit dolor connectsur",
    image: "https://www.bootdey.com/image/580x580/FF00FF/000000",
  },
  {
    id: 3,
    sender: "Victoria Hanson",

    text: "Lorem ipsum dolor sit amit dolor connectsur",
    avatar: "https://www.bootdey.com/img/Content/avatar/avatar3.png",
    image: "https://www.bootdey.com/image/580x580/008000/000000",
  },
  {
    id: 4,
    sender: "Victoria Hanson",
    email: "@vicky23hanson",
    text: "Lorem ipsum dolor sit amit dolor connectsur",
    senderType: "user",
    avatar: "https://www.bootdey.com/img/Content/avatar/avatar3.png",
    image: "https://www.bootdey.com/image/580x580/008000/000000",
    price: "$100",
  },
  {
    id: 5,
    sender: "Victoria Hanson",
    email: "@vicky23hanson",
    text: "Lorem ipsum dolor sit amit dolor connectsur",
    senderType: "user",
    avatar: "https://www.bootdey.com/img/Content/avatar/avatar3.png",
    image: "https://www.bootdey.com/image/580x580/008000/000000",
    price: "$100",
  },
];
const ItemRender = ({ item, navigation }) => (
  <View style={{ padding: 12, flexDirection: "row" }}>
    <Image source={{ uri: item.avatar }} style={styles.image} />
    <View style={{ width: "65%" }}>
      <Text style={[styles.itemText, { fontWeight: "500" }]}>
        {item.sender}
      </Text>
      <Text style={styles.itemText}> {item.text} </Text>
    </View>
    <TouchableOpacity
      onPress={() => navigation.navigate("ItemDetail")}
      style={{
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        //   backgroundColor: "red",
        // marginRight:20
      }}
    >
      <Feather
        name="chevron-right"
        size={20}
        color={Colors.black}
        style={styles.icon}
      />
    </TouchableOpacity>
  </View>
);
const Divider = () => {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: Colors.fadedgray,
      }}
    />
  );
};
const OrderList = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={(itemData) => (
          <ItemRender item={itemData.item} navigation={navigation} />
        )}
        ItemSeparatorComponent={Divider}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  itemText: {
    fontSize: hp('2'),
    color: "black",
    paddingHorizontal: 5,
    lineHeight: 21,
    // backgroundColor: "pink",
  },
  image: {
    height: "100%",
    width: "20%",
    resizeMode: "contain",
  },
  icon: {
    alignSelf: "center",
    marginRight: 20,
  },
  modalView: {
    height: "65%",
    width: "95%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "center",
  },
  background: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: Colors.background,
    padding: 10,
    width: "45%",
    borderWidth: 0.5,
    borderColor: Colors.fadedgray,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
  },
  icon: {
    marginHorizontal: 10,
    // backgroundColor: "yellow",
  },
  bar: {
    backgroundColor: "#F0EEEE",
    // backgroundColor: "pink",
    height: hp("5"),
    borderRadius: 3,
    // marginHorizontal: 15,
    flexDirection: "row",
    // marginTop: 15,
    width: wp("75%"),
    alignItems: "center",
    borderColor: "black",
    borderWidth: 0.3,
    // padding: 10,
  },
  input: {
    // borderColor: "black",
    flex: 1,
    // borderWidth: 0.3,
    fontSize: hp("2"),
    // padding: 10,
    // backgroundColor:'red',
  },
  searchIcon: {
    // backgroundColor:'yellow',
    paddingHorizontal: hp("1"),
  },
});

export default OrderList;
