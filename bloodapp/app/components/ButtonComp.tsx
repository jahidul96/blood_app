import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { FC } from "react";
import { AppColors } from "../utils/AppColors";

interface PropsTypes {
  text: string;
  onPress: () => void;
}

const ButtonComp: FC<PropsTypes> = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnStyle}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  btnStyle: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.RED,
  },
  text: {
    color: AppColors.WHITE,
    fontWeight: "bold",
  },
});
