// import React from "react";
// import {
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   View,
//   Image,
//   KeyboardAvoidingView,
// } from "react-native";
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from "react-native-responsive-screen";

// import { ScrollView } from "react-native-gesture-handler";
// import { Input } from "react-native-elements";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Colors from "../../assets/Colors";
// import Divider from "../components/Divider";
// import Header from "../components/Header";
// import Spacer from "../components/Spacer";

// const Profile = () => {
//   return (
//     <SafeAreaView style={styles.container}>

//       <Header headerTitle="Edit Profile" />
//       <Text style={styles.label}>First Name</Text>
//       <Input placeholder="First Name" />
//       <Text style={styles.label}>Last Name</Text>
//       <Input placeholder="Last Name" />

//       <Text style={styles.label}>Gender</Text>
//       <View style={styles.avatar}>
//         <TouchableOpacity style={styles.imageContainer}>
//           <Image
//             source={require("../../assets/male.jpeg")}
//             style={styles.image}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.imageContainer}>
//           <Image
//             source={require("../../assets/femaleavatar.png")}
//             style={styles.image}
//           />
//         </TouchableOpacity>
//       </View>
//       <TouchableOpacity style={styles.btn}>
//         <Text style={styles.btnText}>Save</Text>
//       </TouchableOpacity>

//       <Text style={styles.label}>Mobile Number</Text>
//       {/* <TouchableOpacity>
//         <Text style={styles.update}>Update</Text>
//       </TouchableOpacity> */}
// <KeyboardAvoidingView
//       behavior='height'
//       style={styles.container}>
//       <Input placeholder="000000000000" />
//         <Input placeholder="Email " />

//       {/* <TouchableOpacity>
//         <Text style={styles.update}>Update</Text>
//       </TouchableOpacity> */}
//       <Spacer />
//       <TouchableOpacity>
//         <Text style={styles.additionalSettings}>Deactivate Account</Text>
//       </TouchableOpacity>
//       {/* <Spacer /> */}
//       <Divider />
//       {/* <Spacer /> */}
//       <TouchableOpacity>
//         <Text style={styles.additionalSettings}>Delete Account</Text>
//       </TouchableOpacity>
//       <Divider />
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "red",
//   },
//   // update: {
//   //   fontSize: 14,
//   //   fontWeight: "500",
//   //   color: Colors.orange,
//   //   position: "absolute",
//   //   alignSelf: "flex-end",
//   //   backgroundColor: "pink",
//   //   marginRight: 40,
//   // },
//   label: {
//     fontSize: hp("2"),
//     fontWeight: "400",
//     marginHorizontal: hp("2"),
//   },
//   btn: {
//     backgroundColor: Colors.orange,
//     width: wp("20%"),
//     height: hp("5%"),
//     borderRadius: 10,
//     justifyContent: "center",
//     alignItems: "center",
//     alignSelf: "center",
//     marginVertical: hp("2%"),
//   },
//   btnText: {
//     fontSize: 16,
//     fontWeight: "500",
//     color: Colors.white,
//   },
//   additionalSettings: {
//     fontSize: 17,
//     fontWeight: "500",
//     margin: 10,
//   },
//   avatar: {
//     flexDirection: "row",
//     // justifyContent:'space-between',
//     marginTop: hp("1%"),
//     // backgroundColor:'pink',
//     height: hp("10%"),
//     alignItems: "center",
//     width: wp("60"),
//     alignSelf: "center",
//     // justifyContent: "space-between",
//   },
//   image: {
//     resizeMode: "contain",
//     width: wp("20%"),
//     height: hp("20%"),
//     marginHorizontal: hp("2"),
//   },
//   // imageContainer: {
//   //   // width: wp("0%"),
//   //   // height: hp("100%"),
//   //   backgroundColor:'pink',
//   //   alignItems:'center'
//   // },
// });

// export default Profile;

import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { ScrollView } from "react-native-gesture-handler";
import { Input } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../assets/Colors";
import Divider from "../components/Divider";
import Header from "../components/Header";
import Spacer from "../components/Spacer";

const Profile = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Header headerTitle="Edit Profile" />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            {/* <Text style={styles.header}>Header</Text>
          <TextInput placeholder="Username" style={styles.textInput} />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View> */}
            <Text style={styles.label}>First Name</Text>
            <Input placeholder="First Name" />
            <Text style={styles.label}>Last Name</Text>
            <Input placeholder="Last Name" />

            <Text style={styles.label}>Gender</Text>
            <View style={styles.avatar}>
              <TouchableOpacity style={styles.imageContainer}>
                <Image
                  source={require("../../assets/male.jpeg")}
                  style={styles.image}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.imageContainer}>
                <Image
                  source={require("../../assets/femaleavatar.png")}
                  style={styles.image}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Save</Text>
            </TouchableOpacity>

            <Text style={styles.label}>Mobile Number</Text>
            {/* <TouchableOpacity>
        <Text style={styles.update}>Update</Text>
      </TouchableOpacity> */}

            <Input placeholder="000000000000" />
            <Input placeholder="Email " />

            {/* <TouchableOpacity>
        <Text style={styles.update}>Update</Text>
      </TouchableOpacity> */}
            <Spacer />
            <TouchableOpacity>
              <Text style={styles.additionalSettings}>Deactivate Account</Text>
            </TouchableOpacity>
            {/* <Spacer /> */}
            <Divider />
            {/* <Spacer /> */}
            <TouchableOpacity>
              <Text style={styles.additionalSettings}>Delete Account</Text>
            </TouchableOpacity>
            <Divider />
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  inner: {
    // padding: 24,
    // flex: 1,
    justifyContent: "space-around",
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },
  // update: {
  //   fontSize: 14,
  //   fontWeight: "500",
  //   color: Colors.orange,
  //   position: "absolute",
  //   alignSelf: "flex-end",
  //   backgroundColor: "pink",
  //   marginRight: 40,
  // },
  label: {
    fontSize: hp("2"),
    fontWeight: "400",
    marginHorizontal: hp("2"),
  },
  btn: {
    backgroundColor: Colors.orange,
    width: wp("20%"),
    height: hp("5%"),
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: hp("2%"),
  },
  btnText: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.white,
  },
  additionalSettings: {
    fontSize: 17,
    fontWeight: "500",
    margin: 10,
  },
  avatar: {
    flexDirection: "row",
    // justifyContent:'space-between',
    marginTop: hp("1%"),
    // backgroundColor:'pink',
    height: hp("10%"),
    alignItems: "center",
    width: wp("60"),
    alignSelf: "center",
    // justifyContent: "space-between",
  },
  image: {
    resizeMode: "contain",
    width: wp("20%"),
    height: hp("20%"),
    marginHorizontal: hp("2"),
  },
  imageContainer: {
    // width: wp("0%"),
    // height: hp("100%"),
    // backgroundColor: "pink",
    alignItems: "center",
  },
});

export default Profile;
