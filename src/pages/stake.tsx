import { useState } from "react"
import StakeForm from "@/components/stake/StakeForm"


function StakePage() {
    const [loadingStake, setLoadingStake] = useState(false)

    const handleStake = async (amount: number) => {
    setLoadingStake(true)
    // TODO: call your Solana contract deposit logic here
    console.log("Staking amount:", amount)
    await new Promise((res) => setTimeout(res, 1000)) // simulate delay
    setLoadingStake(false)
  }

  const handleStakeWithSlippage = async (amount: number, slippage: number) => {
    setLoadingStake(true)
    console.log("Staking with slippage:", amount, slippage)
    await new Promise((res) => setTimeout(res, 1000))
    setLoadingStake(false)
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Stake Your Tokens</h1>
       <section>
              <h2 className="text-xl font-semibold mb-4">Stake SOL</h2>
              <StakeForm
                onStake={handleStake}
                onStakeWithSlippage={handleStakeWithSlippage}
                isLoading={loadingStake}
              />
            </section>
    </div>
  )
}

export default StakePage;
