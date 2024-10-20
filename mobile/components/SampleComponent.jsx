import React from "react";
import { View, StyleSheet } from "react-native";

const SampleComponent = () => {
  return (
    <View style={styles.container}>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default SampleComponent;
