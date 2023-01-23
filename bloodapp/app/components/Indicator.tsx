import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";
import { HEIGHT, WIDTH } from "../utils/AppDimension";
import { AppColors } from "../utils/AppColors";

const Indicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={AppColors.RED} size="large" />
    </View>
  );
};

export default Indicator;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: WIDTH,
    height: HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
});
