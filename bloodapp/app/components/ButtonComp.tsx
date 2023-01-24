import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { FC } from "react";
import { AppColors } from "../utils/AppColors";

interface PropsTypes {
  text: string;
  onPress: () => void;
  extraStyle?: any;
  disabled?: boolean;
  loading?: boolean;
}

const ButtonComp: FC<PropsTypes> = ({
  text,
  onPress,
  extraStyle,
  disabled,
  loading,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.btnStyle, extraStyle]}
    >
      {loading ? (
        <ActivityIndicator size={"small"} color={AppColors.RED} />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
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
