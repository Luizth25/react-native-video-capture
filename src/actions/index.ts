import { CameraRecordingOptions } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";

import { TRecordProps, TRecordVideoProps, TVideoProps } from "./types";

// Funções responsáveis por lidar com a gravação do video.
export const recordVideo = ({
  cameraRef,
  setIsRecording,
  setVideo,
}: TRecordVideoProps) => {
  setIsRecording(true);

  const option: CameraRecordingOptions = {
    quality: "1080p",
    maxDuration: 60,
    mute: false,
  };

  if (cameraRef && cameraRef.current) {
    cameraRef.current.recordAsync(option).then((recordedVideo: any) => {
      setVideo(recordedVideo);
      setIsRecording(false);
    });
  }
};

export const stopRecord = ({ cameraRef, setIsRecording }: TRecordProps) => {
  setIsRecording(false);
  if (cameraRef && cameraRef.current) {
    cameraRef.current.stopRecording();
  }
};

// Funções responsáveis por lidar com o video depois de gravado.
export const shareVideo = ({ video }: TVideoProps) => {
  shareAsync(video[0].uri).then(() => video[1](undefined));
};

export const saveVideo = ({ video }: TVideoProps) => {
  MediaLibrary.saveToLibraryAsync(video[0].uri).then(() => {
    video[1](undefined);
  });
};
