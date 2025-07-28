"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { LogOut } from "lucide-react"
import {motion} from "framer-motion"
import { cn } from "@/lib/utils"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer"
import { Menu, X } from "lucide-react"
import { WalletMultiButton,WalletDisconnectButton } from "@solana/wallet-adapter-react-ui"
import { useWallet } from "@solana/wallet-adapter-react"


export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const {  connected,disconnect } = useWallet()

  return (
    <motion.header 
     initial={{ y: -20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.4, ease: "easeOut" }}
    className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-sm bg-background/70 border-b border-border">
      <div className="flex items-center space-x-4">
        {/* Brand */}
        <span className="text-xl font-bold text-violet-600 cursor-grab">
          <a href="/" className="bitcount-400">StakePool</a>
        </span>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-4">
          <Button className="cursor-grab" variant="ghost">
            <a href="/">Dashboard</a>
          </Button>
          <Button className="cursor-grab" variant="ghost">
            <a href="/stake">Stake</a>
          </Button>
          <Button className="cursor-grab" variant="ghost">
            <a href="/withdraw">Withdraw</a>
          </Button>
        </nav>

        {/* Mobile drawer trigger */}
        <div className="md:hidden">
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="cursor-pointer">
                <Menu className="h-5 w-5" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-violet-600">Menu</span>
                  <DrawerClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                    </Button>
                  </DrawerClose>
                </div>
                <div className="flex flex-col space-y-2">
                  <a href="/" onClick={() => setOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start">
                      Dashboard
                    </Button>
                  </a>
                  <a href="/stake" onClick={() => setOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start">
                      Stake
                    </Button>
                  </a>
                  <a href="/withdraw" onClick={() => setOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start">
                      Withdraw
                    </Button>
                  </a>
                </div>
              </div>
              {connected && (
  <div className="w-full flex justify-center items-center md:hidden pt-4 border-t">
    <WalletDisconnectButton className="text-xs px-3 cursor-grab! min-w-[120px] bg-red-500! hover:bg-red-600 text-white items-center space-x-2 h-12" />
  </div>
)}
            </DrawerContent>
          </Drawer>
        </div>
      </div>

      {/* Right side */}
     <div className="flex items-center gap-1 sm:gap-3 justify-end overflow-hidden truncate max-w-full">
  <ModeToggle />
  <WalletMultiButton className="text-xs px-3 cursor-grab! min-w-[120px]" />
  {connected && (
    <div className="hidden md:flex">
      <WalletDisconnectButton  />
    </div>
  )}
</div>
    </motion.header>
  )
}
