import React, { memo } from "react";

import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-react";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const ButtonAuth = memo<{}>((props) => {
  const { disconnect, wallet } = useWallet();

  if (!wallet) {
    return (
      <WalletModalProvider>
        <WalletMultiButton>Connect</WalletMultiButton>
      </WalletModalProvider>
    );
  }

  return <button onClick={disconnect}>Connected {wallet.adapter.publicKey?.toString()}</button>;
});

export default ButtonAuth;
