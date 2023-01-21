import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useContext } from "react";
import { AppColors } from "../utils/AppColors";
import { WIDTH } from "../utils/AppDimension";
import Ionicons from "react-native-vector-icons/Ionicons";
import Donar from "../components/Donar";
import { useNavigation } from "@react-navigation/native";
import { Nav } from "../typeInterfaces/typeInterfaces";
import { getAuthUserData } from "../utils/LocalStorage";
import { AuthUserContext } from "../context/authUserContext";

const donaters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Home = () => {
  const navigation = useNavigation<Nav>();
  const { authUser, setAuthUser } = useContext(AuthUserContext);

  useEffect(() => {
    navigation.addListener("focus", () => {
      getAuthUserData()
        .then((val) => {
          setAuthUser(val);
        })
        .catch((e) => console.log("not found"));
    });
  }, []);

  const gotoProfile = () => {
    authUser == null
      ? navigation.navigate("Register")
      : navigation.navigate("Profile");
  };

  return (
    <View>
      <StatusBar backgroundColor={AppColors.RED} />
      {/* topbar content/profileicon content */}
      <View style={styles.profileTopContainer}>
        <TouchableOpacity style={styles.iconWrapper} onPress={gotoProfile}>
          <Ionicons name="person-circle" size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputSample}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={styles.searchText}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* all content */}
      <ScrollView>
        <View style={styles.contentWrapper}>
          {donaters.map((data) => (
            <Donar key={data} />
          ))}
          {/* <Donar /> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  profileTopContainer: {
    width: WIDTH,
    height: 65,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: AppColors.WHITE,
  },
  iconWrapper: {
    width: "10%",
  },
  inputSample: {
    width: "85%",
    height: 40,
    backgroundColor: "#ddd",
    justifyContent: "center",
    paddingLeft: 10,
  },
  searchText: {
    color: "#bbb",
  },
  contentWrapper: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingBottom: 70,
  },
});
