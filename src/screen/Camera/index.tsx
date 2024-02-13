import React, { useEffect, useState, useRef } from "react";
import { Text } from "react-native";

import { Camera } from "expo-camera";

import {
  getCameraPermission,
  getLibraryPermission,
  getMicrophonePermission,
} from "../../permissions";

import { recordVideo, saveVideo, shareVideo, stopRecord } from "../../actions";

import CameraView from "../../components/CameraView";
import VideoPlayer from "../../components/VideoPlayer";

const CameraScreen = () => {
  const cameraRef = useRef<Camera>(null);

  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [hasCameraPermission, setHasCameraPermission] =
    useState<boolean>(false);
  const [hasMicrophonePermission, setHasMicrophonePermission] =
    useState<boolean>(false);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] =
    useState<boolean>(false);
  const [video, setVideo] = useState<any>();

  useEffect(() => {
    (async () => {
      getCameraPermission(setHasCameraPermission);
      getMicrophonePermission(setHasMicrophonePermission);
      getLibraryPermission(setHasMediaLibraryPermission);
    })();
  }, []);

  if (hasCameraPermission === false || hasMicrophonePermission === false) {
    return <Text>Não tem permissão de camera ou audio</Text>;
  }

  if (hasMediaLibraryPermission === false) {
    return <Text>Não tem acesso a bibliotecas</Text>;
  }

  if (video) {
    const discardVideo = () => setVideo(undefined);

    return (
      <VideoPlayer
        video={video}
        onShare={() => shareVideo({ video: [video, setVideo] })}
        onSave={() => saveVideo({ video: [video, setVideo] })}
        onDiscard={discardVideo}
      />
    );
  }

  return (
    <CameraView
      cameraRef={cameraRef}
      isRecording={isRecording}
      onRecord={() => recordVideo({ cameraRef, setIsRecording, setVideo })}
      onStopRecord={() => stopRecord({ cameraRef, setIsRecording })}
    />
  );
};

export default CameraScreen;
