import ScreenContainer from "../components/ScreenContainer";
import Logo from "../components/Logo";
import { Text } from "react-native";
import LabeledInput from "../components/LabeledInput";
import Button from "../components/Button";
import { useState } from "react";


export default function RegisterScreen1() {
  const [nome, setNome] = useState("");
    return(
      <ScreenContainer>
        <Logo />
        <Text>Insira alguns dados básicos: </Text>

        <LabeledInput label="Nome" placeholder="Digite seu nome completo" />
        <LabeledInput label="Email" placeholder="Insira seu endereço de email" />
        <LabeledInput label="Crie uma senha" placeholder="Insira sua senha" />
        <LabeledInput label="Repita a senha" placeholder="Insira sua senha" />
        <Button textButton="Avançar" />
      </ScreenContainer>
    )
}