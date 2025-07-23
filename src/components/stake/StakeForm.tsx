import React, { useState } from "react"

interface StakeFormProps {
  onStake: (amount: number) => Promise<void>
  onStakeWithSlippage?: (amount: number, slippage: number) => Promise<void>
  isLoading: boolean
}

export default function StakeForm({
  onStake,
  onStakeWithSlippage,
  isLoading,
}: StakeFormProps) {
  const [amount, setAmount] = useState<string>("")
  const [useSlippage, setUseSlippage] = useState(false)
  const [slippage, setSlippage] = useState<string>("1") // default 1%
  const [error, setError] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const amt = parseFloat(amount)
    const slip = parseFloat(slippage)

    if (isNaN(amt) || amt <= 0) {
      setError("Please enter a valid amount greater than 0")
      return
    }

    if (useSlippage) {
      if (isNaN(slip) || slip < 0 || slip > 100) {
        setError("Slippage must be between 0 and 100")
        return
      }
      if (!onStakeWithSlippage) {
        setError("Slippage staking is not supported")
        return
      }
      try {
        await onStakeWithSlippage(amt, slip)
        setAmount("")
        setSlippage("1")
      } catch (err: any) {
        setError(err.message || "Error staking with slippage")
      }
    } else {
      try {
        await onStake(amt)
        setAmount("")
      } catch (err: any) {
        setError(err.message || "Error staking")
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md p-4 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div>
        <label htmlFor="amount" className="block mb-1 font-medium">
          Amount to Stake (SOL)
        </label>
        <input
          type="number"
          id="amount"
          step="any"
          min="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          disabled={isLoading}
          className="w-full rounded-md border border-gray-300 px-3 py-2 dark:bg-gray-900 dark:text-white dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
          placeholder="0.0"
          required
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="useSlippage"
          checked={useSlippage}
          onChange={() => setUseSlippage(!useSlippage)}
          disabled={isLoading}
          className="rounded border-gray-300 text-violet-600 focus:ring-violet-500 dark:bg-gray-900 dark:border-gray-700"
        />
        <label htmlFor="useSlippage" className="font-medium select-none">
          Use Slippage
        </label>
      </div>

      {useSlippage && (
        <div>
          <label htmlFor="slippage" className="block mb-1 font-medium">
            Slippage % (0 - 100)
          </label>
          <input
            type="number"
            id="slippage"
            min="0"
            max="100"
            step="any"
            value={slippage}
            onChange={(e) => setSlippage(e.target.value)}
            disabled={isLoading}
            className="w-full rounded-md border border-gray-300 px-3 py-2 dark:bg-gray-900 dark:text-white dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
            required={useSlippage}
          />
        </div>
      )}

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={
          isLoading || !amount || parseFloat(amount) <= 0 || (useSlippage && (parseFloat(slippage) < 0 || parseFloat(slippage) > 100))
        }
        className="w-full rounded-md bg-violet-600 px-4 py-2 font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-violet-700 transition"
      >
        {isLoading ? "Staking..." : "Stake"}
      </button>
    </form>
  )
}
