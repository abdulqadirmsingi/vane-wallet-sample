"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Wallet } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Dashboard", href: "/" },
  { label: "History", href: "/history" },
  { label: "Settings", href: "/settings" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "px-3 py-2 text-sm font-medium transition-colors",
            pathname === item.href
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
          onClick={() => setIsOpen(false)}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
  
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4 lg:px-8">
        <div className="flex items-center gap-2">
          <Wallet className="h-6 w-6 text-gradient-to-r from-blue-500 to-purple-500" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Vane Web3
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="ml-8 hidden lg:flex gap-4">
          <NavLinks />
        </nav>
        
        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden ml-4">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <div className="flex flex-col gap-4 mt-8">
              <NavLinks />
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="ml-auto flex items-center gap-4">
          <div className="text-sm text-muted-foreground hidden sm:block">
            0x1234...5678
          </div>
        </div>
      </div>
    </header>
  );
}