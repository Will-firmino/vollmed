import { ScrollView } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ScreenContainer({ children }) {
  return(
    <SafeAreaView>
      <KeyboardAvoidingView>
        <ScrollView 
          keyboardShouldPersistTaps="handled"
        >
          {children} 
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}