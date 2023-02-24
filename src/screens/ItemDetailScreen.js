import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../assets/Colors";
import Divider from "../components/Divider";
import Header from "../components/Header";
import Spacer from "../components/Spacer";

const ItemDetail = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header headerTitle="Order Details" />
        <View style={styles.innerContainer}>
          <View style={styles.card}>
            <Text style={styles.gray}>Order Id- 11112222333</Text>
          </View>
          <Divider />
          <View style={styles.card}>
            <Text style={styles.heading}>
              MOONVALLEY Solid Men Multicolor Track Pants
            </Text>
            <Text style={styles.text}>XL, Multicolor</Text>
            <Text style={styles.text}>XL, Multicolor</Text>
            <View>
              <Text>374$</Text>
              <Text>2 offers</Text>
            </View>
            <Divider />
            <View>
              <Text>Order Confirmed</Text>
              <Text>thu, 4th Jan 23</Text>
            </View>
            <View>
              <Text>Delivered</Text>
              <Text>Your Item has been delivered</Text>
            </View>
            <View>
              <Text>Return</Text>
              <Text>thu, 4th Jan 23</Text>
            </View>
            <View>
              <Text>Refund</Text>
              <Text>thu, 4th Jan 23</Text>
            </View>
            <Divider />
            <Text>Need Help?</Text>
          </View>
          <Spacer />
          <View style={styles.card}>
            <Text style={styles.gray}>Rate your experience</Text>
          </View>
          <Divider />
          <View style={styles.card}>
            <Text>Did you find this page helpful?</Text>
          </View>
          <Spacer />
          <View style={styles.card}>
            <Text style={styles.gray}>I want to return this product </Text>
          </View>
          <Divider />
          <View style={styles.card}>
            <Text>Did you find this page helpful?</Text>
          </View>

          <Spacer />
          <View style={styles.card}>
            <Text style={styles.gray}>Return Id- 11112222333</Text>
          </View>
          <Divider />
          <View style={styles.card}>
            <Text style={styles.heading}>Refund Completed</Text>
            <Text style={styles.text}>
              333$ has been refunded to your Bank Account ending with
              ***********884 on Jan . for questions contact 000-00000-00
            </Text>
          </View>
          <Spacer />
          <View style={styles.card}>
            <Text style={styles.gray}>Shopping Details</Text>
          </View>
          <Divider />

          <View style={styles.card}>
            <Text style={styles.heading}>Refund Completed</Text>
            <Text style={styles.text}>
              333$ has been refunded to your Bank Account ending with
              ***********884 on Jan . for questions contact 000-00000-00
            </Text>
          </View>
          <Spacer />
          <View style={styles.card}>
            <Text style={styles.gray}>Price Details</Text>
          </View>
          <Divider />
          <View style={styles.card}>
            <Text style={styles.heading}>Refund Completed</Text>
            <Text style={styles.text}>
              333$ has been refunded to your Bank Account ending with
              ***********884 on Jan . for questions contact 000-00000-00
            </Text>
          </View>
          <Spacer />
          <Divider />
          <View style={styles.card}>
            <Text style={styles.heading}>Refund Completed</Text>
            <Text style={styles.text}>
              333$ has been refunded to your Bank Account ending with
              ***********884 on Jan . for questions contact 000-00000-00
            </Text>
          </View>
          <Spacer />
          <Divider />
          <View style={styles.card}>
            <Text style={styles.heading}>Refund Completed</Text>
            <Text style={styles.text}>
              333$ has been refunded to your Bank Account ending with
              ***********884 on Jan . for questions contact 000-00000-00
            </Text>
          </View>
          <Spacer />
          <Divider />
          <View style={styles.card}>
            <Text style={styles.heading}>Refund Completed</Text>
            <Text style={styles.text}>
              333$ has been refunded to your Bank Account ending with
              ***********884 on Jan . for questions contact 000-00000-00
            </Text>
          </View>
          <Spacer />
          <Divider />
          <View style={styles.card}>
            <Text style={styles.heading}>Refund Completed</Text>
            <Text style={styles.text}>
              333$ has been refunded to your Bank Account ending with
              ***********884 on Jan . for questions contact 000-00000-00
            </Text>
          </View>
          <Spacer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: Colors.gray,
  },
  card: {
    backgroundColor: Colors.white,
    // backgroundColor: "pink",
    padding: 10,
  },
  gray: {
    color: Colors.fadedgray,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 21,
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 21,
  },
  heading: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 21,
    color: Colors.orange,
    marginBottom: 10,
  },
});

export default ItemDetail;
