import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { WIDTH } from "../utils/AppDimension";
import { AppColors } from "../utils/AppColors";
import TopBackComp from "../components/TopBackComp";
import { useNavigation } from "@react-navigation/native";
import { Nav } from "../typeInterfaces/typeInterfaces";
import { AuthUserContext } from "../context/authUserContext";

interface user {}

const Profile = () => {
  const navigation = useNavigation<Nav>();

  return (
    <View>
      <TopBackComp text="Profile" onPress={() => navigation.goBack()} />
      {/* profile details */}
      <View style={styles.profileContainer}>
        <Ionicons name="person-circle" size={50} />
        <Text style={styles.name}>Akash</Text>
        <Text style={styles.email}>Akash@gmail.com</Text>
        <View style={styles.rowStyle}>
          <Text>Total Donated = </Text>
          <Text>4</Text>
        </View>
        <View style={[styles.rowStyle, { marginTop: 5 }]}>
          <Text>Last Donated Date = </Text>
          <Text>12/12/22</Text>
        </View>

        <TouchableOpacity style={styles.editBtn}>
          <Text style={styles.editBtnText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.addBtnText}>Add new Donated Date</Text>
        </TouchableOpacity>
      </View>

      {/* donated history */}

      <View style={styles.historyTextContainer}>
        <Text style={styles.historyText}>Donated History</Text>
      </View>
      <ScrollView>
        <View style={styles.historyContainer}>
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
    paddingTop: 10,
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
  },
  editBtnText: {
    color: AppColors.WHITE,
  },
  addBtn: {
    backgroundColor: AppColors.RED,
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 10,
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
    marginTop: 10,
  },

  lastDonateDateContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: AppColors.WHITE,
    borderWidth: 1,
    borderColor: AppColors.LIGHTSKYBLUE,
    borderRadius: 10,
  },
});
