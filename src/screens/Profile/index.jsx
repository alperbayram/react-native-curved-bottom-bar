import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
}

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#818CF8",
    alignItems: "center",
    justifyContent: "center",
  },
});
