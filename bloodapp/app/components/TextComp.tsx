import React from "react";
import { FC } from "react";
import { Text, StyleSheet } from "react-native";

interface PropsTypes {
  text: string;
  textExtraStyle?: any;
}

export const TextComp: FC<PropsTypes> = ({ text, textExtraStyle }) => (
  <Text style={[styles.text, textExtraStyle]}>{text}</Text>
);

const styles = StyleSheet.create({
  text: {},
});
