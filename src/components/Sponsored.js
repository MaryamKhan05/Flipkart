import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import Colors from "../../assets/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Spacer from "./Spacer";
import Divider from "./Divider";
const data = [
  {
    id: 1,
    sender: "Victoria Hanson",
    email: "@vicky23hanson",
    text: "Lorem ipsum dolor sit amit dolor connectsur?",
    senderType: "user",
    avatar:
      "https://img.freepik.com/free-photo/headlights-new-red-car-car-dealership_146671-14964.jpg?size=626&ext=jpg&uid=R94214209&ga=GA1.1.1081558094.1677063520&semt=sph",
    image: "https://www.bootdey.com/image/580x580/00BFFF/000000",
    price: "$100",
  },
  {
    id: 3,
    sender: "Victoria Hanson",
    email: "@vicky23hanson",
    text: "Lorem ipsum dolor sit amit dolor connectsur",
    senderType: "user",
    avatar:
      "https://img.freepik.com/free-photo/white-offroader-jeep-parking_114579-4007.jpg?size=626&ext=jpg&uid=R94214209&ga=GA1.1.1081558094.1677063520&semt=sph",
    image: "https://www.bootdey.com/image/580x580/008000/000000",
    price: "$100",
  },
  {
    id: 2,
    sender: "Victoria Hanson",
    email: "@vicky23hanson",
    text: "Lorem ipsum dolor sit amit dolor connectsur",
    senderType: "other",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUw1NPtqr3urF9LZaIn-Hf8XtPMP796ZMUUA&usqp=CAU",
    image: "https://www.bootdey.com/image/580x580/FF00FF/000000",
    price: "$100",
  },
  {
    id: 4,
    sender: "Victoria Hanson",
    email: "@vicky23hanson",
    text: "Lorem ipsum dolor sit amit dolor connectsur",
    senderType: "user",
    avatar:
      "https://img.freepik.com/free-photo/yellow-sport-car-with-black-autotuning-road_114579-5051.jpg?size=626&ext=jpg&uid=R94214209&ga=GA1.1.1081558094.1677063520&semt=sph",
    image: "https://www.bootdey.com/image/580x580/008000/000000",
    price: "$100",
  },
];

const Sponsored = () => {
  return (
    <View style={styles.container}>
      <Spacer />
      <Text style={styles.heading}>Sponsored</Text>
      <Spacer />
      {/* <FlatList
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        data={data}
        // keyExtractor={(item) => item.id.toString()}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          return (
            <View style={{ justifyContent: "space-between" }}>
              <View style={styles.card}>
                <Image source={{ uri: item.avatar }} style={styles.image} />
                <Spacer />
                <Text style={styles.item}>{item.sender}</Text>
                <Text style={styles.item}>{item.price}</Text>
              </View>
            </View>
          );
        }}
      /> */}
      <View style={styles.border}>
        <View style={styles.card}>
          <Image
            source={require("../../assets/IMG_1636.jpg")}
            style={{
              height:hp('14'),
              width:wp('30'),
              resizeMode:'contain',
              // resizeMode:'center',
              borderWidth:1
            }}
          />
          <Image
            source={require("../../assets/smartwatch.jpeg")}
            style={{
              height:hp('14'),
              width:wp('30'),
              // resizeMode:'contain',
              resizeMode:'center',
              borderWidth:1           
            }}
          />
          <Image
            source={require("../../assets/IMG_1639.jpg")}
            style={{
              height:hp('14'),
              width:wp('30'),
              resizeMode:'center',
              borderWidth:1              
            }}
          />
        </View>
        {/* <Spacer /> */}
        {/* <Divider /> */}
        <View style={styles.card}>
          <Image
            source={require("../../assets/IMG_1640.jpg")}
            style={{
              height:hp('14'),
              width:wp('30'),
              // resizeMode:'center',
              borderWidth:1             
            }}
          />
          <Image
            source={require("../../assets/IMG_1639.jpg")}
            style={{
              height:hp('14'),
              width:wp('30'),
              // resizeMode:'center',
              borderWidth:1             
            }}
          />
          <Image
            source={require("../../assets/IMG_1641.jpg")}
            style={{
              height:hp('14'),
              width:wp('30'),
              // resizeMode:'center',
              borderWidth:1 
            }}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp("95%"),
    // height:hp('20'),
    // backgroundColor: "pink",
    // marginBottom: hp("4"),
    alignSelf: "center",
    alignItems: "center",
    // marginTop: hp("3"),
  },
  heading: {
    fontSize: hp("2.5"),
    fontWeight: "700",
    // lineHeight: 18,
    alignSelf: "flex-start",
  },
  // card: {
  //   height: hp("20"),
  //   width: wp("40"),
  //   borderWidth: 0.5,
  //   borderRadius: hp("1"),
  //   borderColor: Colors.black,
  //   // backgroundColor:'red',
  //   backgroundColor: Colors.white,
  //   margin: hp("2"),
  //   alignItems: "center",
  //   padding: hp("1"),
  // },
  image: {
    height: hp("10%"),
    width: wp("50"),
    // alignSelf: "flex-start",
    resizeMode: "contain",
    // borderWidth: 3,
    // borderRadius: hp("2"),
  },
  item: {
    fontSize: hp("1.5"),
    fontWeight: "400",
  },
  imageCard: {
    height: hp("15"),
    width: wp("30"),
    // margin: hp("0.5"),
    resizeMode: "cover",
    // borderWidth:1, 
    borderRadius: 10,
    borderColor:Colors.fadedgray
  },
  card: {
    flexDirection: "row",
    height: hp("15"),
    width: wp("98%"),
    flexDirection: "row",
    alignItems: "center",
    // alignSelf: "center",
    justifyContent: "center",
    // margin: hp("1.5"),
    // borderWidth:1,
    // backgroundColor:'yellow'
  },
  border: {
    borderWidth: 0.5,
    // padding: hp("1"),
    borderColor: Colors.fadedgray,
  },
});

export default Sponsored;
