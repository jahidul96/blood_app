import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { WIDTH } from "../utils/AppDimension";
import { AppColors } from "../utils/AppColors";
import Ionicons from "react-native-vector-icons/Ionicons";

interface PropsTypes {
  text: string;
  onPress?: () => void;
}

const TopBackComp: FC<PropsTypes> = ({ text, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name="chevron-back" size={25} />
      </TouchableOpacity>

      <Text
        style={{
          marginLeft: 6,
          fontSize: 17,
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default TopBackComp;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: AppColors.WHITE,
  },
});
