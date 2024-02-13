import React from "react";
import { TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { TCameraViewProps } from "./types";
import { Camera } from "expo-camera";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const CameraView = ({
  cameraRef,
  isRecording,
  onRecord,
  onStopRecord,
}: TCameraViewProps) => {
  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonRecord}
          onPress={isRecording ? onStopRecord : onRecord}
        >
          {isRecording ? (
            <MaterialCommunityIcons name="stop" size={40} color="#ff0000" />
          ) : (
            <MaterialCommunityIcons name="record" size={40} color="#000" />
          )}
        </TouchableOpacity>
      </View>
    </Camera>
  );
};

export default CameraView;
