import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppColors } from "../utils/AppColors";
import { useNavigation } from "@react-navigation/native";

const Donar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* donar profile */}
      <View style={styles.profileContainer}>
        <View style={styles.profile}>
          <Ionicons name="person-circle" size={20} />
          <Text style={styles.name}>Akash</Text>
        </View>
        <Text>Available</Text>
      </View>
      <View style={styles.rowStyle}>
        <Text>Blood-Group : </Text>
        <Text>A+</Text>
      </View>
      <View style={[styles.rowStyle, { marginTop: 6 }]}>
        <Text>Address : </Text>
        <Text>potiya, chittagong</Text>
      </View>
      <View style={[styles.rowStyle, { marginTop: 6 }]}>
        <Text>Last Donate : </Text>
        <Text>11/12/22</Text>
      </View>
      <View style={styles.detailsWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate("DonarDetails")}>
          <Text style={styles.btnText}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Donar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: AppColors.WHITE,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: AppColors.LIGHTSKYBLUE,
    borderRadius: 10,
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 7,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    marginLeft: 8,
  },
  rowStyle: {
    flexDirection: "row",
  },
  detailsWrapper: {
    width: "100%",
    alignItems: "flex-end",
  },
  btnText: {
    color: AppColors.RED,
  },
});
