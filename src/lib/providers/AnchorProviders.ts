import { AnchorProvider } from "@project-serum/anchor";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import type { WalletContextState } from "@solana/wallet-adapter-react";

export const getProvider = (wallet: WalletContextState) => {
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

  const provider = new AnchorProvider(
    connection,
    {
        publicKey: wallet.publicKey!,
        signTransaction: wallet.signTransaction!,
        signAllTransactions: wallet.signAllTransactions!,
    }, // 👈 wallet already satisfies Anchor's Wallet interface
    { preflightCommitment: "confirmed" }
  );

  return provider;
};
export const getAnchorProvider = (wallet: WalletContextState) => {
  return getProvider(wallet);
};