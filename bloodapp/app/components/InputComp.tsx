import { TextInput, StyleSheet } from "react-native";
import { FC } from "react";
import { AppColors } from "../utils/AppColors";
import React from "react";

interface Props {
  placeholder: string;
  inputExtraStyle?: any;
  setValue?: any;
  secure?: boolean;
  multiline?: boolean;
}

export const InputComp: FC<Props> = ({
  placeholder,
  inputExtraStyle,
  setValue,
  secure,
  multiline,
}) => (
  <TextInput
    style={[styles.inputStyle, inputExtraStyle]}
    placeholder={placeholder}
    onChangeText={(val) => setValue(val)}
    secureTextEntry={secure}
    multiline={multiline}
    textAlignVertical={multiline ? "top" : "center"}
  />
);

const styles = StyleSheet.create({
  inputStyle: {
    width: "100%",
    height: 50,
    backgroundColor: AppColors.LIGHTSKYBLUE,
    borderRadius: 10,
    paddingLeft: 8,
    marginBottom: 10,
  },
});
