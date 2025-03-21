import React from "react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { clusterApiUrl } from "@solana/web3.js";
import { PropsWithChildren } from "react";

import {
  PhantomWalletAdapter,
  TorusWalletAdapter,
  TrustWalletAdapter,
  // LedgerWalletAdapter,
  MathWalletAdapter,
  TokenPocketWalletAdapter,
  CoinbaseWalletAdapter,
  SolongWalletAdapter,
  Coin98WalletAdapter,
  SafePalWalletAdapter,
  BitpieWalletAdapter,
  BitgetWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { SolflareWalletAdapter, initialize } from "@solflare-wallet/wallet-adapter";
import { GlowWalletAdapter } from "@solana/wallet-adapter-glow";
import { ExodusWalletAdapter } from "@solana/wallet-adapter-exodus";
import { SlopeWalletAdapter } from "@solana/wallet-adapter-slope";

initialize();
const network = WalletAdapterNetwork.Devnet;

// You can also provide a custom RPC endpoint.
const endpoint = clusterApiUrl(network);

const wallets = [
  new PhantomWalletAdapter(),
  new SolflareWalletAdapter(),
  new SlopeWalletAdapter(),
  new TorusWalletAdapter(),
  new GlowWalletAdapter(),
  new TrustWalletAdapter(),
  new MathWalletAdapter(),
  new TokenPocketWalletAdapter(),
  new CoinbaseWalletAdapter(),
  new SolongWalletAdapter(),
  new Coin98WalletAdapter(),
  new SafePalWalletAdapter(),
  new BitpieWalletAdapter(),
  new BitgetWalletAdapter(),
  new ExodusWalletAdapter(),
];

export default function SolanaRoot({ children }: PropsWithChildren) {
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} onError={(error) => window.alert(error)} autoConnect>
        {children}
      </WalletProvider>
    </ConnectionProvider>
  );
}
