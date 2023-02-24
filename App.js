// import "react-native-gesture-handler";
// import React, { useContext } from "react";
// import { StyleSheet } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import DetailsScreen from "./src/screens/TrackDetailScreen";

// import {
//   Provider as AuthProvider,
//   Context as AuthContext,
// } from "./src/context/AuthContext";

// import { Provider as LocationProvider } from "./src/context/LocationContext";
// import { Provider as TrackProvider } from "./src/context/TrackContext";
// import BottomTab from "./src/navigation/tabNavigator";
// import HomeScreen from "./src/screens/HomeScreen";
// import CategoryScreen from "./src/screens/CategoriesScreen";
// import CartScreen from "./src/screens/CartScreen";
// import NotificationScreen from "./src/screens/NotificationScreen";
// import Orders from "./src/screens/OrderScreen";
// import ItemDetail from "./src/screens/ItemDetailScreen";
// import Coupons from "./src/screens/CouponsScreen";
// import Profile from "./src/screens/EditProfileScreen";
// import Wishlist from "./src/screens/WishlistScreen";

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const App = () => {
//   const { state } = useContext(AuthContext);
//   return (
//     <NavigationContainer>
//       {/* {state.token != null ? (
//       <Tab.Navigator>
//         <Tab.Screen
//             options={{ headerShown: false }}
//             name="TrackListScreen"
//             component={TrackListScreen}
//           />
//           <Tab.Screen
//             options={{ headerShown: false }}
//             name="TrackCreateScreen"
//             component={TrackCreateScreen}
//           />
//           <Tab.Screen
//             options={{ headerShown: false }}
//             name="AccountScreen"
//             component={AccountScreen}
//           />
//            <Tab.Screen
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ color, size }) => (
//             <Entypo name="home" size={size} color={Colors.black} />
//           ),
//         }}
//         name="Home"
//         component={HomeScreen}
//       />
//       <Tab.Screen
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <MaterialIcons name="category" size={size} color={Colors.black} />
//           ),
//         }}
//         name=" Categories"
//         component={CategoryScreen}
//       />
//       <Tab.Screen
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ color, size }) => (
//             <FontAwesome name="bell" size={size} color={Colors.black} />
//           ),
//         }}
//         name="Notifications"
//         component={NotificationScreen}
//       />
//       <Tab.Screen
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ color, size }) => (
//             <FontAwesome
//               name="user-circle-o"
//               size={size}
//               color={Colors.black}
//             />
//           ),
//         }}
//         name="Account"
//         component={AccountScreen}
//       />
//       <Tab.Screen
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ color, size }) => (
//             <Entypo name="shopping-cart" size={size} color={Colors.black} />
//           ),
//         }}
//         name="Cart"
//         component={CartScreen}
//       />
//         </Tab.Navigator>

//       ) : ( */}
//       <Stack.Navigator>
//         {/* <Stack.Screen
//             options={{ headerShown: false }}
//             name="LoadingScreen"
//             component={LoadingScreen}
//           />  */}
//         {/* <Stack.Screen
//             options={{ headerShown: false }}
//             name="SignUp"
//             component={SignUpScreen}
//           />
//           <Stack.Screen
//             options={{ headerShown: false }}
//             name="SignIn"
//             component={SigninScreen}
//           />  */}

//         <Stack.Screen
//           name="Back"
//           component={BottomTab}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen name="TrackDetailScreen" component={DetailsScreen} />
//         <Stack.Screen
//           name="HomeScreen"
//           component={HomeScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
//         <Stack.Screen name="CartScreen" component={CartScreen} />
//         <Stack.Screen
//           name="NotificationScreen"
//           component={NotificationScreen}
//         />
//         <Stack.Screen
//           name="Orders"
//           component={Orders}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="ItemDetail"
//           component={ItemDetail}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Coupons"
//           component={Coupons}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Profile"
//           component={Profile}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Wishlist"
//           component={Wishlist}
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//       {/* )}  */}
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({});
// const MyApp = App;

// export default () => {
//   return (
//     <TrackProvider>
//       <LocationProvider>
//         <AuthProvider>
//           <App />
//         </AuthProvider>
//       </LocationProvider>
//     </TrackProvider>
//   );
// };

import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Onboardingpage from "./src/screens/BoardinScreen";
import HomeScreen from "./src/screens/HomeScreen";
import Splashscreen from "./src/screens/SplashScreen";
import MainStack from "./src/navigation/mainStack";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500); // Simulate a delay of 3 seconds
  }, []);

  // return loading ? <Splashscreen /> : <MainStack />;
  // return loading ? <Splashscreen /> : <Onboardingpage/>;
  return <MainStack/>;
}

const styles = StyleSheet.create({});
