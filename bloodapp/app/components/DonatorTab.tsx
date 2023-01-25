import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { FC } from "react";
import { AppColors } from "../utils/AppColors";
import Donar from "./Donar";
import { user } from "../typeInterfaces/typeInterfaces";

interface PropsInterface {
  userData: any;
}

const DonatorTab: FC<PropsInterface> = ({ userData }) => {
  return (
    <View style={{ flex: 1 }}>
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
});
