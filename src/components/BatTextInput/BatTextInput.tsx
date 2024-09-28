import React from "react";
import { TextInput } from "react-native";
import { styles } from "./BatTextInputStyles";

interface BatTextInputProps {
    password: string;
}

export function BatTextInput(props: BatTextInputProps) {
  return <TextInput placeholder="password" style={styles.inputer} value={props.password}></TextInput>;
}

