import { Main } from "./components/Main.jsx";

import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
    return (
        <SafeAreaProvider>
            <Main />
        </SafeAreaProvider>
    );
}
