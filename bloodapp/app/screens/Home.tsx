import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import React, { useEffect, useContext, useState } from "react";
import { AppColors } from "../utils/AppColors";
import { WIDTH } from "../utils/AppDimension";
import Ionicons from "react-native-vector-icons/Ionicons";
import Donar from "../components/Donar";
import { useNavigation } from "@react-navigation/native";
import { Nav } from "../typeInterfaces/typeInterfaces";
import { getAuthUserData } from "../utils/LocalStorage";
import { AuthUserContext } from "../context/authUserContext";
import Post from "../components/Post";

const donaters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqdDPqIhJtO-FGbVxALsb5kdaZFreczNhcxoEmkhv-ubCuDAc9Pz8Xj-nJktjMo12qvpI&usqp=CAU";

const tabs = ["Posts", "Donars"];

const Home = () => {
  const navigation = useNavigation<Nav>();
  const { authUser, setAuthUser } = useContext<any>(AuthUserContext);
  const [initialTab, setInitialTab] = useState("Posts");
  const [tabloading, setTabLoading] = useState(false);
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAppLoading(false);
    }, 2000);
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

  const changeTab = (tab: string) => {
    setTabLoading(true);
    setTimeout(() => {
      setInitialTab(tab);
      setTabLoading(false);
    }, 1000);
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar backgroundColor={AppColors.RED} />
      {appLoading ? (
        <View style={styles.apploadingContainer}>
          <Image source={{ uri: img }} style={styles.imgStyle} />
        </View>
      ) : (
        <>
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

          {/* tabs  */}
          <View style={styles.tabContainer}>
            {tabs.map((tab, i) => (
              <TouchableOpacity
                style={[
                  styles.tabStyle,
                  initialTab == tab && {
                    backgroundColor: AppColors.LIGHTSKYBLUE,
                  },
                ]}
                key={i}
                onPress={() => changeTab(tab)}
              >
                <Text style={styles.tabText}>{tab}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* all content */}
          <ScrollView>
            <View style={styles.contentWrapper}>
              {tabloading ? (
                <View style={styles.lodderStyle}>
                  <ActivityIndicator size={"large"} color={AppColors.RED} />
                </View>
              ) : initialTab == "Posts" ? (
                donaters.map((data) => <Post key={data} />)
              ) : (
                donaters.map((data) => <Donar key={data} />)
              )}
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  apploadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.WHITE,
  },
  imgStyle: {
    width: 120,
    height: 100,
  },
  profileTopContainer: {
    width: WIDTH,
    height: 60,
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
    height: 37,
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
  },

  tabContainer: {
    width: "100%",
    height: 48,
    backgroundColor: AppColors.WHITE,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopColor: AppColors.LIGHTSKYBLUE,
    borderTopWidth: 1,
    borderBottomColor: AppColors.LIGHTSKYBLUE,
    borderBottomWidth: 1,
  },

  tabStyle: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  tabText: {
    fontWeight: "600",
    fontSize: 16,
  },
  lodderStyle: {
    flex: 1,
    justifyContent: "center",
    marginTop: 100,
    alignItems: "center",
  },
});
