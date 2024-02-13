import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { TCameraViewProps } from "./types";
import { Camera } from "expo-camera";

const CameraView = ({
  ref,
  isRecording,
  onRecord,
  onStopRecord,
}: TCameraViewProps) => {
  return (
    <Camera>
      <View>
        <TouchableOpacity>
          <Text>Record Video</Text>
        </TouchableOpacity>
      </View>
    </Camera>
  );
};

export default CameraView;
