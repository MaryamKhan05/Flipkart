import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../assets/Colors";
import Header from "../components/Header";
import MySwiper from "../components/Swipper";

const Wishlist = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header headerTitle="Wishlist" />
      <MySwiper/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default Wishlist;
