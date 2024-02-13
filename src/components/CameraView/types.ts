import { Camera } from "expo-camera";

export type TCameraViewProps = {
  ref: React.RefObject<Camera>;
  isRecording: boolean;
  onRecord: () => void;
  onStopRecord: () => void;
};
