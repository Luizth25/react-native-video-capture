import React from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";

import { Video } from "expo-av";

import { styles } from "./styles";
import { TVideoPlayProps } from "./types";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const VideoPlayer = ({
  onDiscard,
  onSave,
  onShare,
  video,
}: TVideoPlayProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Video
        style={styles.video}
        source={{ uri: video.uri }}
        useNativeControls
        isLooping
      />
      <View style={styles.menuButton}>
        <TouchableOpacity onPress={onSave}>
          <MaterialCommunityIcons name="content-save" size={40} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onShare}>
          <MaterialCommunityIcons name="share-variant" size={40} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDiscard}>
          <MaterialCommunityIcons name="trash-can" size={40} color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default VideoPlayer;
