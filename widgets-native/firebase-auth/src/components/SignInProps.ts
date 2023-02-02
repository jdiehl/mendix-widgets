import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { ViewStyle } from "react-native";

export type SignInHandler = (user: FirebaseAuthTypes.User) => void | Promise<void>;

export interface SignInProps {
    onSignIn: SignInHandler;
    style: ViewStyle;
}
