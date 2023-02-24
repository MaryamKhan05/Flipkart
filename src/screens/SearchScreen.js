// import React, { useState, useEffect } from "react";
// import {
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   View,
//   Image,
//   TextInput,
// } from "react-native";
// import { Input } from "react-native-elements";
// import { SafeAreaView } from "react-native-safe-area-context";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import Colors from "../../assets/Colors";
// import Divider from "../components/Divider";
// import Header from "../components/Header";
// import Spacer from "../components/Spacer";

// const Search = () => {
//   const [recentSearches, setRecentSearches] = useState([]);
//   const [query, setQuery] = useState("");
//   useEffect(() => {
//     const getRecentSearches = async () => {
//       try {
//         const recentSearchesJson = await AsyncStorage.getItem("recentSearches");
//         if (recentSearchesJson) {
//           const parsedRecentSearches = JSON.parse(recentSearchesJson);
//           setRecentSearches(parsedRecentSearches);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getRecentSearches();
//   }, []);

//   const handleSearch = () => {
//     // Code to handle search
//     // Add the search query to the recentSearches array
//     setRecentSearches([...recentSearches, query]);
//     // Save recent searches in AsyncStorage
//     AsyncStorage.setItem(
//       "recentSearches",
//       JSON.stringify([...recentSearches, query])
//     );
//   };

//   const clearRecentSearches = async () => {
//     setRecentSearches([]);
//     await AsyncStorage.removeItem("recentSearches");
//   };
//   return (
//     <SafeAreaView style={styles.container}>
//       <Header headerTitle="Search" />
//       <TextInput
//         autoCapitalize="none"
//         autoCorrect={false}
//         style={styles.input}
//         placeholder="Search for Products"
//         value={query}
//         onChangeText={setQuery}
//         onSubmitEditing={handleSearch}
//       />
//       <Spacer />
//       {recentSearches.map((search, index) => (
//         <TouchableOpacity style={styles.row}>
//           <MaterialIcons name="history" size={20} color={Colors.black} />
//           <Text key={index} style={styles.recentSearchItem}>
//             {search}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </SafeAreaView>
//   );
// };
// import React, { useState, useEffect } from "react";
// import {
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   View,
//   Image,
//   TextInput,
// } from "react-native";
// import { Input } from "react-native-elements";
// import { SafeAreaView } from "react-native-safe-area-context";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import Colors from "../../assets/Colors";
// import Divider from "../components/Divider";
// import Header from "../components/Header";
// import Spacer from "../components/Spacer";

// const Search = () => {
//   const [recentSearches, setRecentSearches] = useState([]);
//   const [query, setQuery] = useState("");
//   useEffect(() => {
//     const getRecentSearches = async () => {
//       try {
//         const recentSearchesJson = await AsyncStorage.getItem("recentSearches");
//         if (recentSearchesJson) {
//           const parsedRecentSearches = JSON.parse(recentSearchesJson);
//           setRecentSearches(parsedRecentSearches);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getRecentSearches();
//   }, []);

//   const handleSearch = () => {
//     // Code to handle search
//     // Add the search query to the recentSearches array
//     setRecentSearches([...recentSearches, query]);
//     // Save recent searches in AsyncStorage
//     AsyncStorage.setItem(
//       "recentSearches",
//       JSON.stringify([...recentSearches, query])
//     );
//   };

//   const clearRecentSearches = async () => {
//     setRecentSearches([]);
//     await AsyncStorage.removeItem("recentSearches");
//   };

//   const handleClearSearch = async (search) => {
//     const updatedSearches = recentSearches.filter((s) => s !== search);
//     setRecentSearches(updatedSearches);
//     await AsyncStorage.setItem(
//       "recentSearches",
//       JSON.stringify(updatedSearches)
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Header headerTitle="Search" />
//       <TextInput
//         autoCapitalize="none"
//         autoCorrect={false}
//         style={styles.input}
//         placeholder="Search for Products"
//         value={query}
//         onChangeText={setQuery}
//         onSubmitEditing={handleSearch}
//       />
//       <Spacer />
//       {recentSearches.map((search, index) => (
//         <View key={index} style={styles.row}>
//           <MaterialIcons name="history" size={20} color={Colors.black} />
//           <Text style={styles.recentSearchItem}>{search}</Text>
//           <TouchableOpacity onPress={() => handleClearSearch(search)}>
//             <MaterialIcons name="close" size={20} color={Colors.black} />
//           </TouchableOpacity>
//         </View>
//       ))}
//       {recentSearches.length > 0 && (
//         <TouchableOpacity onPress={clearRecentSearches}>
//           <Text style={styles.clearButton}>Clear All</Text>
//         </TouchableOpacity>
//       )}
//     </SafeAreaView>
//   );
// };

import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import { Input } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Colors from "../../assets/Colors";
import Divider from "../components/Divider";
import Header from "../components/Header";
import Spacer from "../components/Spacer";

const RecentSearchItem = ({ searchQuery, setQuery }) => {
  const handleRecentSearchPress = () => {
    setQuery(searchQuery);
  };

  return (
    <TouchableOpacity style={styles.row} onPress={handleRecentSearchPress}>
      <MaterialIcons name="history" size={20} color={Colors.black} />
      <Text style={styles.recentSearchItem}>{searchQuery}</Text>
    </TouchableOpacity>
  );
};

const Search = () => {
  const [recentSearches, setRecentSearches] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getRecentSearches = async () => {
      try {
        const recentSearchesJson = await AsyncStorage.getItem("recentSearches");
        if (recentSearchesJson) {
          const parsedRecentSearches = JSON.parse(recentSearchesJson);
          setRecentSearches(parsedRecentSearches);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getRecentSearches();
  }, []);

  const handleSearch = () => {
    // Code to handle search
    // Add the search query to the recentSearches array
    setRecentSearches([...recentSearches, query]);
    // Save recent searches in AsyncStorage
    AsyncStorage.setItem(
      "recentSearches",
      JSON.stringify([...recentSearches, query])
    );
  };

  const clearRecentSearches = async () => {
    setRecentSearches([]);
    await AsyncStorage.removeItem("recentSearches");
  };
  const handleClearSearch = async (search) => {
    const updatedSearches = recentSearches.filter((s) => s !== search);
    setRecentSearches(updatedSearches);
    await AsyncStorage.setItem(
      "recentSearches",
      JSON.stringify(updatedSearches)
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header headerTitle="Search" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder="Search for Products"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSearch}
      />
      <Spacer />
      {recentSearches.map((search, index) => (
        <View key={index} style={styles.row}>
          <RecentSearchItem
            key={index}
            searchQuery={search}
            setQuery={setQuery}
          />
          <TouchableOpacity onPress={() => handleClearSearch(search)}>
            <MaterialIcons name="close" size={20} color={Colors.black} />
          </TouchableOpacity>
        </View>
      ))}

      {recentSearches.length > 0 && (
        <TouchableOpacity onPress={clearRecentSearches} style={styles.clearButton}>
          <Text style={styles.clearButton}>Clear All</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },

  input: {
    // borderColor: "black",
    // flex: 1,
    // borderWidth: 0.3,
    fontSize: 18,
    // padding: 10,
    // backgroundColor:'red',
    borderBottomWidth: 0.5,
    borderColor: Colors.fadedgray,
    padding: 10,
  },
  recentSearchItem: {
    // backgroundColor:'pink',
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 18,
    fontWeight: "400",
  },
  row: {
    flexDirection: "row",
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent:'space-between'
  },
  clearButton:{
    backgroundColor:'pink',
    alignItems:'center',
    alignSelf:'baseline'
  }
});

export default Search;
