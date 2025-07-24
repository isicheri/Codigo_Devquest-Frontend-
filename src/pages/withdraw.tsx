import { useState } from "react";
import WithdrawForm from "@/components/withdraw/WithdrawForm"



function WithdrawPage() {

    const [loadingWithdraw, setLoadingWithdraw] = useState(false);

    const handleWithdraw = async (amount: number) => {
        setLoadingWithdraw(true)
        // TODO: Add your withdraw contract call here
        console.log("Withdraw amount:", amount)
        await new Promise((res) => setTimeout(res, 1000))
        setLoadingWithdraw(false)
      }
    
      const handleWithdrawWithSlippage = async (amount: number, slippage: number) => {
        setLoadingWithdraw(true)
        console.log("Withdraw with slippage:", amount, slippage)
        await new Promise((res) => setTimeout(res, 1000))
        setLoadingWithdraw(false)
      }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent">Withdraw Your Tokens</h1>
      <section className="w-full max-w-md p-6  rounded-lg shadow-md">
             <WithdrawForm
               onWithdraw={handleWithdraw}
               onWithdrawWithSlippage={handleWithdrawWithSlippage}
               isLoading={loadingWithdraw}
             />
           </section>
    </div>
  );
}

export default WithdrawPage;