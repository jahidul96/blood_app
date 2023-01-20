import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
} from "react-native";
import React, { FC, useState } from "react";
import { AppColors } from "../../utils/AppColors";
import { InputComp } from "../../components/InputComp";
import { TextComp } from "../../components/TextComp";
import DropDownList, { DropDownItems } from "../../components/DropDownList";
import { HEIGHT } from "../../utils/AppDimension";
import ButtonComp from "../../components/ButtonComp";
import { TouchableOpacity } from "react-native";

const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqdDPqIhJtO-FGbVxALsb5kdaZFreczNhcxoEmkhv-ubCuDAc9Pz8Xj-nJktjMo12qvpI&usqp=CAU";

const sex = ["Male", "Female", "Others"];

interface mainPropstypes {
  navigation?: any;
}

const Register: FC<mainPropstypes> = ({ navigation }) => {
  const [showgender, setShowgender] = useState(false);
  const [gender, setGender] = useState("");

  const register = () => {
    console.log("btn cliked");
  };
  return (
    <ScrollView style={styles.root}>
      <StatusBar backgroundColor={AppColors.RED} />
      <View style={styles.logoWrapper}>
        <Image source={{ uri: img }} style={styles.imgStyle} />
      </View>
      <View style={styles.formWrapper}>
        <View style={styles.rowStyle}>
          <TextComp text="Name" textExtraStyle={styles.textExtraStyle} />
          <InputComp
            placeholder="Name"
            inputExtraStyle={styles.inputExtraStyle}
          />
        </View>
        <View style={styles.rowStyle}>
          <TextComp text="Email" textExtraStyle={styles.textExtraStyle} />
          <InputComp
            placeholder="Email"
            inputExtraStyle={styles.inputExtraStyle}
          />
        </View>
        <View style={styles.rowStyle}>
          <TextComp text="Password" textExtraStyle={styles.textExtraStyle} />
          <InputComp
            placeholder="Password"
            inputExtraStyle={styles.inputExtraStyle}
          />
        </View>
        <View style={styles.rowStyle}>
          <TextComp text="Phone" textExtraStyle={styles.textExtraStyle} />
          <InputComp
            placeholder="Phone no"
            inputExtraStyle={styles.inputExtraStyle}
          />
        </View>
        <View style={styles.rowStyle}>
          <TextComp text="Addres" textExtraStyle={styles.textExtraStyle} />
          <InputComp
            placeholder="Addres"
            inputExtraStyle={styles.inputExtraStyle}
          />
        </View>
        <View style={styles.rowStyle}>
          <TextComp text="Division" textExtraStyle={styles.textExtraStyle} />
          <InputComp
            placeholder="Division"
            inputExtraStyle={styles.inputExtraStyle}
          />
        </View>

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

      {showgender && (
        <DropDownItems
          data={sex}
          setValue={setGender}
          setShow={setShowgender}
          viewStyle={styles.dropdownItemStyle}
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
    marginTop: 20,
  },

  imgStyle: {
    width: 100,
    height: 100,
  },
  formWrapper: {
    marginTop: 20,
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
});
