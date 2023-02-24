import "react-native-gesture-handler";
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


// import {
//   Provider as AuthProvider,
//   Context as AuthContext,
// } from "./src/context/AuthContext";

// import { Provider as LocationProvider } from "./src/context/LocationContext";
// import { Provider as TrackProvider } from "./src/context/TrackContext";
import BottomTab from "./tabNavigator";
import HomeScreen from "../screens/HomeScreen";
import CategoryScreen from "../screens/CategoriesScreen";
import CartScreen from "../screens/CartScreen";
import NotificationScreen from "../screens/NotificationScreen";
import Orders from "../screens/OrderScreen";
import ItemDetail from "../screens/ItemDetailScreen";
import Coupons from "../screens/CouponsScreen";
import Profile from "../screens/EditProfileScreen";
import Wishlist from "../screens/WishlistScreen";
import SearchScreen from "../screens/SearchScreen";
import Search from "../screens/SearchScreen";
import Mobiles from "../screens/MobilesScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => {
//   const { state } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {/* {state.token != null ? (
      <Tab.Navigator> 
        <Tab.Screen
            options={{ headerShown: false }}
            name="TrackListScreen"
            component={TrackListScreen}
          />
          <Tab.Screen
            options={{ headerShown: false }}
            name="TrackCreateScreen"
            component={TrackCreateScreen}
          />
          <Tab.Screen
            options={{ headerShown: false }}
            name="AccountScreen"
            component={AccountScreen}
          />
           <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={Colors.black} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="category" size={size} color={Colors.black} />
          ),
        }}
        name=" Categories"
        component={CategoryScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bell" size={size} color={Colors.black} />
          ),
        }}
        name="Notifications"
        component={NotificationScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome
              name="user-circle-o"
              size={size}
              color={Colors.black}
            />
          ),
        }}
        name="Account"
        component={AccountScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="shopping-cart" size={size} color={Colors.black} />
          ),
        }}
        name="Cart"
        component={CartScreen}
      />
        </Tab.Navigator> 
        
      ) : ( */}
      <Stack.Navigator >
        {/* <Stack.Screen
            options={{ headerShown: false }}
            name="LoadingScreen"
            component={LoadingScreen}
          />  */}
        {/* <Stack.Screen
            options={{ headerShown: false }}
            name="SignUp"
            component={SignUpScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="SignIn"
            component={SigninScreen}
          />  */}

        <Stack.Screen
          name="Back"
          component={BottomTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
        />
        <Stack.Screen
          name="Orders"
          component={Orders}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ItemDetail"
          component={ItemDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Coupons"
          component={Coupons}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Wishlist"
          component={Wishlist}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Mobiles"
          component={Mobiles}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      {/* )}  */}
    </NavigationContainer>
  );
};
export default MainStack
const styles = StyleSheet.create({});
// const MyApp = MainStack;

// export default () => {
//   return (
//     <TrackProvider>
//       <LocationProvider>
//         <AuthProvider>
//           <MainStack />
//         </AuthProvider>
//       </LocationProvider>
//     </TrackProvider>
//   );
// };