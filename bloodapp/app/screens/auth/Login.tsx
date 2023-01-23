import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import { AppColors } from "../../utils/AppColors";
import { InputComp } from "../../components/InputComp";
import ButtonComp from "../../components/ButtonComp";
import { TextComp } from "../../components/TextComp";
import { FC, useState } from "react";
import { authUserFunc } from "../../api/authFunc";

interface mainPropstypes {
  navigation?: any;
}

const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqdDPqIhJtO-FGbVxALsb5kdaZFreczNhcxoEmkhv-ubCuDAc9Pz8Xj-nJktjMo12qvpI&usqp=CAU";

const Login: FC<mainPropstypes> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    const data = {
      email,
      password,
    };
    const routePath = "/auth/login";
    authUserFunc(data, routePath)
      .then((data) => {
        console.log("succes");
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <View style={styles.root}>
      <StatusBar backgroundColor={AppColors.RED} />
      <View style={styles.logoWrapper}>
        <Image source={{ uri: img }} style={styles.imgStyle} />
      </View>
      <InputComp placeholder="Email" setValue={setEmail} />
      <InputComp placeholder="Password" setValue={setPassword} />
      <View
        style={{
          marginTop: 10,
          width: "100%",
        }}
      >
        <ButtonComp text="Sign Up" onPress={loginUser} />
        <View style={styles.signupTextContainer}>
          <TextComp
            text="Don't Have An Account ?"
            textExtraStyle={{ fontSize: 16 }}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <TextComp text="Sign UP!" textExtraStyle={styles.linkText} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.WHITE,
    paddingHorizontal: 20,
  },

  logoWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },

  imgStyle: {
    width: 100,
    height: 100,
  },
  signupTextContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 15,
  },

  linkText: {
    color: "green",
    fontWeight: "bold",
    marginLeft: -30,
  },
});
