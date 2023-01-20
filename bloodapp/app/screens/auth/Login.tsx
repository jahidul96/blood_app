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
import { FC } from "react";

interface mainPropstypes {
  navigation?: any;
}

const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqdDPqIhJtO-FGbVxALsb5kdaZFreczNhcxoEmkhv-ubCuDAc9Pz8Xj-nJktjMo12qvpI&usqp=CAU";

const Login: FC<mainPropstypes> = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <StatusBar backgroundColor={AppColors.RED} />
      <View style={styles.logoWrapper}>
        <Image source={{ uri: img }} style={styles.imgStyle} />
      </View>
      <InputComp placeholder="Email" />
      <InputComp placeholder="Password" />
      <View
        style={{
          marginTop: 10,
          width: "100%",
        }}
      >
        <ButtonComp text="Sign Up" onPress={() => {}} />
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
