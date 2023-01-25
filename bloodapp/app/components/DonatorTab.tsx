import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { FC } from "react";
import { AppColors } from "../utils/AppColors";
import Donar from "./Donar";
import { Nav, user } from "../typeInterfaces/typeInterfaces";
import { useNavigation } from "@react-navigation/native";

interface PropsInterface {
  userData: any;
  tab?: boolean;
}

const DonatorTab: FC<PropsInterface> = ({ userData, tab }) => {
  const navigation = useNavigation<Nav>();
  return (
    <View style={{ flex: 1 }}>
      {tab && (
        <View
          style={{
            width: "100%",
            height: 50,
          }}
        >
          <TouchableOpacity
            style={styles.inputSample}
            onPress={() => navigation.navigate("Search")}
          >
            <Text style={styles.searchText}>Search</Text>
          </TouchableOpacity>
        </View>
      )}
      {userData.data?.alluser?.length == 0 ? (
        <View style={styles.nopostContainer}>
          <Text>No User Found!.</Text>
        </View>
      ) : userData.loading ? (
        <View style={styles.lodderStyle}>
          <ActivityIndicator size={"large"} color={AppColors.RED} />
        </View>
      ) : userData.err ? (
        <View style={styles.lodderStyle}>
          <Text>Something went wrong</Text>
        </View>
      ) : (
        userData?.data?.alluser.map((data: user) => (
          <Donar key={data._id} user={data} />
        ))
      )}
    </View>
  );
};

export default DonatorTab;

const styles = StyleSheet.create({
  nopostContainer: {
    flex: 1,
    justifyContent: "center",
    marginTop: 100,
    alignItems: "center",
  },
  lodderStyle: {
    flex: 1,
    justifyContent: "center",
    marginTop: 100,
    alignItems: "center",
  },
  inputSample: {
    width: "100%",
    height: 37,
    backgroundColor: "#ddd",
    justifyContent: "center",
    paddingLeft: 10,
    borderRadius: 10,
  },
  searchText: {
    color: "#bbb",
  },
});
