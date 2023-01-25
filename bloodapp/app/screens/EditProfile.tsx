import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  Alert,
} from "react-native";
import React, { FC, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DropDownList, { DropDownItems } from "../components/DropDownList";
import { TextComp } from "../components/TextComp";
import ButtonComp from "../components/ButtonComp";
import { AppColors } from "../utils/AppColors";
import { InputComp } from "../components/InputComp";
import { HEIGHT } from "../utils/AppDimension";
import TopBackComp from "../components/TopBackComp";
import { deleteData, updateData } from "../api/apiCall";
import { AuthUserContext } from "../context/authUserContext";

const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqdDPqIhJtO-FGbVxALsb5kdaZFreczNhcxoEmkhv-ubCuDAc9Pz8Xj-nJktjMo12qvpI&usqp=CAU";

const sex = ["Male", "Female", "Others"];
const bloodgroups = ["A+", "B+", "O+", "A-", "B-", "O-"];

interface mainPropstypes {
  navigation?: any;
}

const EditProfile: FC<mainPropstypes> = ({ navigation }) => {
  const { authUser } = useContext<any>(AuthUserContext);
  const [showgender, setShowgender] = useState(false);
  const [gender, setGender] = useState(authUser?.gender);
  const [showBloodList, setShowBloodList] = useState(false);
  const [bloodGroup, setbloodGroup] = useState(authUser?.bloodGroup);
  const [name, setName] = useState(authUser?.name);
  const [phone, setPhone] = useState(authUser?.phone);
  const [address, setAddress] = useState(authUser?.address);
  const [division, setDivision] = useState(authUser?.division);
  const [loading, setLoading] = useState(false);

  // register a user!!
  const updateUser = async () => {
    setLoading(true);

    const data = {
      name,
      phone,
      gender,
      address,
      division,
      bloodGroup,
    };

    try {
      const routePath = `/auth/update/${authUser?._id}`;
      setTimeout(() => {
        updateData(data, routePath)
          .then(async (data) => {
            // console.log("succes");
            // console.log(data);
            Alert.alert(data.message);
            const user = JSON.stringify(data.user);
            await AsyncStorage.setItem("user", user);
            navigation.navigate("Home");
            setLoading(false);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }, 2000);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // styles
  const extraBtnStyle = {
    backgroundColor: loading ? AppColors.LIGHTSKYBLUE : AppColors.RED,
  };

  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor={AppColors.RED} />
      <TopBackComp
        text="EditProfile"
        onPress={() => navigation.goBack()}
        extraStyle={{ paddingHorizontal: 0 }}
      />

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
          value={name}
        />

        {/* phone */}
        <SingleInputTextComp
          placeholder={"Phone"}
          text="Phone"
          setValue={setPhone}
          value={phone}
        />

        {/* address */}
        <SingleInputTextComp
          placeholder={"Addres"}
          text="Addres"
          setValue={setAddress}
          value={address}
        />

        {/* division */}
        <SingleInputTextComp
          placeholder={"Division"}
          text="Division"
          setValue={setDivision}
          value={division}
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
      </View>

      {/* login page text */}
      <View
        style={{
          width: "100%",
          marginVertical: 10,
        }}
      >
        <ButtonComp
          text="Update"
          onPress={updateUser}
          disabled={loading ? true : false}
          extraStyle={extraBtnStyle}
          loading={loading}
        />
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
    </ScrollView>
  );
};

export default EditProfile;

// SingleInputTextComp sub reuseable component
interface CompProps {
  text: string;
  placeholder: string;
  setValue: any;
  value: any;
}
const SingleInputTextComp: FC<CompProps> = ({
  text,
  setValue,
  placeholder,
  value,
}) => (
  <View style={styles.rowStyle}>
    <TextComp text={text} textExtraStyle={styles.textExtraStyle} />
    <InputComp
      placeholder={placeholder}
      inputExtraStyle={styles.inputExtraStyle}
      setValue={setValue}
      value={value}
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
