"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ConnectWalletDialog } from "./connect-wallet-dialog";

export function ConnectedWallets() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Connected Wallets</h2>
      
      <div className="space-y-2">
        <Card className="p-3">
          <div className="flex items-center gap-3">
            <Image
              src="/metamask-logo.svg"
              alt="MetaMask"
              width={24}
              height={24}
              className="rounded-full"
            />
            <div className="flex-1 min-w-0">
              <div className="font-medium">Metamask</div>
              <div className="text-sm text-muted-foreground truncate">
                0x1234...5678
              </div>
            </div>
            <div className="h-2 w-2 rounded-full bg-green-500 flex-shrink-0" />
          </div>
        </Card>
        
        <ConnectWalletDialog />
      </div>
    </div>
  );
}