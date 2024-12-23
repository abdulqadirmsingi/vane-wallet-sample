"use client";

import { Card } from "@/components/ui/card";
import { ArrowDownRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const transactions = [
  {
    id: "1",
    type: "send",
    amount: "0.5 ETH",
    address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    date: "2024-03-20 14:30",
    status: "completed"
  },
  {
    id: "2",
    type: "receive",
    amount: "1.2 ETH",
    address: "0x123f35Cc6634C0532925a3b844Bc454e4438f123",
    date: "2024-03-19 09:15",
    status: "completed"
  },
  {
    id: "3",
    type: "send",
    amount: "0.3 ETH",
    address: "0x987d35Cc6634C0532925a3b844Bc454e4438f987",
    date: "2024-03-18 16:45",
    status: "pending"
  },
  {
    id: "4",
    type: "receive",
    amount: "0.8 ETH",
    address: "0x456d35Cc6634C0532925a3b844Bc454e4438f456",
    date: "2024-03-17 11:20",
    status: "completed"
  },
  {
    id: "5",
    type: "send",
    amount: "0.15 ETH",
    address: "0x789d35Cc6634C0532925a3b844Bc454e4438f789",
    date: "2024-03-16 13:55",
    status: "completed"
  }
];

export function TransactionHistory() {
  return (
    <div className="space-y-4">
      {transactions.map((tx) => (
        <Card key={tx.id} className="p-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className={`p-2 rounded-full ${
                tx.type === "send" 
                  ? "bg-red-500/10 text-red-500" 
                  : "bg-green-500/10 text-green-500"
              }`}>
                {tx.type === "send" ? (
                  <ArrowUpRight className="h-4 w-4" />
                ) : (
                  <ArrowDownRight className="h-4 w-4" />
                )}
              </div>
              
              <div>
                <div className="font-medium">
                  {tx.type === "send" ? "Sent" : "Received"} {tx.amount}
                </div>
                <div className="text-sm text-muted-foreground break-all sm:break-normal">
                  {tx.address.slice(0, 6)}...{tx.address.slice(-4)}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 ml-10 sm:ml-0">
              <div className="text-right">
                <div className="text-sm">{tx.date}</div>
                <div className={`text-sm ${
                  tx.status === "completed" 
                    ? "text-green-500" 
                    : "text-yellow-500"
                }`}>
                  {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                </div>
              </div>
              
              <Button variant="ghost" size="icon" className="shrink-0">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}