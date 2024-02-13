import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

//Permissão para usar a camera
export async function getCameraPermission(
  setHasCameraPermission: React.Dispatch<React.SetStateAction<boolean>>
) {
  const cameraPermission = await Camera.requestCameraPermissionsAsync();
  setHasCameraPermission(cameraPermission.status === "granted");
}

//Permissão para usar o microfone
export async function getMicrophonePermission(
  setHasMicrophonePermission: React.Dispatch<React.SetStateAction<boolean>>
) {
  const microphonePermission = await Camera.requestMicrophonePermissionsAsync();
  setHasMicrophonePermission(microphonePermission.status === "granted");
}

//Permissão para acessar a galeria de mídias
export async function getLibraryPermission(
  setHasMediaLibraryPermission: React.Dispatch<React.SetStateAction<boolean>>
) {
  const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
  setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
}
