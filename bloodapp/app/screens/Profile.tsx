import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useContext, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { HEIGHT, WIDTH } from "../utils/AppDimension";
import { AppColors } from "../utils/AppColors";
import TopBackComp from "../components/TopBackComp";
import { useNavigation } from "@react-navigation/native";
import { Nav } from "../typeInterfaces/typeInterfaces";
import { AuthUserContext } from "../context/authUserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AntDesign from "react-native-vector-icons/AntDesign";
import ButtonComp from "../components/ButtonComp";

interface user {}

const Profile = () => {
  const navigation = useNavigation<Nav>();
  const { authUser, setAuthUser } = useContext<any>(AuthUserContext);
  const [logoutModel, setLogoutModel] = useState(false);

  // console.log(authUser);

  const logout = () => {
    AsyncStorage.clear();
    navigation.navigate("Main");
    Alert.alert("Logout SuccesFull!");
  };

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <TopBackComp text="Profile" onPress={() => navigation.goBack()} />

      {/* logout button */}
      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => setLogoutModel(!logoutModel)}
      >
        <AntDesign name="logout" color={AppColors.WHITE} size={16} />
      </TouchableOpacity>

      {/* logout model */}
      {logoutModel && (
        <View style={styles.logoutmodelStyle}>
          <Text
            style={{
              color: AppColors.WHITE,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Are you Sure you want to logout ?
          </Text>

          <View style={styles.modelBtnWrapper}>
            <ButtonComp
              text="Cancel"
              onPress={() => setLogoutModel(!logoutModel)}
              extraStyle={styles.cancelBtn}
            />
            <ButtonComp text="Ok" onPress={logout} extraStyle={styles.okBtn} />
          </View>
        </View>
      )}

      {/* profile details */}
      <View style={styles.profileContainer}>
        <Ionicons name="person-circle" size={50} />
        <Text style={styles.name}>
          {authUser != null ? authUser.name : "User"}
        </Text>
        <Text style={styles.email}>
          {authUser != null ? authUser.email : "User@gmail.com"}
        </Text>
        <View style={styles.rowStyle}>
          <Text>Total Donated = </Text>
          <Text>4</Text>
        </View>
        <View style={[styles.rowStyle, { marginTop: 5 }]}>
          <Text>Last Donated Date = </Text>
          <Text>
            {authUser != null
              ? authUser.lastdonatedate == ""
                ? "new Donar"
                : authUser.lastdonatedate.slice(0, 10)
              : "No Date found"}
          </Text>
        </View>

        {/* buttons */}
        <ButtonComp
          text="Edit Profile"
          onPress={() => navigation.navigate("EditProfile")}
          extraStyle={styles.editBtn}
        />
        <ButtonComp
          text="Add new Donated Date"
          onPress={() => {}}
          extraStyle={styles.addBtn}
        />
      </View>

      {/* donated history */}

      <View style={styles.historyTextContainer}>
        <Text style={styles.historyText}>Donated History</Text>
      </View>
      <ScrollView>
        <View style={styles.historyContainer}>
          <DonateHistory />
          <DonateHistory />
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const DonateHistory = () => (
  <View style={styles.lastDonateDateContainer}>
    <View
      style={[
        styles.rowStyle,
        { justifyContent: "space-between", marginBottom: 7 },
      ]}
    >
      <Text>Donated address</Text>
      <Text>Ctg, hospital</Text>
    </View>
    <View style={[styles.rowStyle, { justifyContent: "space-between" }]}>
      <Text>Donated Date</Text>
      <Text>12/12/22</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: AppColors.WHITE,
    paddingTop: 0,
    paddingBottom: 20,
    width: WIDTH,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 17,
    fontWeight: "600",
  },
  email: {
    fontSize: 16,
    marginVertical: 3,
  },
  rowStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  editBtn: {
    marginVertical: 7,
    backgroundColor: AppColors.BLACK,
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 10,
    height: 33,
    width: "30%",
  },
  editBtnText: {
    color: AppColors.WHITE,
  },
  addBtn: {
    backgroundColor: AppColors.RED,
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 10,
    height: 33,
    width: "50%",
  },
  logoutBtn: {
    marginTop: 10,
    position: "absolute",
    top: 0,
    right: 20,
    zIndex: 999,
    backgroundColor: AppColors.RED,
    width: 35,
    height: 35,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  addBtnText: {
    color: AppColors.WHITE,
    fontWeight: "700",
  },

  historyTextContainer: {
    marginTop: 10,
    height: 40,
    backgroundColor: AppColors.WHITE,
    justifyContent: "center",
    alignItems: "center",
  },

  historyText: {
    fontSize: 16,
  },
  historyContainer: {
    paddingHorizontal: 15,
    marginTop: 5,
    paddingBottom: 5,
  },

  lastDonateDateContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: AppColors.WHITE,
    borderWidth: 1,
    borderColor: AppColors.LIGHTSKYBLUE,
    borderRadius: 10,
  },
  logoutmodelStyle: {
    backgroundColor: AppColors.RED,
    width: WIDTH / 1.2,
    height: HEIGHT / 3.2,
    borderRadius: 10,
    borderColor: AppColors.WHITE,
    borderWidth: 1,
    position: "absolute",
    top: HEIGHT / 3,
    left: WIDTH * 0.08,
    zIndex: 999,
    paddingHorizontal: 10,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  modelBtnWrapper: {
    width: "70%",
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cancelBtn: {
    width: "40%",
    backgroundColor: "orange",
    height: 35,
  },
  okBtn: {
    width: "40%",
    backgroundColor: AppColors.BLACK,
    height: 35,
  },
});
