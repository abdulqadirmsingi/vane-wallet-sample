"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SendTransactionForm } from "./send-transaction-form";
import { ReceiveTransaction } from "./receive-transaction";

export function TransactionTabs() {
  return (
    <Tabs defaultValue="send" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-8">
        <TabsTrigger value="send">Send</TabsTrigger>
        <TabsTrigger value="receive">Receive</TabsTrigger>
      </TabsList>
      
      <TabsContent value="send">
        <SendTransactionForm />
      </TabsContent>
      
      <TabsContent value="receive">
        <ReceiveTransaction />
      </TabsContent>
    </Tabs>
  );
}