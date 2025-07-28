import idl from "../idl/anchor_spl_stake_pool.json";
import { getProvider } from "../lib/providers/AnchorProviders";
import { Program, type Idl } from "@project-serum/anchor";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import {  PublicKey } from "@solana/web3.js";

const PROGRAM_ID = new PublicKey(idl.address);

const POOL_ACCOUNT = new PublicKey("FGmV5sS92Wh9PqTwe8HXUf8cgcjy2Gib6Q1AnJnTS3ZB");

export const useStakePool = () => {
  const wallet = useWallet();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchStakePool = async () => {
      const provider = getProvider(wallet);
      const program = new Program(idl as unknown as Idl, PROGRAM_ID, provider);
      if (!provider) {
        console.error("Provider not found");
        return;
      } 
      try {
        const stakePool= await program.account.stakePool.fetch(POOL_ACCOUNT);
         setData(stakePool);
      } catch (error) {
        console.error("Error fetching stake pool data:", error);
        return;
        
      }
  
    };

        if (wallet.connected && wallet.publicKey) {
      fetchStakePool();
    }
  },  [wallet.connected, wallet.publicKey?.toBase58()]);

  return { data };
};
