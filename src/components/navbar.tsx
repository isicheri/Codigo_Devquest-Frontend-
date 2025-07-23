import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-sm bg-background/70 border-b border-border">
      <div className="flex items-center space-x-4">
        <span className="text-xl font-bold text-violet-600">StakePool</span>
        <nav className="hidden md:flex space-x-4">
          <Button variant="ghost">Dashboard</Button>
          <Button variant="ghost">Stake</Button>
          <Button variant="ghost">Withdraw</Button>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <ModeToggle />
        {/* Placeholder for Wallet or Avatar */}
        <Button variant="outline" className="text-xs px-3">
          Connect Wallet
        </Button>
      </div>
    </header>
  )
}
