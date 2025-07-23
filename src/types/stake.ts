// src/types/stake.ts

export interface StakePoolStats {
  tvlLamports: number
  poolTokenSupply: number
  stakerCount: number
  totalValidators: number
}

export interface StakeFormProps {
  onStake: (amount: number) => Promise<void>
  onStakeWithSlippage?: (amount: number, slippage: number) => Promise<void>
  isLoading: boolean
}

export interface WithdrawFormProps {
  onWithdraw: (poolTokens: number) => Promise<void>
  onWithdrawWithSlippage?: (poolTokens: number, minLamports: number) => Promise<void>
  isLoading: boolean
}

export interface StatsCard {
  label: string
  value: string | number
  icon?: React.ReactNode
  color?: string
}

export interface StatsCardsProps {
  data: StatsCard[]
}

export interface Validator {
  votePubkey: string
  status: "active" | "transient" | "deactivated"
  stakeAmount: number
}

export interface ValidatorListProps {
  validators: Validator[]
  onAdd: (votePubkey: string) => Promise<void>
  onRemove: (votePubkey: string) => Promise<void>
}
