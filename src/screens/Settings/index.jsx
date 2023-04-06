import React from "react";
import { Text, View, StyleSheet } from "react-native";

function ProfileSettings() {
  return (
    <View style={styles.container}>
      <Text>Setting</Text>
    </View>
  );
}

export default ProfileSettings;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34D399",
    alignItems: "center",
    justifyContent: "center",
  },
});
