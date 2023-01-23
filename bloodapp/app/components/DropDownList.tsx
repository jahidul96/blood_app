import { StyleSheet, Text, TouchableOpacity, View, Modal } from "react-native";
import { FC } from "react";
import Feather from "react-native-vector-icons/Feather";
import React from "react";

interface PropsTypes {
  placeholder: string;
  show: boolean;
  setShow: any;
  value: any;
}

const DropDownList: FC<PropsTypes> = ({
  placeholder,
  show,
  setShow,
  value,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        setShow(!show);
      }}
    >
      <Text>{value == "" ? placeholder : value}</Text>
      <Feather name={value == "" ? "chevron-down" : "chevron-up"} />
    </TouchableOpacity>
  );
};

export default DropDownList;

interface itemsProps {
  data: any[];
  viewStyle?: any;
  setValue: any;
  setShow: any;
}

export const DropDownItems: FC<itemsProps> = ({
  data,
  viewStyle,
  setValue,
  setShow,
}) => (
  <View style={viewStyle}>
    {data.map((value, i) => (
      <TouchableOpacity
        onPress={() => {
          setValue(value);
          setShow(false);
        }}
        key={i}
        style={styles.itemStyle}
      >
        <Text>{value}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  itemStyle: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
