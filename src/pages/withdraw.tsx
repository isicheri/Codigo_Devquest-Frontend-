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
      <h1 className="text-2xl font-bold mb-4">Withdraw Page</h1>
      <section>
             <h2 className="text-xl font-semibold mb-4">Withdraw SOL</h2>
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