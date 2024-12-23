"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus, Wallet2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const walletOptions = [
  {
    id: "metamask",
    name: "MetaMask",
    icon: "/metamask-logo.svg",
    description: "Connect using MetaMask browser extension"
  },
  {
    id: "phantom",
    name: "Phantom",
    icon: "/phantom-logo.svg",
    description: "Connect using Phantom wallet"
  },
  {
    id: "coinbase",
    name: "Coinbase Wallet",
    icon: "/coinbase-logo.svg",
    description: "Connect using Coinbase Wallet"
  },
  {
    id: "trustwallet",
    name: "Trust Wallet",
    icon: "/trustwallet-logo.svg",
    description: "Connect using Trust Wallet"
  }
];

export function ConnectWalletDialog() {
  const [isConnecting, setIsConnecting] = useState<string | null>(null);
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  const handleConnect = async (walletId: string) => {
    try {
      setIsConnecting(walletId);
      // Simulating connection delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Wallet Connected",
        description: `Successfully connected to ${walletOptions.find(w => w.id === walletId)?.name}`,
      });
      setOpen(false);
    } catch (error) {
      toast({
        title: "Connection Failed",
        description: "Failed to connect wallet. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsConnecting(null);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full justify-start gap-2">
          <Plus className="h-4 w-4" />
          Connect New Wallet
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Wallet2 className="h-5 w-5" />
            Connect Wallet
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {walletOptions.map((wallet) => (
            <Button
              key={wallet.id}
              variant="outline"
              className="flex items-center justify-start gap-4 p-4 h-auto"
              onClick={() => handleConnect(wallet.id)}
              disabled={isConnecting !== null}
            >
              <div className="w-8 h-8 relative shrink-0">
                <Image
                  src={wallet.icon}
                  alt={wallet.name}
                  fill
                  className="rounded-full object-contain"
                />
              </div>
              <div className="flex flex-col items-start gap-1">
                <div className="font-medium">{wallet.name}</div>
                <div className="text-sm text-muted-foreground">
                  {wallet.description}
                </div>
              </div>
              {isConnecting === wallet.id && (
                <div className="ml-auto">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                </div>
              )}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}