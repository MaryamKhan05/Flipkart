import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

const data = [
  // {
  //   id: 1,
  //   sender: "Victoria Hanson",
  //   email: "@vicky23hanson",
  //   text: "Lorem ipsum dolor sit amit dolor connectsur?",
  //   senderType: "user",
  //   avatar: "https://www.bootdey.com/img/Content/avatar/avatar1.png",
  //   image: "https://www.bootdey.com/image/580x580/00BFFF/000000",
  //   price: "$100",
  // },
  {
    id: 2,
    sender: "Victoria Hanson",
    email: "@vicky23hanson",
    text: "Lorem ipsum dolor sit amit dolor connectsur",
    senderType: "other",
    avatar: "https://www.bootdey.com/img/Content/avatar/avatar2.png",
    image: "https://www.bootdey.com/image/580x580/FF00FF/000000",
    price: "$100",
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
];

const CouponsList = () => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
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
    </View>
  );
};

const styles = StyleSheet.create({
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "red",
  },
  card: {
    borderRadius: 10,
    // margin: 5,
    // backgroundColor: 'red',
    // justifyContent: "center",
    alignItems: "center",
    // alignSelf:'center',
    width: '95%',
    height: "55%",
    borderColor: Colors.fadedgray,
    borderWidth: 1,
    flexDirection:'row'
  },
  // listContainer: {
  //   // backgroundColor: "orange",
  //   width: "100%",
  //   height: "30%",
  //   // justifyContent: "center",
  //   margin: 10,
  // },
  
  btn: {
    padding: 12,
    margin: 10,
    borderRadius: 99,
  },
 
  imageContainer: {
    backgroundColor: "pink",
    height: "60%",
    width: "40%",
    borderRadius: 10,
  },
});

export default CouponsList;
