import React from "react";
import { Button, SafeAreaView, Text, View } from "react-native";

import { Video, Audio } from "expo-av";

import { styles } from "./styles";
import { TVideoPlayProps } from "./types";

const VideoPlayer = ({
  onDiscard,
  onSave,
  onShare,
  video,
}: TVideoPlayProps) => {
  return (
    <SafeAreaView>
      <Video source={{ uri: video.uri }} useNativeControls isLooping />
      <View>
        <Button title="Share" onPress={onShare} />
        <Button title="Save" onPress={onSave} />
        <Button title="Discard" onPress={onDiscard} />
      </View>
    </SafeAreaView>
  );
};

export default VideoPlayer;