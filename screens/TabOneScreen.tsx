import React from "react";
import { StyleSheet } from "react-native";
import { Avatar } from "../components/atoms/avatar/Avatar";
import { CustomButton } from "../components/atoms/CustomButton/CustomButton";
import { CustomLabel } from "../components/atoms/CustomLabel/CustomLabel";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { orangeEC994B } from "../styles/constants";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <CustomLabel
        label="Dont wanna make you have a bad day"
        fontWeight={600}
        fontSize={26}
        width={250}
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      <Avatar />
      {/* <CustomButton title="Get started" backgroundColor={orangeEC994B} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
