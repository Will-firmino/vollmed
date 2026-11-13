import { Text, StyleSheet } from "react-native";
import { useState } from "react";

import LabeledInput from "../components/LabeledInput";
import Button from "../components/Button";

import ScreenContainer from "../components/ScreenContainer";
import Logo from "../components/Logo";

import colors from "../theme/colors";
import typography from "../theme/typography";
import spacing from "../theme/spacing";

export default function RegisterScreen1() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");
    return(
      <ScreenContainer>
        <Logo />
        <Text 
          style={styles.title}>
            Insira alguns dados básicos: 
        </Text>
        <LabeledInput 
          label="Nome" 
          placeholder="Digite seu nome completo" 
          value={nome} 
          onChangeText={setNome}
        />
        <LabeledInput 
          label="Email" 
          placeholder="Insira seu endereço de email" 
          value={email} 
          onChangeText={setEmail}
        />
        <LabeledInput 
          label="Crie uma senha" 
          placeholder="Insira sua senha" 
          value={senha} 
          onChangeText={setSenha}
        />
        <LabeledInput 
          label="Repita a senha" 
          placeholder="Insira sua senha" 
          value={confirmaSenha} 
          onChangeText={setConfirmaSenha}
        />
        <Button 
          textButton="Avançar" 
        />
      </ScreenContainer>
    );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 22,
    color: colors.textSecondary,
    marginBottom: spacing.xl,
  },
});