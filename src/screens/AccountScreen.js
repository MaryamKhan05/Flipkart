import React, { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Colors from "../../assets/Colors";
import Spacer from "../components/Spacer";
// import { Context as AuthContext } from "../context/AuthContext";
import Heading from "../components/Heading";
import Options from "../components/Options";
import Divider from "../components/Divider";
const AccountScreen = ({ navigation }) => {
  // const { signout } = useContext(AuthContext);
  const size = 20;
  const color = Colors.black;

  return (
    <SafeAreaView>
      {/* <Text style={{ fontSize: 48 }}>AccountScreen Screen</Text>
      <Spacer/>
      <Button
      title='Sign Out'
      onPress={signout}
      />
      <Spacer/> */}

      <View style={styles.header}>
        <Text style={styles.name}>Hey!</Text>
        <Text style={styles.name}> Maryam Khan</Text>
      </View>

      <Divider />

      <View style={styles.card}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => navigation.navigate("Orders")}
          >
            <Feather name="box" size={size} color={color} style={styles.icon} />
            <Text style={styles.buttonText}>Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Wishlist")}
          >
            <AntDesign
              name="hearto"
              size={size}
              color={color}
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Wishlist</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.button, { width: "95%" }]}
          onPress={() => navigation.navigate("Coupons")}
        >
          <AntDesign
            name="gift"
            size={size}
            color={color}
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Coupons</Text>
        </TouchableOpacity>
      </View>
      <Spacer />
      <View style={styles.card}>
        <Heading title="Account Settings" />
        <Options
          name="Edit Profile"
          route="Profile"
          icon={
            <AntDesign
              name="user"
              size={size}
              color={color}
              style={styles.icon}
            />
          }
        />
        <Options
          name="Saved Addresses"
          route=""
          icon={
            <EvilIcons
              name="location"
              size={25}
              color={color}
              style={{ marginHorizontal: 8 }}
            />
          }
        />
        <Options
          name="Notification Settings"
          route=""
          icon={
            <FontAwesome
              name="bell-o"
              size={size}
              color={color}
              style={styles.icon}
            />
          }
        />
      </View>

      <Spacer />
      <View style={styles.card}>
        <Heading title="Feedback & Information" />
        <Options
          name="Terms, Policies and Licenses"
          route=""
          icon={
            <MaterialCommunityIcons
              name="file-document-multiple-outline"
              size={size}
              color={color}
              style={styles.icon}
            />
          }
        />
        <Options
          name="Browse FAQs"
          route=""
          icon={
            <AntDesign
              name="questioncircleo"
              size={size}
              color={color}
              style={styles.icon}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    padding: 10,
    paddingHorizontal: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
  },
  card: {
    backgroundColor: Colors.white,
    padding: 10,
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
  icon: {
    marginHorizontal: 10,
  },
});

export default AccountScreen;
