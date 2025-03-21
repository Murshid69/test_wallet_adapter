import React from "react";
import SolanaRoot from "./components/SolanaRoot";
import ButtonAuth from "./components/ButtonAuth";

const App = () => {
  return (
    <SolanaRoot>
      <main>
        <div style={{ display: "flex", gap: "10px", flexDirection: "column", padding: "20px" }}></div>
        <div>Test Wallet Adapter</div>
        <ButtonAuth />
        <div>v{__APP_VERSION__}</div>
      </main>
    </SolanaRoot>
  );
};

export default App;
