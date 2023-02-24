import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  // SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";

import AsyncStorage from "@react-native-async-storage/async-storage";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import RecentStores from "../components/RecentStores";
import Sponsored from "../components/Sponsored";
import Colors from "../../assets/Colors";
import MySwiper from "../components/Swipper";
import Spacer from "../components/Spacer";
import Best from "../components/BestQuality";
import Top from "../components/TopProducts";
import TravelEssential from "../components/TravelEssentails";
const HomeScreen = ({ navigation }) => {
  const [isOn, setIsOn] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const data = [
    { type: "Swiper" },
    { type: "HorizontalCard" },
    // { type: "RecentStores" },
    { type: "TravelEssential" },
    { type: "Sponsored" },
    { type: "BestQuality" },
    { type: "RecentStores" },
    { type: "TopProduct" },
    { type: "PeopleAlsoViewed" },
    { type: "RecentStores" },
  ];

  const renderMainItem = ({ item }) => {
    // if (item.type === "row") {
    //   return (
    //     <View style={styles.mainItem}>
    //       <Text>{item.text}</Text>
    //     </View>
    //   );
    // }

    if (item.type === "Swiper") {
      return (
        <View style={styles.swiper}>
          <MySwiper />
        </View>
      );
    }
    if (item.type === "RecentStores") {
      return (
        <View style={styles.list}>
          <Text style={styles.label}>Recently Viewed Stores</Text>
          <RecentStores />
          <Spacer />
        </View>
      );
    }
    if (item.type === "Sponsored") {
      return (
        <View>
          <Sponsored />
        </View>
      );
    }
    if (item.type === "BestQuality") {
      return (
        <View>
          <Best />
        </View>
      );
    }
    if (item.type === "TopProduct") {
      return (
        <View>
          <Top />
        </View>
      );
    }
    // if (item.type === "PeopleAlsoViewed") {
    //   return (
    //     <View>
    //       <Spacer />
    //       <Text style={styles.label}>People Also Viewed</Text>
    //       <Spacer />
    //       <Sponsored />
    //       <Spacer />
    //     </View>
    //   );
    // }
    if (item.type === "RecentStores") {
      return (
        <View style={styles.list}>
          <Text style={styles.label}>Recently Viewed Stores</Text>
          <RecentStores />
          <Spacer />
        </View>
      );
    }
    if (item.type === "TravelEssential") {
      return (
        <View style={styles.list}>
          <TravelEssential/>
        </View>
      );
    }
    if (item.type === "HorizontalCard") {
      return (
        // <View style={styles.list}>
        //   <Text style={styles.label}>Recently Viewed Stores</Text>
        //   <RecentStores />
        //   <Spacer />
        // </View>
        <View style={styles.horizontalCard}>
          <Image
            source={require("../../assets/card1.jpg")}
            style={styles.horizontalCardImage}
          />
          <Image
            source={require("../../assets/card1.jpg")}
            style={styles.horizontalCardImage}
          />
          <Image
            source={require("../../assets/card1.jpg")}
            style={styles.horizontalCardImage}
          />
        </View>
      );
    }
  };

  const keyExtractor = (item, index) => index.toString();

  const renderHorizontalItem = ({ item }) => {
    return (
      <View style={styles.horizontalItem}>
        <Text>{item}</Text>
      </View>
    );
  };

  // render() {
  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem("@viewedOnboarding");
    } catch (error) {
      console.log("Error @clearOnboarding: ", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <TouchableOpacity onPress={clearOnboarding}> 
        <Text>Clear Boarding</Text>
      </TouchableOpacity> */}
      <View style={[styles.row]}>
        <Image source={require("../../assets/logo.jpg")} style={styles.image} />
        <Text style={styles.logo}>Bulkbuddy</Text>
      </View>
      <Spacer />
      <View style={[styles.row, { width: "90%" }]}>
        <View style={{}}>
          <Text style={styles.text}>Brand Mall</Text>
          <TouchableOpacity
            onPress={() => setIsOn(!isOn)}
            style={{ marginRight: "5%", alignItems: "center" }}
          >
            {isOn ? (
              <FontAwesome name="toggle-on" size={25} color={Colors.black} />
            ) : (
              <FontAwesome name="toggle-off" size={25} color={Colors.black} />
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.bar}
          onPress={() => navigation.navigate("Search")}
        >
          <View style={styles.icon}>
            <AntDesign name="search1" size={15} color={Colors.black} />
          </View>
          <Text style={styles.placeholder}>Search Any Product</Text>
        </TouchableOpacity>
      </View>
      <Spacer />
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderMainItem}
        nestedScrollEnabled={true}
      />
      {/* <Spacer/>
      <Spacer/>
      <Spacer/>
      <Spacer/>
      <Spacer/> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  mainItem: {
    // height: 80,
    justifyContent: "center",
    alignItems: "center",
    // margin: 10,
    backgroundColor: "yellow",
  },
  horizontalItem: {
    width: "100%",
    // height:'50%',
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    backgroundColor: "blue",
  },
  list: {
    // height: 150,
    // margin: hp("1%"),
    // backgroundColor: "red",
    // marginBottom: "20%",
  },
  swiper: {
    height: 150,
    // margin: 5,
    // backgroundColor: "red",
    marginBottom: hp("4%"),
  },

  icon: {
    fontSize: hp("5%"),
    alignSelf: "center",
    marginHorizontal: 10,
    // backgroundColor:'pink'
  },
  mall: {
    fontWeight: "400",
    // backgroundColor: "red",
    // marginTop: 10,
  },

  image: {
    height: 40,
    width: 40,
  },
  row: {
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
    // alignItems: "flex-start",
    // paddingVertical: 15,
    // backgroundColor:'red',
    // width: "90%",
  },
  logo: {
    color: Colors.black,
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 26,
    marginTop: 10,
  },
  bar: {
    backgroundColor: "#F0EEEE",
    backgroundColor: "red",
    height: 40,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    // marginTop: 15,
    width: "75%",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 0.3,
  },
  input: {
    // borderColor: "black",
    flex: 1,
    // borderWidth: 0.3,
    fontSize: 18,
    padding: 10,
  },
  bar: {
    backgroundColor: "#F0EEEE",
    height: 40,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    width: "75%",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 0.3,
  },
  input: {
    flex: 1,
    fontSize: 18,
    padding: 10,
  },
  recentSearchesContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 50,
  },
  recentSearchesTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  searchbg: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
  },
  label: {
    fontSize: 18,
    fontWeight: "500",
    margin: wp("2%"),
    // backgroundColor:'pink',
    alignItems: "center",
    justifyContent: "center",
    // marginTop:hp('5')
  },
  verticalList: {
    height: "40%",
  },
  placeholder: {
    color: Colors.fadedgray,
    fontSize: 18,
    fontWeight: "500",
  },
  horizontalCard: {
    // backgroundColor: "pink",
    height: hp("15"),
    width: wp("98%"),
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    // padding:hp('2')
  },
  horizontalCardImage: {
    height: hp("15"),
    width: wp("32"),
    // borderWidth: 1,
    resizeMode: "contain",
    // margin: hp("0.5"),
  },
});

export default HomeScreen;
