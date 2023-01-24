import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Platform,
  Alert,
  ActivityIndicator,
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
import { postData } from "../../api/post";
import AsyncStorage from "@react-native-async-storage/async-storage";

const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqdDPqIhJtO-FGbVxALsb5kdaZFreczNhcxoEmkhv-ubCuDAc9Pz8Xj-nJktjMo12qvpI&usqp=CAU";

const sex = ["Male", "Female", "Others"];
const bloodgroups = ["A+", "B+", "AB+", "O+", "A-", "B-", "O-"];

interface mainPropstypes {
  navigation?: any;
}

const Register: FC<mainPropstypes> = ({ navigation }) => {
  const [showgender, setShowgender] = useState(false);
  const [gender, setGender] = useState("");
  const [showBloodList, setShowBloodList] = useState(false);
  const [bloodGroup, setbloodGroup] = useState("");
  const [date, setDate] = useState(new Date(Date.now()));
  const [userdate, setUserDate] = useState<null | any>(null);
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [newDonar, setNewDonar] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [division, setDivision] = useState("");
  const [loading, setLoading] = useState(false);

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
    if (newDonar == true) {
      return Alert.alert("You have selected as a new donar!!");
    }
    setShow(true);
  };

  const checkDonar = () => {
    if (newDonar == false) {
      setNewDonar(true);
      setUserDate("");
    } else {
      setNewDonar(false);
    }
  };

  // register a user!!
  const register = async () => {
    setLoading(true);
    if (
      !name ||
      !email ||
      !password ||
      !phone ||
      !gender ||
      !address ||
      !division ||
      !bloodGroup
    ) {
      setLoading(false);
      return Alert.alert("Fill all the field's!");
    }
    if (newDonar && userdate) {
      setLoading(false);
      setUserDate("");
    }
    const data = {
      name,
      email,
      password,
      phone,
      gender,
      address,
      division,
      bloodGroup,
      lastdonatedate: userdate,
      newDonar,
    };
    try {
      const routePath = "/auth/register";
      postData(data, routePath)
        .then(async (data) => {
          // console.log("succes");
          // console.log(data);
          Alert.alert(data.message);
          const user = JSON.stringify(data.user);
          await AsyncStorage.setItem("user", user);
          navigation.navigate("Home");
        })
        .catch((err) => {
          console.log(err.message);
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const gotoLogin = () => {
    if (loading) {
      return;
    }
    navigation.navigate("Login");
    setLoading(false);
  };

  // styles
  const extraBtnStyle = {
    backgroundColor: loading ? AppColors.LIGHTSKYBLUE : AppColors.RED,
  };

  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor={AppColors.RED} />

      {/* all content */}

      {/* logo  */}
      <View style={styles.logoWrapper}>
        <Image source={{ uri: img }} style={styles.imgStyle} />
      </View>

      {/* form content */}
      <View style={styles.formWrapper}>
        {/* name input */}
        <SingleInputTextComp
          placeholder={"Name"}
          text="Name"
          setValue={setName}
        />

        {/* email  */}
        <SingleInputTextComp
          placeholder={"Email"}
          text="Email"
          setValue={setEmail}
        />

        {/* password */}
        <SingleInputTextComp
          placeholder={"Password"}
          text="Password"
          setValue={setPassword}
        />

        {/* phone */}
        <SingleInputTextComp
          placeholder={"Phone"}
          text="Phone"
          setValue={setPhone}
        />

        {/* address */}
        <SingleInputTextComp
          placeholder={"Addres"}
          text="Addres"
          setValue={setAddress}
        />

        {/* division */}
        <SingleInputTextComp
          placeholder={"Division"}
          text="Division"
          setValue={setDivision}
        />

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
              onPress={checkDonar}
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
        <ButtonComp
          text="Sign In"
          onPress={register}
          disabled={loading ? true : false}
          extraStyle={extraBtnStyle}
          loading={loading}
        />
        <View style={styles.signupTextContainer}>
          <TextComp
            text="Already Have Account ?"
            textExtraStyle={{ fontSize: 16 }}
          />
          <TouchableOpacity onPress={gotoLogin}>
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

// SingleInputTextComp sub reuseable component
interface CompProps {
  text: string;
  placeholder: string;
  setValue: any;
}
const SingleInputTextComp: FC<CompProps> = ({
  text,
  setValue,
  placeholder,
}) => (
  <View style={styles.rowStyle}>
    <TextComp text={text} textExtraStyle={styles.textExtraStyle} />
    <InputComp
      placeholder={placeholder}
      inputExtraStyle={styles.inputExtraStyle}
      setValue={setValue}
    />
  </View>
);

const styles = StyleSheet.create({
  root: {
    backgroundColor: AppColors.WHITE,
    paddingHorizontal: 15,
  },

  logoWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  imgStyle: {
    width: 80,
    height: 80,
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
