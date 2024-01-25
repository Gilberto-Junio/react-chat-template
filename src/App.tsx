import ChatPage from "./pages/ChatPage"
import { ThemeProvider } from "./components/theme-provider"

function App() {

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <ChatPage></ChatPage>
    </ThemeProvider>
  )
}

export default App
