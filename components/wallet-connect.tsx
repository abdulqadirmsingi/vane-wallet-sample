"use client";

import { Button } from "@/components/ui/button";
import { useAccount, useConnect, useDisconnect, Connector } from "wagmi";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Badge } from "@/components/ui/badge";
import { Wallet2 } from "lucide-react";

export function WalletConnect() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { publicKey: solanaPublicKey } = useWallet();

  const truncateAddress = (address: string) =>
    `${address.slice(0, 6)}...${address.slice(-4)}`;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Wallet2 className="h-6 w-6" />
        <h2 className="text-xl font-bold">Wallet Connection</h2>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold">Ethereum Wallet:</h3>
          {isConnected ? (
            <div className="flex items-center gap-2">
              <Badge variant="outline">{truncateAddress(address!)}</Badge>
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <Button variant="outline" size="sm" onClick={() => disconnect()}>
                Disconnect
              </Button>
            </div>
          ) : (
            <Button onClick={() => connect({ connector: connectors[0] })}>Connect Ethereum Wallet</Button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <h3 className="font-semibold">Solana Wallet:</h3>
          <div className="flex items-center gap-2">
            {solanaPublicKey && (
              <>
                <Badge variant="outline">
                  {truncateAddress(solanaPublicKey.toString())}
                </Badge>
                <div className="h-2 w-2 rounded-full bg-green-500" />
              </>
            )}
            <WalletMultiButton className="!bg-primary hover:!bg-primary/90" />
          </div>
        </div>
      </div>
    </div>
  );
}