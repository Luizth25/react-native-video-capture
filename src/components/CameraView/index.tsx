import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";
import { TCameraViewProps } from "./types";

const CameraView = () => {
  return (
    <View style={styles.container}>
      <Text>Camera Works</Text>
    </View>
  );
};

export default CameraView;
