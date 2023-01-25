import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import TopBackComp from "../components/TopBackComp";
import { endpoint } from "../api/endPoint";
import UseFetch from "../api/fetchData";
import { useNavigation } from "@react-navigation/native";
import { Nav } from "../typeInterfaces/typeInterfaces";
import DonatorTab from "../components/DonatorTab";
import { InputComp } from "../components/InputComp";
import { AppColors } from "../utils/AppColors";
import Ionicons from "react-native-vector-icons/Ionicons";
const Search = () => {
  const navigation = useNavigation<Nav>();
  const [bloodGroup, setbloodGroup] = useState("");
  // all users endpoint
  const alluserendpoint = `${endpoint}/auth/search?bloodgroup=${bloodGroup}`;
  // all users call
  const userData = UseFetch(alluserendpoint);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={styles.inputWrapper}>
        <InputComp
          placeholder="search by bloodgroup"
          inputExtraStyle={styles.inputExtraStyle}
          setValue={setbloodGroup}
          value={bloodGroup}
        />
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => userData.reFetch()}
        >
          <Ionicons name="search" size={22} color={AppColors.WHITE} />
        </TouchableOpacity>
      </View>

      <View style={styles.noteContainer}>
        <Text style={styles.dontText}>
          Don't need to add + or - operator for search!!
        </Text>
      </View>
      <ScrollView>
        <View style={styles.contentWrapper}>
          <DonatorTab userData={userData} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  inputWrapper: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop: 10,
  },
  inputExtraStyle: {
    height: 45,
    width: "80%",
  },
  contentWrapper: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  searchBtn: {
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.RED,
    height: 35,
    borderRadius: 10,
    marginBottom: 10,
  },
  noteContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  dontText: {
    fontSize: 15,
    fontWeight: "bold",
    color: AppColors.RED,
  },
});
