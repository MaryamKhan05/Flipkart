import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather";

import Colors from "../../assets/Colors";

const Options = ({ name, route, icon }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(route)}
    >
      <View>{icon}</View>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          width: "87%",
        }}
      >
        <Text style={styles.name}>{name}</Text>
        <Feather name="chevron-right" size={20} color={Colors.black} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'pink',
    paddingVertical: 12,
    flexDirection: "row",
  },
  name: {
    fontSize: 16,
    fontWeight: "400",
  },
});

export default Options;
