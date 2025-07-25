import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './fonts.css'
import App from './App.tsx'
import Dashboard from './pages/dashboard.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StakePage from './pages/stake.tsx'
import WithdrawPage from './pages/withdraw.tsx'
import { Navbar } from './components/navbar.tsx'
import WalletContextProvider from './lib/providers/WalletProviders.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <WalletContextProvider>
    <App>
    <Navbar />
        <main className="pt-35 px-6 space-y-8 pb-7">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/stake" element={<StakePage />} />
            <Route path="/withdraw" element={<WithdrawPage />} />
          </Routes>
        </main>
    </App>
    </WalletContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
