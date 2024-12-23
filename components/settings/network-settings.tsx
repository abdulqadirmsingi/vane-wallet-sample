"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Network } from "lucide-react";

export function NetworkSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Network className="h-5 w-5" />
          Network Settings
        </CardTitle>
        <CardDescription>Choose your preferred blockchain network</CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup defaultValue="mainnet">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="mainnet" id="mainnet" />
            <Label htmlFor="mainnet">Mainnet</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="testnet" id="testnet" />
            <Label htmlFor="testnet">Testnet</Label>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  );
}