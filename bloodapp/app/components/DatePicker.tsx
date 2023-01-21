import React, { useState } from "react";

// import all the components we are going to use
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";

//import DatePicker from the package we installed
import DateTimePicker from "@react-native-community/datetimepicker";

export const DateComp = () => {
  const [date, setDate] = useState(new Date(Date.now()));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    console.log(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === "android") {
      //   setShow(false);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
    setShow(true);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button onPress={showDatepicker} title="Show date picker!" />
      <Text>selected: {date.toLocaleString()}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
};
