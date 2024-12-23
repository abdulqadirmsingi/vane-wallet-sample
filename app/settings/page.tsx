import { ConnectedWallets } from "@/components/wallet/connected-wallets";
import { SettingsTabs } from "@/components/settings/settings-tabs";

export default function SettingsPage() {
  return (
    <main className="container mx-auto p-4 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-6 lg:gap-8">
        <div className="order-2 lg:order-1">
          <ConnectedWallets />
        </div>
        <div className="order-1 lg:order-2 space-y-6">
          <h1 className="text-2xl font-bold">Settings</h1>
          <SettingsTabs />
        </div>
      </div>
    </main>
  );
}