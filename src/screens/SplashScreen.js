import React, { useState, useEffect } from "react";
import { View, Image, Text, Animated, Easing, StyleSheet } from "react-native";

export default function Splashscreen() {
  const [logoScale] = useState(new Animated.Value(10));
  const logoPosition = new Animated.Value(0);
  const logomove = new Animated.Value(0);
  const [titlePosition] = useState(new Animated.Value(600));
  const [firstPosition] = useState(new Animated.ValueXY({ x: 400, y: -400 }));
  const [secondPosition] = useState(new Animated.ValueXY({ x: 400, y: -400 }));
  const [thirdPosition] = useState(new Animated.ValueXY({ x: 400, y: -400 }));
  const [forthPosition] = useState(new Animated.ValueXY({ x: 400, y: -400 }));
  const [fadeAnim] = useState(new Animated.Value(0));

  const logoScaleAnimation = Animated.timing(logoScale, {
    toValue: 1,
    duration: 1000,
    easing: Easing.ease,
    useNativeDriver: true,
  });

  const logoPositionAnimation = Animated.timing(logoPosition, {
    toValue: -70,
    duration: 600,
    easing: Easing.ease,
    useNativeDriver: true,
  });

  useEffect(() => {
    logoScaleAnimation.start(() => {
      logoPositionAnimation.start();
    });

    Animated.timing(logomove, {
      toValue: -100,
      duration: 2000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();

    Animated.timing(titlePosition, {
      toValue: 1,
      duration: 1800,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();

    Animated.timing(firstPosition, {
      toValue: { x: 0, y: 0 },
      duration: 1400,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();

    Animated.timing(secondPosition, {
      toValue: { x: 0, y: 0 },
      duration: 1500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();

    Animated.timing(thirdPosition, {
      toValue: { x: 0, y: 0 },
      duration: 1600,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();

    Animated.timing(forthPosition, {
      toValue: { x: 0, y: 0 },
      duration: 1700,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1800,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, []);

  const animatedValue = logoScale.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const animatedBorderRadius = logoScale.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 50],
  });

  return (
    <View style={styles.container}>
      <View style={styles.boxcontent}>
        <Animated.View
          style={[
            styles.logoContainer,
            {
              transform: [
                { scale: animatedValue },
                { translateX: logoPosition },
              ],
              width: 80,
              height: 80,
              borderRadius: animatedBorderRadius,
              backgroundColor: "white",
            },
          ]}
        ></Animated.View>
        <Animated.Image
          source={require("../../assets/logo1.png")}
          style={[
            styles.logo,
            {
              transform: [{ translateX: logoPosition }],
            },
          ]}
        />
        <Animated.Text
          style={[styles.title, { transform: [{ translateX: titlePosition }] }]}
        >
          Bulkbuddy
        </Animated.Text>
        <View style={styles.content}>
          <Animated.Text
            style={[
              styles.forth,
              {
                transform: [
                  { translateX: forthPosition.x },
                  { translateY: forthPosition.y },
                ],
                opacity: fadeAnim,
              },
            ]}
          >
            Home
          </Animated.Text>

          <Animated.Text
            style={[
              styles.second,
              {
                transform: [
                  { translateX: secondPosition.x },
                  { translateY: secondPosition.y },
                ],
                opacity: fadeAnim,
              },
            ]}
          >
            Appliance
          </Animated.Text>
          <Animated.Text
            style={[
              styles.first,
              {
                transform: [
                  { translateX: firstPosition.x },
                  { translateY: firstPosition.y },
                ],
                opacity: fadeAnim,
              },
            ]}
          >
            Electronics
          </Animated.Text>
          <Animated.Text
            style={[
              styles.third,
              {
                transform: [
                  { translateX: thirdPosition.x },
                  { translateY: thirdPosition.y },
                ],
                opacity: fadeAnim,
              },
            ]}
          >
            Mobiles
          </Animated.Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ea4235",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  boxcontent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 50,
  },
  logoContainer: {
    backgroundColor: "#fff",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
  },
  logo: {
    width: 70,
    height: 70,
    position: "absolute",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    right: -90,
    top: 390,
  },
  content: {
    alignItems: "left",
    top: -440,
    right: 110,
  },

  second: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    // right: -100,
    top: 260,
  },
  first: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    // right: -100,
    top: 300,
  },
  third: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    // right: -100,
    top: 220,
  },
  forth: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    // right: -100,
    top: 180,
  },
});