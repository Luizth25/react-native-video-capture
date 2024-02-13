import { Camera } from "expo-camera";

export type TRecordProps = {
  cameraRef: React.RefObject<Camera>;
  setIsRecording: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TRecordVideoProps = TRecordProps & {
  setVideo: React.Dispatch<any>;
};

export type TVideoProps = {
  video: [video: any, setVideo: React.Dispatch<any>];
};
