import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../../assets/Colors";
const size = "90%";
const color = Colors.fadedgray;

const optionSize = 20;
const optionColor = Colors.black;

const EmptyCart = () => {
  return (
    // <SafeAreaView style={styles.container}>
    <View style={{ backgroundColor: "white", }}>
      <View style={styles.box}>
        <MaterialCommunityIcons
          name="cart-variant"
          size={size}
          color={color}
          style={styles.icon}
        />
        <Text style={styles.empty}>Your Cart is empty! </Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Shop now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.option}>
          <MaterialCommunityIcons
            name="security"
            size={optionSize}
            color={optionColor}
            style={styles.optionIcon}
          />
          <Text> Authentic Products</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <MaterialCommunityIcons
            name="security"
            size={optionSize}
            color={optionColor}
            style={styles.optionIcon}
          />
          <Text> Easy Returns</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <MaterialCommunityIcons
            name="security"
            size={optionSize}
            color={optionColor}
            style={styles.optionIcon}
          />
          <Text> Secure Payments</Text>
        </TouchableOpacity>
      </View>
      {/* // </SafeAreaView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // height:'50%',
    backgroundColor: Colors.white,
  },
  box: {
    backgroundColor: Colors.lightgray,
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
    height: "75%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    backgroundColor: Colors.orange,
    borderRadius: 5,
    padding: 10,
    marginVertical: "5%",
    width: "30%",
    alignItems: "center",
  },
  btnText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "500",
  },
  empty: {
    fontSize: 18,
    fontWeight: "700",
  },
  icon: {
    marginVertical: "5%",
  },
  option: {
    padding: 10,
    alignItems: "center",
  },
  optionIcon: {
    margin: 10,
  },
});

export default EmptyCart;
