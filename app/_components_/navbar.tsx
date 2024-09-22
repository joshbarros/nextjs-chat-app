"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
  DrawerTitle,
} from './shadcn/drawer';
import LogoutButton from './logout-button';

export default function Navbar() {
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = document.cookie.split('; ').find(row => row.startsWith('token='));
    setIsAuthenticated(!!token); // Set authenticated state based on token presence
  }, []);

  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">
          <Link href="/">My Chat Application</Link>
        </h1>

        {/* Mobile Drawer */}
        <div className="sm:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <button className="text-white">
                <Menu size={24} />
              </button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerTitle>
                <DrawerClose asChild>
                  <Link href="/dashboard" className="block py-2">Home</Link>
                </DrawerClose>
              </DrawerTitle>
              <DrawerTitle>
                 <DrawerClose asChild>
                  <Link href="/dashboard/rooms" className="block py-2">Chat Rooms</Link>
                </DrawerClose>
              </DrawerTitle>

              {/* Show Logout Button only if authenticated */}
              {isAuthenticated && (
                <DrawerTitle>
                  <LogoutButton closeDrawer={() => setIsAuthenticated(false)} /> {/* Pass a closeDrawer prop to handle closing */}
                </DrawerTitle>
              )}
            </DrawerContent>
          </Drawer>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden sm:flex space-x-4 items-center">
          <Link href="/dashboard" className={pathname === '/dashboard' ? 'underline' : ''}>Home</Link>
          <Link href="/dashboard/rooms" className={pathname === '/dashboard/rooms' ? 'underline' : ''}>Chat Rooms</Link>

          {/* Show Logout Button only if authenticated */}
          {isAuthenticated && <LogoutButton />}
        </nav>
      </div>
    </header>
  );
}
