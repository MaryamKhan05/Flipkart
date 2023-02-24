import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
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

import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Colors from "../../assets/Colors";
import Searchbar from "../components/Searchbar";
import Spacer from "../components/Spacer";
import Header from "../components/Header";
import OrderList from "../components/OrderItemList";
const Orders = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const getRecentSearches = async () => {
      try {
        const recentSearchesJson = await AsyncStorage.getItem("recentSearches");
        if (recentSearchesJson) {
          const parsedRecentSearches = JSON.parse(recentSearchesJson);
          setRecentSearches(parsedRecentSearches);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getRecentSearches();
  }, []);

  const handleSearch = () => {
    // Code to handle search
    // Add the search query to the recentSearches array
    setRecentSearches([...recentSearches, query]);
    // Save recent searches in AsyncStorage
    AsyncStorage.setItem(
      "recentSearches",
      JSON.stringify([...recentSearches, query])
    );
  };

  const clearRecentSearches = async () => {
    setRecentSearches([]);
    await AsyncStorage.removeItem("recentSearches");
  };

  const size = 20;
  const color = Colors.black;
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
  return (
    <SafeAreaView style={styles.MainContainer}>
      <Header headerTitle="My Orders" />
      <Spacer />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          // backgroundColor: "red",
          width: "95%",
          alignSelf: "center",
        }}
      >
        {/* <Searchbar /> */}
        <TouchableOpacity style={styles.bar} onPress={() => setFocused(true)}>
          <View style={styles.searchIcon}>
            <AntDesign name="search1" size={20} color={Colors.black} />
          </View>
          <View>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
              placeholder="Search for Products"
              value={query}
              onChangeText={setQuery}
              onSubmitEditing={handleSearch}
              onPress={() => setFocused(true)}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flexDirection: "row", marginHorizontal: hp("1") }}
          onPress={() => setModalVisible(true)}
        >
          <MaterialCommunityIcons
            name="filter-variant"
            size={size}
            color={color}
            // style={{ marginRight: 3 }}
          />
          <Text>Filters</Text>
        </TouchableOpacity>
      </View>
      <Spacer />

      <OrderList />

      {/******************************* M O D A L *********************************/}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.background}>
          <View style={styles.modalView}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.text}>Filters</Text>
              <Text style={styles.text}>Clear Filter</Text>
            </View>
            <Spacer />
            <Text style={styles.text}>Order Status</Text>
            <View>
              <View style={styles.row}>
                <TouchableOpacity style={styles.button}>
                  <Text>On the way</Text>
                  <AntDesign
                    name="plus"
                    size={size}
                    color={color}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text>Delivered</Text>
                  <AntDesign
                    name="plus"
                    size={size}
                    color={color}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity style={styles.button}>
                  <Text>Cancelled</Text>
                  <AntDesign
                    name="plus"
                    size={size}
                    color={color}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text>Returned</Text>
                  <AntDesign
                    name="plus"
                    size={size}
                    color={color}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Spacer />
            <Text style={styles.text}>Order Time</Text>
            <View>
              <View style={styles.row}>
                <TouchableOpacity style={styles.button}>
                  <Text>Last 30 days</Text>
                  <AntDesign
                    name="plus"
                    size={size}
                    color={color}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text>2022</Text>
                  <AntDesign
                    name="plus"
                    size={size}
                    color={color}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity style={styles.button}>
                  <Text>2021</Text>
                  <AntDesign
                    name="plus"
                    size={size}
                    color={color}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text>2020</Text>
                  <AntDesign
                    name="plus"
                    size={size}
                    color={color}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={[styles.button, { width: "95%" }]}>
                <Text>Older</Text>
                <AntDesign
                  name="plus"
                  size={size}
                  color={color}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
            <Spacer />
            <Divider />
            <Spacer />
            <View style={styles.row}>
              <Pressable
                style={styles.button}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </Pressable>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Apply</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      {/******************************* M O D A L *********************************/}
    </SafeAreaView>
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
    fontSize: 18,
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
    height: hp("70%"),
    width: wp("95%"),
    backgroundColor: "white",
    borderRadius: 10,
    padding: hp("2"),
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
    // backgroundColor: Colors.background,
    // backgroundColor: "red",
    padding: hp("1"),
    width: wp("40%"),
    borderWidth: 0.5,
    borderColor: Colors.fadedgray,
    margin: hp("1.5"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: hp("2"),
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
  row: {
    flexDirection: "row",
    // backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Orders;
