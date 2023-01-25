import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { AppColors } from "../utils/AppColors";
import { useNavigation } from "@react-navigation/native";
import { Nav, user } from "../typeInterfaces/typeInterfaces";

interface PropsTypes {
  user: user;
}
const Donar: FC<PropsTypes> = ({ user }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* donar profile */}
      <View style={styles.profileContainer}>
        <View style={styles.profile}>
          <Ionicons name="person-circle" size={20} color={AppColors.BLUE} />
          <Text style={styles.name}>{user?.name}</Text>
        </View>
        <Text>Available</Text>
      </View>
      <View style={styles.rowStyle}>
        <Fontisto name="blood-drop" size={16} color={AppColors.RED} />
        <Text style={styles.bloodgroup}>{user?.bloodGroup}</Text>
      </View>
      <View style={[styles.rowStyle, { marginTop: 6 }]}>
        <FontAwesome name="address-book" size={16} color={AppColors.BLUE} />
        <Text style={styles.bloodgroup}>{user?.address}</Text>
      </View>
      <View style={[styles.rowStyle, { marginTop: 6 }]}>
        <Text>Last Donate : </Text>
        <Text>
          {user?.lastdonatedate
            ? user?.lastdonatedate.slice(0, 10)
            : "New Donar"}
        </Text>
      </View>
      <View style={styles.detailsWrapper}>
        <TouchableOpacity
          onPress={() => navigation.navigate("DonarDetails", { user: user })}
        >
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
    borderColor: AppColors.RED,
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
  bloodgroup: {
    marginLeft: 5,
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
