import { Camera } from "expo-camera";

export type TCameraViewProps = {
  cameraRef: React.RefObject<Camera>;
  isRecording: boolean;
  onRecord: () => void;
  onStopRecord: () => void;
};
