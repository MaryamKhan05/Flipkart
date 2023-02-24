import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
//   SafeAreaView,
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
import ImageContainer from "../components/Mobiles/MobileAd";
import MobileList from "../components/Mobiles/MobilesList";
import HorizontalMobile from "../components/Mobiles/HorizontalMobileList";
import TopPicks from "../components/Mobiles/TopPicks";
import Launches from "../components/Mobiles/LatestLaunches";
import SamsungList from "../components/Mobiles/SamsungList";
import Grab from "../components/Mobiles/GrabList";
const Mobiles = ({ navigation }) => {
  const [isOn, setIsOn] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const data = [
    { type: "image" },
    { type: "MobileList" },
    { type: "swiper" },
    { type: "HorizontalList" },
    { type: "LatestLaunches" },
    { type: "SamsungList" },
    { type: "image" },
    { type: "Grab" },
    // { type: "TopPicks" },
    // { type: "RecentStores" },
    // { type: "TopProduct" },
    // { type: "PeopleAlsoViewed" },
    // { type: "RecentStores" },
  ];

  const renderMainItem = ({ item }) => {
    // if (item.type === "row") {
    //   return (
    //     <View style={styles.mainItem}>
    //       <Text>{item.text}</Text>
    //     </View>
    //   );
    // }

    if (item.type === "image") {
      return (
        <View style={styles.list}>
          <ImageContainer />
        </View>
      );
    }
    if (item.type === "swiper") {
      return (
        <View style={styles.swiper}>
          <MySwiper />
          {/* <Spacer/> */}
        </View>
      );
    }
    if (item.type === "MobileList") {
      return (
        <View style={styles.list}>
          {/* <Text style={styles.label}>Recently Viewed Stores</Text> */}
          <MobileList />
          {/* <Spacer /> */}
        </View>
      );
    }
    if (item.type === "HorizontalList") {
      return (
        <View style={styles.list}>
          <Spacer />
          <HorizontalMobile />
        </View>
      );
    }
    if (item.type === "LatestLaunches") {
      return (
        <View style={styles.list}>
          {/* <Spacer /> */}
          <Launches />
        </View>
      );
    }
    if (item.type === "SamsungList") {
      return (
        <View style={styles.list}>
          <Spacer />
          <SamsungList />
        </View>
      );
    }
    if (item.type === "Grab") {
      return (
        <View style={styles.list}>
          <Grab />
        </View>
      );
    }
    if (item.type === "TopPicks") {
      return (
        <View style={styles.list}>
          <TopPicks />
        </View>
      );
    }
    if (item.type === "TopProduct") {
      return (
        <View style={styles.list}>
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
    // if (item.type === "RecentStores") {
    //   return (
    //     <View style={styles.list}>
    //       <Text style={styles.label}>Recently Viewed Stores</Text>
    //       <RecentStores />
    //       <Spacer />
    //     </View>
    //   );
    // }
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
      <Spacer />
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderMainItem}
        nestedScrollEnabled={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  mainItem: {
    // height: 80,
    justifyContent: "center",
    alignItems: "center",
    // margin: 10,
    backgroundColor: "yellow",
  },
  horizontalItem: {
    width: wp("100%"),
    // height:'50%',
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: hp('2'),
    backgroundColor: "blue",
  },
  list: {
    // height: hp('14'),
    // margin: hp("1%"),
    // backgroundColor: "red",
    // marginBottom: "20%",
  },
  swiper: {
    height: hp("20"),
    // margin: 5,
    // backgroundColor: "red",
    marginBottom: hp("10%"),
    alignSelf: "flex-start",
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
});

export default Mobiles;
