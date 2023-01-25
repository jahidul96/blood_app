import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { AppColors } from "../utils/AppColors";
import Ionicons from "react-native-vector-icons/Ionicons";
import TopBackComp from "../components/TopBackComp";
import { useNavigation } from "@react-navigation/native";
import { Nav, user } from "../typeInterfaces/typeInterfaces";
import ButtonComp from "../components/ButtonComp";

interface PropsTypes {
  user: any;
}

const DonarDetails: FC<PropsTypes> = ({ route }) => {
  const navigation = useNavigation<Nav>();

  const { user } = route.params;

  return (
    <View>
      <TopBackComp text="Details" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        {/* donar profile */}
        <View style={styles.profileContainer}>
          <View style={styles.profile}>
            <Ionicons name="person-circle" size={24} color={AppColors.BLUE} />
            <Text style={styles.name}>{user?.name}</Text>
          </View>
          <Text>Available</Text>
        </View>
        <View style={[styles.rowStyle, { marginTop: 5 }]}>
          <Text>Blood-Group : </Text>
          <Text style={styles.phone}>{user?.bloodGroup}</Text>
        </View>
        <View style={[styles.rowStyle, styles.mt]}>
          <Text>Address : </Text>
          <Text style={styles.phone}>{user?.address}</Text>
        </View>
        <View style={[styles.rowStyle, styles.mt]}>
          <Text>Last Donate : </Text>
          <Text style={styles.phone}>
            {user?.lastdonatedate
              ? user?.lastdonatedate.slice(0, 10)
              : "New Donar"}
          </Text>
        </View>
        <View style={[styles.rowStyle, styles.mt]}>
          <Text>Phone : </Text>
          <Text style={styles.phone}>{user?.phone}</Text>
        </View>
        <View style={styles.detailsWrapper}>
          <ButtonComp
            text="Message"
            onPress={() => {}}
            extraStyle={styles.messageBtn}
          />
          <ButtonComp
            text="Call"
            onPress={() => {}}
            extraStyle={styles.callBtn}
          />
        </View>
      </View>
    </View>
  );
};

export default DonarDetails;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: AppColors.WHITE,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: AppColors.LIGHTSKYBLUE,
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
  mt: {
    marginTop: 10,
  },
  name: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  bloodGroup: {
    fontSize: 15,
    fontWeight: "bold",
  },
  phone: {
    fontSize: 18,
    marginTop: -2,
    fontWeight: "bold",
    marginLeft: 10,
  },
  rowStyle: {
    flexDirection: "row",
  },
  detailsWrapper: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
  },
  btnText: {
    color: AppColors.RED,
    fontSize: 17,
  },
  messageBtn: {
    borderRadius: 0,
    width: "50%",
  },
  callBtn: {
    borderRadius: 0,
    width: "50%",
    backgroundColor: AppColors.BLACK,
  },
});
