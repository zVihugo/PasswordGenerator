import React, { useState } from "react";
import { Text,Pressable } from "react-native";
import { BatTextInput } from "../BatTextInput/BatTextInput";
import { styles } from "./BatButtonStyles";
import generatePassword from "../../services/passwordGenerator";
import * as Clipboard from "expo-clipboard";

export function BatButton() {
  const [pass, setPass] = useState("");
  const [textCopied, setTextCopied] = useState(false);


  const handleClick = () => {
    let generateToken = generatePassword();
    setPass(generateToken);
  }

  const handleCopy = async() => {
    await Clipboard.setStringAsync(pass);
    setTextCopied(true);
  }

  return (
    <>
      
      <BatTextInput password={pass}/>
      <Pressable
        style={styles.button}
        onPress={handleClick}
      >
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={handleCopy}
      >
        <Text style={styles.text}>⚡ COPY</Text>
      </Pressable>
    </>
  );
}
