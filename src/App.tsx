
import type { ReactNode } from "react"
import { ThemeProvider } from "@/components/theme-provider"

interface AppProps {
  children: ReactNode
}

const App = ({ children }: AppProps) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
{children}
    </ThemeProvider>
  )
}

export default App
