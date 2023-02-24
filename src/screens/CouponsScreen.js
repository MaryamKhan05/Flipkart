import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Colors from "../../assets/Colors";
import Header from "../components/Header";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    avatar: "https://www.bootdey.com/img/Content/avatar/avatar2.png",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    avatar: "https://www.bootdey.com/img/Content/avatar/avatar2.png",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    avatar: "https://www.bootdey.com/img/Content/avatar/avatar2.png",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Coupons = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header headerTitle="Coupons" />

      {/* <Text>My Coupons</Text> */}
      <TouchableOpacity
        style={{
          alignSelf: "flex-end",
        }}
      >
        <Text style={styles.bold}>Add Coupons</Text>
      </TouchableOpacity>
      <View style={styles.listContainer}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => {
          return (
            <View style={styles.listContainer} >
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: item.avatar }}
                  style={{
                    height: "100%",
                    width: "100%",
                    alignSelf: "flex-start",
                    resizeMode: "contain",
                  }}
                />
              
              </View>
              <Item title={item.title} />
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    // backgroundColor: Colors.white,
    backgroundColor:'pink'
  },
  item: {
    // backgroundColor: "#f9c2ff",
    // padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  listContainer: {
    backgroundColor: "red",
    flexDirection: "row",
    // padding: 10,
    width: "95%",
    // height: "55%",
    borderColor: Colors.fadedgray,
    borderWidth: 1,
    alignItems: "center",
    // height:'30%'
  },
  title: {
    // fontSize: 32,
  },
  imageContainer: {
    // backgroundColor: "pink",
    height: "80%",
    width: "20%",
    borderRadius: 10,
    resizeMode: "contain",
  },
  bold: {
    fontSize: 18,
    fontWeight: "500",
    marginHorizontal:20,
    marginBottom:5,
    color:Colors.orange,
  },
});

export default Coupons;
