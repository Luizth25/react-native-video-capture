import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { TCameraViewProps } from "./types";
import { Camera } from "expo-camera";

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
          <Text style={styles.buttonText}>
            {isRecording ? "Stop Recording" : "Start Recording"}
          </Text>
        </TouchableOpacity>
      </View>
    </Camera>
  );
};

export default CameraView;
