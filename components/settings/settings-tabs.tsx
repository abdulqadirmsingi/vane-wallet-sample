"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SecuritySettings } from "./security-settings";
import { NetworkSettings } from "./network-settings";
import { NotificationSettings } from "./notification-settings";

export function SettingsTabs() {
  return (
    <Tabs defaultValue="security" className="w-full">
      <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2">
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="networks">Networks</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      
      <div className="mt-6">
        <TabsContent value="security">
          <SecuritySettings />
        </TabsContent>
        
        <TabsContent value="networks">
          <NetworkSettings />
        </TabsContent>
        
        <TabsContent value="notifications">
          <NotificationSettings />
        </TabsContent>
      </div>
    </Tabs>
  );
}