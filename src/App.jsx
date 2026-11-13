// Componente funcional que contem a porta de entrada do App
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./App/routes/AppNavigator"

export default function App() {
    return (
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    )
}


