import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Platform,
} from "react-native";
import React, { FC, useState } from "react";
import { AppColors } from "../../utils/AppColors";
import { InputComp } from "../../components/InputComp";
import { TextComp } from "../../components/TextComp";
import DropDownList, { DropDownItems } from "../../components/DropDownList";
import { HEIGHT } from "../../utils/AppDimension";
import ButtonComp from "../../components/ButtonComp";
import { TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqdDPqIhJtO-FGbVxALsb5kdaZFreczNhcxoEmkhv-ubCuDAc9Pz8Xj-nJktjMo12qvpI&usqp=CAU";

const sex = ["Male", "Female", "Others"];
const bloodgroups = ["A+", "B+", "O+", "A-", "B-", "O-"];

interface mainPropstypes {
  navigation?: any;
}

const Register: FC<mainPropstypes> = ({ navigation }) => {
  const [showgender, setShowgender] = useState(false);
  const [gender, setGender] = useState("");
  const [showBloodList, setShowBloodList] = useState(false);
  const [bloodGroup, setbloodGroup] = useState("");
  const [date, setDate] = useState(new Date(Date.now()));
  const [userdate, setUserDate] = useState(null);
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [newDonar, setNewDonar] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    setUserDate(currentDate);
  };

  const showMode = (currentMode: any) => {
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

  const register = () => {
    if (userdate == null) {
      return alert("put a valid date");
    }
    console.log("btn cliked");
  };
  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor={AppColors.RED} />

      {/* logo  */}
      <View style={styles.logoWrapper}>
        <Image source={{ uri: img }} style={styles.imgStyle} />
      </View>

      {/* form content */}
      <View style={styles.formWrapper}>
        {/* name input */}
        <View style={styles.rowStyle}>
          <TextComp text="Name" textExtraStyle={styles.textExtraStyle} />
          <InputComp
            placeholder="Name"
            inputExtraStyle={styles.inputExtraStyle}
          />
        </View>

        {/* email  */}
        <View style={styles.rowStyle}>
          <TextComp text="Email" textExtraStyle={styles.textExtraStyle} />
          <InputComp
            placeholder="Email"
            inputExtraStyle={styles.inputExtraStyle}
          />
        </View>

        {/* password */}
        <View style={styles.rowStyle}>
          <TextComp text="Password" textExtraStyle={styles.textExtraStyle} />
          <InputComp
            placeholder="Password"
            inputExtraStyle={styles.inputExtraStyle}
          />
        </View>

        {/* phone */}
        <View style={styles.rowStyle}>
          <TextComp text="Phone" textExtraStyle={styles.textExtraStyle} />
          <InputComp
            placeholder="Phone no"
            inputExtraStyle={styles.inputExtraStyle}
          />
        </View>

        {/* address */}
        <View style={styles.rowStyle}>
          <TextComp text="Addres" textExtraStyle={styles.textExtraStyle} />
          <InputComp
            placeholder="Addres"
            inputExtraStyle={styles.inputExtraStyle}
          />
        </View>

        {/* division */}
        <View style={styles.rowStyle}>
          <TextComp text="Division" textExtraStyle={styles.textExtraStyle} />
          <InputComp
            placeholder="Division"
            inputExtraStyle={styles.inputExtraStyle}
          />
        </View>

        {/* blood group */}
        <View style={styles.rowStyle}>
          <TextComp text="Blood-Group" textExtraStyle={styles.textExtraStyle} />
          <View style={{ width: "70%" }}>
            <DropDownList
              placeholder="Group"
              show={showBloodList}
              setShow={setShowBloodList}
              value={bloodGroup}
            />
          </View>
        </View>

        {/* gender */}
        <View style={styles.rowStyle}>
          <TextComp text="Sex" textExtraStyle={styles.textExtraStyle} />
          <View style={{ width: "70%" }}>
            <DropDownList
              placeholder="Sex"
              show={showgender}
              setShow={setShowgender}
              value={gender}
            />
          </View>
        </View>

        {/* last donate date */}
        <View style={styles.rowStyle}>
          <TextComp
            text="Last Donate!"
            textExtraStyle={styles.textExtraStyle}
          />
          <View style={{ width: "60%" }}>
            <TouchableOpacity onPress={showDatepicker}>
              <Text>
                {userdate == null
                  ? "Select A Date"
                  : userdate?.toLocaleString()}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* new donar */}

        <View style={styles.rowStyle}>
          <TextComp text="New donar!" textExtraStyle={styles.textExtraStyle} />
          <View style={{ width: "60%" }}>
            <TouchableOpacity
              style={styles.newDonarCheckContainer}
              onPress={() => setNewDonar(!newDonar)}
            >
              {newDonar && (
                <View
                  style={{
                    width: 10,
                    height: 10,
                    backgroundColor: AppColors.RED,
                    borderRadius: 100,
                  }}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* login page text */}
      <View
        style={{
          width: "100%",
          marginVertical: 10,
        }}
      >
        <ButtonComp text="Sign In" onPress={register} />
        <View style={styles.signupTextContainer}>
          <TextComp
            text="Already Have Account ?"
            textExtraStyle={{ fontSize: 16 }}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <TextComp text="Sign In!" textExtraStyle={styles.linkText} />
          </TouchableOpacity>
        </View>
      </View>

      {/* gender select dropdown */}
      {showgender && (
        <DropDownItems
          data={sex}
          setValue={setGender}
          setShow={setShowgender}
          viewStyle={styles.dropdownItemStyle}
        />
      )}

      {/* blood group droupdown */}
      {showBloodList && (
        <DropDownItems
          data={bloodgroups}
          setValue={setbloodGroup}
          setShow={setShowBloodList}
          viewStyle={[styles.dropdownItemStyle, { height: HEIGHT / 2.4 }]}
        />
      )}

      {/* datepicker model */}
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          is24Hour={true}
          onChange={onChange}
          minimumDate={new Date(2022, 0, 1)}
        />
      )}
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  root: {
    backgroundColor: AppColors.WHITE,
    paddingHorizontal: 20,
  },

  logoWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  imgStyle: {
    width: 100,
    height: 100,
  },
  formWrapper: {
    marginTop: 10,
    width: "100%",
  },
  rowStyle: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  signupTextContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 15,
  },

  textExtraStyle: {
    marginBottom: 5,
    textDecorationLine: "underline",
    fontSize: 15,
  },

  linkText: {
    color: "green",
    fontWeight: "bold",
    marginLeft: -30,
  },

  inputExtraStyle: {
    width: "70%",
    backgroundColor: "transparent",
    borderBottomWidth: 2,
    borderBottomColor: AppColors.LIGHTSKYBLUE,
    height: 40,
  },
  dropdownItemStyle: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    position: "absolute",
    top: HEIGHT / 3,
    left: 0,
    backgroundColor: AppColors.LIGHTSKYBLUE,
    justifyContent: "center",
    alignItems: "center",
  },
  newDonarCheckContainer: {
    width: 18,
    height: 18,
    borderColor: AppColors.BLACK,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
