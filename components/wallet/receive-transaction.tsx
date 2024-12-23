"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ReceiveTransaction() {
  const { toast } = useToast();
  const walletAddress = "0x1234...5678";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    toast({
      title: "Address Copied",
      description: "Wallet address copied to clipboard",
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="font-medium">Your Wallet Address</h3>
        <div className="flex gap-2">
          <Input value={walletAddress} readOnly />
          <Button variant="outline" size="icon" onClick={copyToClipboard}>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}